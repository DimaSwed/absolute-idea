'use client'

import { ReactNode, useEffect, useState } from 'react'
import i18n from '../../i18n'
import { I18nextProvider } from 'react-i18next'

interface I18nProviderProps {
  children: ReactNode
  lang: string // ⬅ Добавляем язык в пропсы
}

export default function I18nProvider({ children, lang }: I18nProviderProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    i18n.changeLanguage(lang).then(() => setReady(true)) // ⬅ Меняем язык в i18n
  }, [lang])

  if (!ready) return null // ⬅ Ждем загрузки перед рендерингом

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
