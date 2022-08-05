import Document, { Html, Head, Main, NextScript } from 'next/document'

const description = 'Hi, you are invited to our special day, come join us!';
const title = 'Faiz & Rara Weddings';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/meta.png" />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="/images/meta.png" />
          <meta name="twitter:card" content="summary_large_image" />

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
