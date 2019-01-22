# Recipes Website Challenge

## Create a Recipe store

Before this refactor, our recipes were kept as state on the App component.  Now that we're moving to have multiple pages in the app, we want to move the recipes out to a data store so any page can access them that needs to.  For now, we'll create a directory called 'store', and a module there called 'Recipes'.  This will allow us to access the list of recipes from any route that needs them

<!--- Tomorrow, we're going to talk about Flux, which is a pattern to make managing data stores easier.) --->

#### src/store/Recipes.js
```Javascript
const recipes = [
  {
    id: 1,
    name: 'Mac & cheese'
  },
  {
    id: 2,
    name: 'Tofu Burger'
  }
]

export default recipes
```

## Add Routes in App.js

Create a home page and recipes index page, have App render them both

#### src/App.js
```Javascript
import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class RecipeIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  render() {
 	return (
        <div>
    		<Router>
    			<Switch>
    				// your code here
				</Switch>
    		</Router>
    	</div>
    )
  }
}

export default App;
```
## Create the Recipe Index page.

The recipe index page should receive a list of recipes from App and display each

# Stretch goals

## Add a detail page

Our app has a home page, and a recipe index page so far. But we want to create a new page called ```RecipeDetail```

RecipeDetail should receive the information for one recipe from the index page, and display it.

## Page Not Found

What if someone requests a page that doesn't exist? Create a route to handle that.
