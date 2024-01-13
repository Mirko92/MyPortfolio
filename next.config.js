/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'dummyimage.com',
  //       port: '',
  //       pathname: '**',
  //     },
  //   ],
  // },

  redirects() {
    return [
      {
        source: "/",
        destination: "/me",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
