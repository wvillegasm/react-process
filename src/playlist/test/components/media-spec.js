'use strict'
/* eslint-env mocha */
import React from 'react'
import Media from 'playlist/components/media'

describe('<Media /> playlist/components/media', () => {
  const props = {
    image: '',
    title: 'My Test',
    author: 'Me',
    type: 'video',
    description: 'Test desc'
  }
  
  let wrapper
  
  describe('render', () => {
    let wrapper
    
    beforeEach(() => {
      wrapper = shallow(<Media {...props} />)
    })
    
    it('should renders default media', () => {
      const media = wrapper.find('div[id="media-id"]')
      
      expect(media.length)
        .to
        .equal(1)
      
      expect(media.props())
        .to
        .deep
        .contain({
          className: 'Media'
        })
    })
    
    it('should renders media cover', () => {
      expect(wrapper.find('div[className="Media-cover"]').length)
        .to
        .equal(1)
    })
    
    it('should renders media image', () => {
      const mediaImage = wrapper.find('img')
      
      expect(mediaImage.length)
        .to
        .equal(1)
      
      expect(mediaImage.props()).to.deep.include({
        alt: 'Test desc',
        className: 'Media-image',
        height: 160,
        src: '',
        width: 260
      })
    })
    
    it('should renders media title for cover', () => {
      const mediaTitle = wrapper.find('h3[className="Media-title"]');
      
      expect(mediaTitle.length)
        .to
        .equal(1)
      
      expect(mediaTitle.text()).to.equal('My Test')
    })
  
    it('should renders media author for cover', () => {
      const mediaAuthor = wrapper.find('p[className="Media-author"]')
  
      expect(mediaAuthor.length)
        .to
        .equal(1)
      
      expect(mediaAuthor.text()).to.equal('Me')
    })
  })
})
