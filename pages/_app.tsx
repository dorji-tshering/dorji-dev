import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { useRef } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const scrollRef = useRef({
        positionY: 0
    })

    return (
        <main>
            <Head>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <Layout>
                    <Component {...pageProps} />
            </Layout>
        </main>
    )
}
