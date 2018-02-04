import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/artist/home">Artists</Link>
    </li>
    <li>
      <Link to="/artist/new">New Artist</Link>
    </li>
  </ul>
)

export default Header
