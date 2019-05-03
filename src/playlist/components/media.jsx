import 'video/playlist/components/styles/media.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Media extends Component {
  static propTypes = {
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
  }

  state = {
    targetEvent: null
  }

  imageHandleClick (event) {
    const { target } = event

    this.setState({ targetEvent: target.value })
  }

  render () {
    const { author, description, image, title, type } = this.props

    return (
      <div
        id="media-id"
        className="Media"
      >
        <div
          className="Media-cover"
          onClick={event => this.imageHandleClick(event)}
        >
          <img
            alt={description}
            className="Media-image"
            height={160}
            src={image}
            width={260}
          />
          <h3 className="Media-title">{title}-{type}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

export default Media
