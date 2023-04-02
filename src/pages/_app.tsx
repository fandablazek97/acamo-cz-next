import Favicon from '@/components/Favicon'
import '@/styles/globals.css'
import "@fontsource/source-code-pro/500.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Favicon />
      <Component {...pageProps} />
    </div>
  )
}
