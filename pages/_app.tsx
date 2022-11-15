import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DM_Sans } from '@next/font/google';
import Layout from '../components/layout/Layout';

const DmSans = DM_Sans({
    weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {

    return (
        <main className={DmSans.className}>
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
