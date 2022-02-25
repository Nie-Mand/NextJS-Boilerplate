import Head from 'next/head'
import Blog from './Blog'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const BlogPage = () => {
  const t = useMessages('Blog')

  return (
    <>
      <Head>
        <title>{t(messages.title)}</title>
      </Head>
      <Blog />
    </>
  )
}

export default BlogPage
