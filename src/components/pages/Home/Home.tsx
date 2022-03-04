import { useMessages, useExample } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Home.styled'

const Home = () => {
  const t = useMessages('Home')

  const { createUser } = useExample()
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>

      <button
        onClick={() => {
          createUser({
            age: 10,
            name: 'test',
          })
        }}
      >
        tuf
      </button>
    </Container>
  )
}

// type Props = {}

export default Home
