/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return `${process.env.GIT_HASH}`;
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 3,
  },
};

export default nextConfig;
