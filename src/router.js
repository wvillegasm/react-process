import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history/createBrowserHistory'

import Home from './components/Home'
import ArtistMain from './components/ArtistMain'
import ArtistCreate from './components/ArtistCreate'
import Header from './components/Header'

/* const routes = {
  path: '/',
  component: Home,
  childRoutes: [
    {
      path: '/artist/home',
      component: ArtistMain,
    },
    {
      path: '/artist/new',
      component: ArtistCreate,
    },
  ],
} */

// const history = createBrowserHistory()
const Routes = () => (
  <Router>
    <div style={{
      backgroundColor: '#f1f1f1',
    }}
    >
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/artist/home" render={props => <ArtistMain {...props} />} />
      <Route path="/artist/new" render={props => <ArtistCreate {...props} />} />

    </div>
  </Router>
)

export default Routes
