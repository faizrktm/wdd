import Head from 'next/head';

export default function Meta({ guest }: { guest?: string }) {
  const description = 'We heartily invite you to share in our request and joy your presence at our wedding. See you!';
  const title = `Hi ${guest || ''}, you are invited to our wedding!`;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/meta-new.png" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/meta-new.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
