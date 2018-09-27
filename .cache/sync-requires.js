// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mac/projects/vladislavnabatov.com/src/pages/index.js"))
}

