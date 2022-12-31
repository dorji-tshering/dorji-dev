import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

    return (
        <Html lang='en'>
            <Head> 
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Mali:wght@400;500&family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}