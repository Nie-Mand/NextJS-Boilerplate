import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Hello.styled'

const Hello = () => {
  const t = useMessages('Hello')
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>
    </Container>
  )
}

// type Props = {}

export default Hello
