import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Html>
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="#ffffff" name="theme-color" />
            <meta content="#ffffff" name="msapplication-TileColor" />
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;1,400;1,700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </Html>
    );
  }
}

export default MyDocument;
