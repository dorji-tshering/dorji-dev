import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Head>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <ThemeProvider enableSystem={true} attribute="class">
                <Layout>
                        <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </main>
    )
}
