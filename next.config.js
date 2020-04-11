const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')();
const withSourceMaps = require('@zeit/next-source-maps');

const nextConfiguration = {
    cssModules: false,
    exportTrailingSlash: true,
    extension: /\.(md|mdx)$/,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    devtool: 'hidden-source-map'
}

module.exports = withPlugins([withCSS, withSass, withMDX, withSourceMaps], nextConfiguration);
