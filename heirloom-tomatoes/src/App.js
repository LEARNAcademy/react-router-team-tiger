import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"; //<-- These are all components from the router that we use in render().

//Pages
//Here are our pages.  They get imported, and then
//rendered as part of the component structure of
//App's render function.
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Tomato from './pages/Tomato'

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/tomato/">Tomato</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about/" component={AboutUs} />
            <Route path="/tomato/" component={Tomato} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
