import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
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
