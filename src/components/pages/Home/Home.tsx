import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Home.styled'

const Home = () => {
  const t = useMessages('Home')
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>
    </Container>
  )
}

// type Props = {}

export default Home
