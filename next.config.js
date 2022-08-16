/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {

  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
  images: {
    domains: ['res.cloudinary.com', 'rb.gy'],
  },

}

