import React, { Component } from 'react'

import Media from 'video/playlist/components/media'
// import cover from 'images/saul.jpg'

class Playlist extends Component {
  render () {
    return (
      <Media
        author="Me Matt"
        image="/images/covers/felices.jpg"
        title="My Title"
        type="video"
        description="My Video"
      />
    )
  }
}

export default Playlist
