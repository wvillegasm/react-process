import React from 'react'
import { render } from 'react-dom'
import Playlist from './playlist/components/playlist'
// import data from './api.json'

import './main.scss'

render(
  <Playlist />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
