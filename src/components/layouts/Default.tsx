import { useSwitchLanguage } from 'app/hooks'

const DefaultLayout = (props: Props) => {
  const handleSwitchLanguage = useSwitchLanguage()

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
