import { withSentryConfig } from '@sentry/nextjs'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}

export default withSentryConfig(nextConfig, {
  org: 'or-damari',
  project: 'minimal-portfolio',

  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true
})
