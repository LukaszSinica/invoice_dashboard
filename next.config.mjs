/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (nextConfig, {webpack}) => {
        nextConfig.plugins.push(
            new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
        )
        return nextConfig;
    }
};

export default nextConfig;
