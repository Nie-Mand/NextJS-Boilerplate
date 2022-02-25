import { Button } from 'app/ui'
import { useUser } from 'app/hooks'

export default function Home() {
  const { state, createUser } = useUser()

  console.log(state)

  return (
    <div>
      hello
      <Button
        key={'button'}
        onClick={() =>
          createUser({
            message: 'hello world',
          })
        }
      >
        Hello
      </Button>
    </div>
  )
}
