'use strict'

import { minify } from 'html-minifier'

const opts = {
  collapseWhitespace: true,
  conservativeCollapse: false,
  sortAttributes: true
}

const minifyHtml = (html) => minify(html, opts)

export {
  minifyHtml
}
