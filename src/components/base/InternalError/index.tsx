import Head from 'next/head'
import InternalError from './InternalError'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import Layout from 'app/components/layouts/Default'

const InternalErrorPage = () => {
  const t = useMessages('InternalError')

  return (
    <>
      <Head>
        <title>{t(messages.title)}</title>
      </Head>
      <Layout>
        <InternalError />
      </Layout>
    </>
  )
}

export default InternalErrorPage
