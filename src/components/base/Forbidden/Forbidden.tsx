import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Forbidden.styled'

const Forbidden = () => {
  const t = useMessages('Forbidden')

  return (
    <Container>
      <Title>{t(messages.content)}</Title>

      <button
        onClick={() => {
          throw new Error()
        }}
      >
        dont touch me
      </button>
    </Container>
  )
}

// type Props = {}

export default Forbidden
