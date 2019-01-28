import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './App.css'
import TreasureHunt from "./pages/TreasureHunt"
import TicTacToe from "./pages/TicTacToe"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Team Tiger's Portfolio</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/about">
                About Me
              </NavItem>
              <NavItem eventKey={2} href="/skills">
                Skills
              </NavItem>
              <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
      <MenuItem href="/projects/tictactoe" eventKey={3.1}>Tic Tac Toe</MenuItem>
      <MenuItem href="/projects/treasurehunt" eventKey={3.2}>Treasure Hunt</MenuItem>
    </NavDropdown>
    <NavItem eventKey={4} href="/contact">
    Contact Me
    </NavItem>
            </Nav>
          </Navbar>








          <Switch>
            <Route path="/projects/tictactoe" exact component={TicTacToe}/>
            <Route path="/projects/treasurehunt" exact component={TreasureHunt}/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={AboutMe}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/skills" exact component={Skills}/>
            <Route path="/contact" exact component={Contact}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
