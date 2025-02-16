/** @type {import('next').NextConfig} */
import type { Configuration } from "webpack";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack(config: Configuration) {
    if (!config.module) {
      config.module = {
        rules: [],
      };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
