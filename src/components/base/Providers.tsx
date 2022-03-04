import { ThemeProvider } from '@mui/material'
import theme from 'app/ui/theme'
import PageLoadingProvider from './PageLoadingProvider'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'app/redux/store'
import SocketProvider from 'app/socket'
import { ConnectedRouter } from 'connected-next-router'

const Providers = ({ children }) => {
  return (
    <PageLoadingProvider>
      <ReduxProvider store={store}>
        <ConnectedRouter>
          <SocketProvider isListening={false}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </SocketProvider>
        </ConnectedRouter>
      </ReduxProvider>
    </PageLoadingProvider>
  )
}

export default Providers
