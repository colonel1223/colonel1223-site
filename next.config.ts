import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = !!process.env.GITHUB_ACTIONS;

// If using custom domain (colonel1223.net), basePath should be "".
// If viewing on github.io/<repo>, basePath should be "/<repo>".
const basePath = isGitHubPages ? (repo ? `/${repo}` : "") : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
};

export default nextConfig;
