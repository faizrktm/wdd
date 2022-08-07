module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/full',
        permanent: false,
      },
    ]
  },
}
