/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedForwardedHosts: ['bookish-space-adventure-wp774rjggh69x-3000.app.github.dev'],
        },
    },
}

module.exports = nextConfig
