import Playlist from 'playlist/components/playlist'

import React from 'react'
import { render } from 'react-dom'
// import data from './api.json'

// import './main.scss'

require.context('./images/', true, /\.(jpe?g|png|gif|svg)$/i)

render(
  <Playlist />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
