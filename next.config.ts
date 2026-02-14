import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	assetPrefix: process.env.NODE_ENV === "production" ? "/me/" : "",
	basePath: process.env.NODE_ENV === "production" ? "/me" : "",
	trailingSlash: false,
	images: {
		unoptimized: true,
	},
	experimental: {
		useLightningcss: true,
	}
};

export default nextConfig;
