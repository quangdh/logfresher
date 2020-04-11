const fs = require('fs');

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')();
const withSourceMaps = require('@zeit/next-source-maps');

const Mode = require('frontmatter-markdown-loader/mode');

const blogPostsFolder = './src/content/posts';
const getPathsForPosts = () => {
    return fs
      .readdirSync(blogPostsFolder)
      .map(blogName => {
        const trimmedName = blogName.substring(0, blogName.length - 3);
        return {
          [`/post/${trimmedName}`]: {
            page: '/post/[slug]',
            params: {
              slug: trimmedName,
            },
            query: {
              slug: trimmedName,
            },
          },
        };
      })
      .reduce((acc, curr) => {
        return { ...acc, ...curr };
      }, {});
  };

const nextConfiguration = {
    cssModules: false,
    exportTrailingSlash: true,
    extension: /\.(md|mdx)$/,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md', 'mdx'],
    devtool: 'hidden-source-map',
    webpack: configuration => {
        configuration.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: [Mode.REACT] }
        });
        return configuration;
    },
    async exportPathMap(defaultPathMap) {
      return {
        ...defaultPathMap,
        ...getPathsForPosts(),
      };
    }
}

module.exports = withPlugins([withCSS, withSass, withMDX, withSourceMaps], nextConfiguration);
