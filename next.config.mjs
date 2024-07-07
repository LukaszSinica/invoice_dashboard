/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (nextConfig, {webpack}) => {
        nextConfig.plugins.push(
            new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
        )
        return nextConfig;
    },
    images: {
        domains: ['lh3.googleusercontent.com']
    }
};

export default nextConfig;
