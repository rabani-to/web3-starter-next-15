import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins = config.plugins || []
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pino-pretty$/,
      })
    )

    return config
  },
}

export default nextConfig
