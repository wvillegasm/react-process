'use strict'
/* eslint-env mocha */
import React from 'react'
import { minifyHtml } from '../../utils/util'
import Media from '../../../src/playlist/components/media'

describe('<Media /> src/playlist/components/media', () => {
  it('Should render without crashing', () => {
    const playlistData = {
      image: '',
      title: 'My Test',
      author: 'Me',
      type: 'Video',
      description: 'Test desc'
    }
    const expected = minifyHtml(`
        <div class="Media">
          <div class="Media-cover">
            <img width="260" height="160" class="Media-image" src="" alt="${playlistData.description}">
            <h3 class="Media-title">
              ${playlistData.title}
            </h3>
            <p class="Media-author">${playlistData.author}</p>
          </div>
         </div>
        `)

    const mediaCmpt = enzyme.shallow(<Media {...playlistData} />)
    const result = minifyHtml(mediaCmpt.html())

    expect(result)
      .to
      .have
      .string(expected)

    expect(mediaCmpt.instance().props)
      .to
      .deep
      .equal(playlistData)
  })
})
