import Navbar from '@/components/navbar/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Providers} from "./providers";
import { Prompt } from 'next/font/google'
import {NextUIProvider} from "@nextui-org/react"
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
  <main className={prompt.className}>
            <Navbar/>
    <Component {...pageProps} />
  </main>
  </Providers>
  ) 
}
