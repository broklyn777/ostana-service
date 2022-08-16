/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/om',
        destination: '/kontakt',
        permanent: true,
      },
    ]
  },

  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
  images: {
    domains: ['res.cloudinary.com', 'rb.gy'],
  },

}

