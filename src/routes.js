const routes = require('next-routes');

// Setup router.
module.exports = routes()
  .add('index', '/')
  .add('single', '/blog/:slug')
  .add('posts');
