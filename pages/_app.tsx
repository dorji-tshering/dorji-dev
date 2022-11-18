import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { usePreserveScroll } from '../components/utils/usePreserveScroll';

export default function App({ Component, pageProps }: AppProps) {
    //usePreserveScroll();

    return (
        <main>
            <Head>
                <title>Dorji Tshering</title> 
                <link rel="icon" href="/images/portfolio-logo.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    )
}
