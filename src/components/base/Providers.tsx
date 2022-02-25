import { ThemeProvider } from '@mui/material'
import theme from 'app/ui/theme'
import PageLoadingProvider from './PageLoadingProvider'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'app/redux/store'
import SocketProvider from 'app/socket'

const Providers = ({ children }) => {
  return (
    <PageLoadingProvider>
      <ReduxProvider store={store}>
        <SocketProvider isListening={false}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </SocketProvider>
      </ReduxProvider>
    </PageLoadingProvider>
  )
}

export default Providers
