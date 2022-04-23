import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Faiz &amp; Rara Weddings</title>
          <link href="https://fonts.googleapis.com/css2?family=Amita:wght@400&family=Cormorant:wght@400;600&family=Poppins:wght@200;400&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument