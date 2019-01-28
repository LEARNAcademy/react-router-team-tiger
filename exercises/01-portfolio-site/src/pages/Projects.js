import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
  } from 'react-router-dom'

import ProjectItem from "./ProjectItem.js"

class Projects extends Component {
  render() {
    return (
      <div>
      <Link to="projects/tictactoe">Tic Tac Toe</Link><br></br>
      <Link to="projects/treasurehunt">Treasure Hunt</Link>
      </div>
    )
  }
}

export default Projects
