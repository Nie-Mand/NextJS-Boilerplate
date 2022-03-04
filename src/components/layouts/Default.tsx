import { useSwitchLanguage } from 'app/hooks'
import * as routes from 'app/routes'

const DefaultLayout = (props: Props) => {
  const handleSwitchLanguage = useSwitchLanguage()

  console.log(
    routes.blog({
      category: 'react',
      blogId: 'fjkhsdf',
    }),
  )

  return (
    <div>
      <h1>Default Layout</h1>
      <button onClick={handleSwitchLanguage}>switch language</button>
      {props.children}
    </div>
  )
}
type Props = {
  children: JSX.Element | JSX.Element[]
}

export default DefaultLayout
