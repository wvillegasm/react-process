'use strict'

import { minify } from 'html-minifier'

const opts = {
  collapseWhitespace: true,
  conservativeCollapse: false,
  sortAttributes: true
}

const minifyHtml = (html) => minify(html, opts)
const formattedHtml = html => minify(html, Object.assign(opts, {
  collapseWhitespace: false,
  collapseBooleanAttributes: false
}))

export {
  minifyHtml,
  formattedHtml
}
