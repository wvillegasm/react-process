import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ArtistLink = ({ match }) => (
  <ul>
    <li>
      <Link to={`${match.url}/react`}>React</Link>
    </li>
    <li>
      <Link to={`${match.url}/redux`}>Redux</Link>
    </li>
    <li>
      <Link to={`${match.url}/react-router`}>React Router</Link>
    </li>
  </ul>
)

ArtistLink.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
}

const Category = ({ match }) => (
  <div>
    <h2>Category</h2>
    <p>{match.params.categoryId}</p>
  </div>
)

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string,
    }),
  }).isRequired,
}

const ArtistMain = ({ match }) => (
  <div>
    Artist Main page

    <ArtistLink match={match} />

    <Route exact path={`${match.url}/:categoryId`} component={Category} />

  </div>
)

ArtistMain.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
}

export default ArtistMain
