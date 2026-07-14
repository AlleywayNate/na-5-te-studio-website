/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate a static HTML/CSS/JS export
  basePath: '/na-5-te-studio-website', // Matches your GitHub repository name
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
