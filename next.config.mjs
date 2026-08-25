/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site stays static-fast and host-agnostic while carrying the React runtime.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
