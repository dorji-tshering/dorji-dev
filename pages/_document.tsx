import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang='en'>
                <Head> 
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&family=Mali:wght@400;500&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
}