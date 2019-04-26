'use strict'

import { minifyHtml } from 'playlist/test/utils/util'

const playlistData = {
  image: '',
  title: 'My Test',
  author: 'Me',
  type: 'video',
  description: 'Test desc'
}

const expectedMediaCmpt = minifyHtml(`
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

export {
  expectedMediaCmpt,
  playlistData
}
