import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Forbidden.styled'

const Forbidden = () => {
  const t = useMessages('Forbidden')
  throw new Error()

  return (
    <Container>
      <Title>{t(messages.content)}</Title>
    </Container>
  )
}

// type Props = {}

export default Forbidden
