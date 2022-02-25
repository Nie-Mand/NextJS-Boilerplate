import { H1 } from 'app/ui'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const PageLoadingProvider = ({ children }) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
    router.events.on('routeChangeError', () => setLoading(false))
  }, [router])

  if (loading) return <H1>Loading</H1>
  return children
}

export default PageLoadingProvider
