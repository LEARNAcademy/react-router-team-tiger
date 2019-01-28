import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
          <p>Please return to <Link to="/">Home</Link></p>
      </div>
    )
  }
}

export default PageNotFound
