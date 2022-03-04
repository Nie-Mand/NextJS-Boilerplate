import Head from 'next/head'
import Forbidden from './Forbidden'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import Layout from 'app/components/layouts/Default'

const ForbiddenPage = () => {
  const t = useMessages('Forbidden')

  return (
    <>
      <Head>
        <title>{t(messages.title)}</title>
      </Head>
      <Layout>
        <Forbidden />
      </Layout>
    </>
  )
}

export default ForbiddenPage
