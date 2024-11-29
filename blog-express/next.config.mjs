/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
               hostname: "salman-blogs-pied.vercel.app"
            }
        ]
    }
};

export default nextConfig;
