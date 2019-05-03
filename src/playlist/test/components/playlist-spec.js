'use strict'

import Playlist from 'playlist/components/playlist'
import React from 'react'
// import Media from 'playlist/components/media'

describe('<Playlist /> playlist/components/playlist', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Playlist />)
  })

  it('should render Playlist', () => {
    const media = wrapper.find('Media')

    expect(media.length)
      .to
      .equal(1)

    expect(media.props())
      .to
      .deep
      .include({
        image: './images/covers/html5.jpg',
        title: 'My Title',
        author: 'Me Matt',
        type: 'video',
        description: 'My Video'
      })
  })
})
