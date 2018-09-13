import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/media.scss'

class Media extends Component {
  state = {
    author: '',
  }

  handleMediaClick = (event) => {
    console.log(event.target)
    this.setState({
      author: 'A new Author - Exposed',
    })
  }

  handleMediaKeyUp = (event) => {
    console.log(event.target)
  }

  render() {
    const { title, image } = this.props
    const { author } = this.state
    return (
      <div
        className="Media"
        onClick={this.handleMediaClick}
        onKeyUp={this.handleMediaKeyUp}
        role="button"
        tabIndex="0"
      >
        <div className="Media-cover">
          <img
            className="Media-image"
            src={image}
            alt="images"
          />
          <h3
            className="Media-title"
          >
            {title}
          </h3>
          <p
            className="Media-author"
          >
            {author}
          </p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  title: PropTypes.string.isRequired,
  // author: PropTypes.string,
  image: PropTypes.string,
}

Media.defaultProps = {
  // author: 'Author',
  image: '',
}

export default Media
