'use strict'

import React from 'react'
import Playlist from '../../../src/playlist/components/playlist'
import Media from '../../../src/playlist/components/media'
// import { minifyHtml } from '../../utils/util'

describe('<Playlist /> src/playlist/components/playlist', () => {
  it('should render Playlist', () => {
    const wrapper = enzyme.shallow(<Playlist />)
    // const result = minifyHtml(wrapper.html())

    // console.log(wrapper.instance())

    expect(wrapper.find(Media))
      .to
      .have
      .lengthOf(1)
  })
})
