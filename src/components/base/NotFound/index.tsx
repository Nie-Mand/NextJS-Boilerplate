import Head from 'next/head'
import NotFound from './NotFound'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import Layout from 'app/components/layouts/Default'

const NotFoundPage = () => {
  const t = useMessages('NotFound')

  return (
    <>
      <Head>
        <title>{t(messages.title)}</title>
      </Head>
      <Layout>
        <NotFound />
      </Layout>
    </>
  )
}

export default NotFoundPage
