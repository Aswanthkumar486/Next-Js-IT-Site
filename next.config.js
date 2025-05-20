// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/Next-Js-IT-Site' : '',
  images: {
    unoptimized: true,
  },
};
