import React, { Component } from 'react'
import Media from 'playlist/components/media'
// import cover from '../../images/covers/saul.jpeg'

class Playlist extends Component {
  render () {
    return (
      <Media
        image='./images/covers/html5.jpg'
        title='My Title'
        author='Me Matt'
        type='video'
        description='My Video'
      />
    )
  }
}

export default Playlist
