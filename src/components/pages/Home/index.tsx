import Head from 'next/head'
import Home from './Home'
// import { useMessages } from 'app/hooks'
import messages from './messages.json'
import Layout from 'app/components/layouts/Default'

const HomePage = () => {
  // const t = useMessages('Home')

  return (
    <>
      <Head>{/* <title>{t(messages.title)}</title> */}</Head>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default HomePage
