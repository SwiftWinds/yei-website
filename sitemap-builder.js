// require('babel-register')({
//   presets: ["@babel/preset-env", "@babel/preset-react"]
// });

const router = require('./src/Router').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
  .build('http://theyei.org')
  .save('public/sitemap.xml');