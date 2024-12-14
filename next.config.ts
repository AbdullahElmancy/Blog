import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* config options here */
  async redirects(){
    return [
      {
        source:"/home",
        destination:"/",
        permanent:true,
      }
    ]
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ]
  }
  
};

export default nextConfig;
