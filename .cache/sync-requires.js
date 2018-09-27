// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/src/pages/index.js"))
}

