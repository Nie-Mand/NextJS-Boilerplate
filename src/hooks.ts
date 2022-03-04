export * from './redux/hooks'
import { useRouter } from 'next/router'

// TODO: I18N
// import { useTranslation } from 'react-i18next'

// export const useMessages = (ns: string) => {
//   const { t } = useTranslation()

//   type Message = {
//     id: string
//     defaultMessage: string
//   }
//   const handler = (message: Message) => {
//     return t(`${ns}:${message.id}`, message.defaultMessage)
//   }

//   return handler
// }

export const useSwitchLanguage = () => {
  const { locale, push, pathname } = useRouter()
  const handleSwitchLanguage = () => {
    if (locale === 'en') push('/', '/', { locale: 'fr' })
    else push(pathname, pathname, { locale: 'en' })
  }

  return handleSwitchLanguage
}
