import React, { Component } from 'react'
import { BrowserRouter as Router,
  Route,
  Link }
  from "react-router-dom"

import Homepage from "./pages/Homepage"
import Recipes from "./pages/Recipes"
import NavigationBar from "./Navigationbar"



class App extends Component {
  render() {
    return (
      <div>
        < NavigationBar/>
      </div>
    )
  }
}


export default App
