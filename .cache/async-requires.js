// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/mac/projects/vladislavnabatov.com/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/mac/projects/vladislavnabatov.com/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/mac/projects/vladislavnabatov.com/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/mac/projects/vladislavnabatov.com/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/mac/projects/vladislavnabatov.com/.cache/data.json")

