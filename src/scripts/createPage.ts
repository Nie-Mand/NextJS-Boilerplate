import question from 'inquirer'
import { create } from './utils'
import Path from 'path'
import Fs from 'fs'
import { createSpinner } from 'nanospinner'
import glob from 'glob'
import Ejs from 'ejs'

const path = (_path: string) => Path.resolve(__dirname, '../', _path)

const capitalize = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)

const disCapitalize = (name: string) =>
  name.charAt(0).toLowerCase() + name.slice(1)

export const createPage = () => {
  glob('src/components/layouts/*.tsx', async (_, paths) => {
    const layouts = paths.map(
      path => path.split('/').slice(-1)[0].split('.')[0],
    )

    const config = await question.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the page?',
        validate: (input: string) => {
          if (input.length === 0) {
            return 'Please enter a name'
          }

          if (Fs.existsSync(path(`components/pages/${capitalize(input)}`))) {
            return `${input} already exists`
          }
          return true
        },
        default: 'Home',
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is the path of the page? (could contain parameters)',
      },
      {
        type: 'list',
        name: 'layout',
        message: 'What is the layout of the page?',
        choices: layouts,
        default: 'Default',
      },
    ])

    const name = capitalize(config.name)

    const params = config.path.includes(':')

    const pathString =
      '/' +
      config.path
        .split('/')
        .filter((path: string) => path.length > 0)
        .map((path: string) => {
          if (path.includes(':') && path.length > 1) {
            const param = path.split(':')[1]
            return '${params.' + param + '}'
          }
          return path
        })
        .join('/')

    const paramTypes = config.path
      .split('/')
      .filter((path: string) => path.length > 0)
      .filter((path: string) => path.includes(':') && path.length > 1)
      .map((path: string) => `${path.split(':')[1]}: string, `)
      .join('')

    const data = {
      params,
      noParams: !params,
      name: disCapitalize(name),
      path: pathString,
      paramTypes,
    }

    const spinner = createSpinner(`creating ${name}..\n`).start()

    Fs.mkdirSync(path(`components/pages/${name}`))

    const pathOf = (filename: string) =>
      path(`components/pages/${name}/${filename}`)

    Fs.mkdirSync(pathOf(`components`))

    const success = (file: string, action: string) => (e: any) => {
      if (e) {
        spinner.error({
          text: e.message,
        })
      } else {
        spinner.success({
          text: action + ' ' + file,
        })
      }
    }

    await Fs.writeFile(
      pathOf('./components/index.ts'),
      'export {}\n',
      await success('components/index.ts', 'created'),
    )

    await Fs.writeFile(
      pathOf('./components/index.ts'),
      'export {}\n',
      await success('components/index.ts', 'created'),
    )

    await create(
      'page/index.txt',
      pathOf('./index.tsx'),
      {
        Name: capitalize(name),
        name,
        Layout: config.layout,
      },
      await success('index.tsx', 'created'),
    )

    await create(
      'page/messages.txt',
      pathOf('./messages.json'),
      {
        Name: capitalize(name),
        name,
      },
      await success('messages.json', 'created'),
    )

    await create(
      'page/component.txt',
      pathOf(`./${capitalize(name)}.tsx`),
      {
        Name: capitalize(name),
        name,
      },
      await success(`${capitalize(name)}.tsx`, 'created'),
    )

    // TODO: Add tests
    // await create(
    //   'page/test.txt',
    //   pathOf(`./${capitalize(name)}.test.tsx`),
    //   {
    //     Name: capitalize(name),
    //   },
    //   success(`${capitalize(name)}.test.tsx`, 'created'),
    // )

    await create(
      'page/styled.txt',
      pathOf(`./${capitalize(name)}.styled.tsx`),
      {},
      await success(`${capitalize(name)}.styled.tsx`, 'created'),
    )

    const routesConfigContent = await Fs.readFileSync(path('routes.ts'), 'utf8')

    const routesConfigtemplatePath = Path.resolve(
      __dirname,
      './templates/page/routes.txt',
    )

    const templateContent = await Fs.readFileSync(
      routesConfigtemplatePath,
      'utf8',
    )

    await Fs.writeFileSync(
      path('routes.ts'),
      routesConfigContent + '\n' + Ejs.render(templateContent, data),
    )

    await success(`routes.ts`, 'updated')

    //     console.log(`
    // Go add the following your/pages folder:
    // export { default } from 'app/components/pages/${capitalize(name)}'
    // `)
  })
}
