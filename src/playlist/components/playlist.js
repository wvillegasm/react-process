import React, { Component } from 'react'
import Media from './media.jsx'
// import cover from '../../images/covers/saul.jpeg'

class Playlist extends Component {
  render () {
    return (
      <Media
        image=''
        title='My Title'
        author='Me Matt'
        type='video'
        description='My Video'
      />
    )
  }
}

export default Playlist
