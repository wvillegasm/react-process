import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'playlist/components/styles/media.css'

class Media extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
  }

  imageHandleClick = (event) => {
    const { target } = event
    console.log(target)
  }

  render () {
    return (
      <div id='media-id' className='Media'>
        <div className='Media-cover'>
          <img
            alt={this.props.description}
            className='Media-image'
            height={160}
            onClick={this.imageHandleClick}
            src={this.props.image}
            width={260}
          />
          <h3 className='Media-title'>{this.props.title}</h3>
          <p className='Media-author'>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

export default Media
