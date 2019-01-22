<iframe src="https://player.vimeo.com/video/216433577" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

# React Router

Watch the video above to see why we are setting up our app in this way to use the React Router.

## Installing React-Router

We'll use yarn to install the react router.  Our app is a HTML based web app, so we use react-router-dom

```
$ yarn add react-router-dom
```

## React Router Setup

Here is an example of using React Router to create pages for an apartment listings site:

#### src/App.js
```Javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import ApartmentCtr from './containers/ApartmentContainer'

import Login from './pages/Login';
import Header from './components/Header'


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<div>
						<Route path="/apartments" component={ApartmentCtr} />
						<Route path="/login" component={Login} />
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
```


## Using React Router

Watch the video above to see why we are setting up our app in this way to use the React Router.

## Installing React-Router

We'll use yarn to install the react router.  Our app is a HTML based web app, so we use react-router-dom

```
$ yarn add react-router-dom
```

### Architecture we're working towards
![Recipe Architecture](https://s3.amazonaws.com/learn-site/curriculum/React/recipes-architecture.png)

### Create a Recipe store

Before this refactor, our recipes were kept as state on the App component.  Now that we're moving to have multiple pages in the app, we want to move the recipes out to a data store so any page can access them that needs to.  For now, we'll create a directory called 'store', and a module there called 'Recipes'.  This will allow us to access the list of recipes from any route that needs them

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

### Rename Recipes to RecipeIndex

Now that we have a Recipe store, and we'll soon have a Recipe detail page, its somewhat confusing to have a 'Recipes' component.  Let's rename it to 'RecipesIndex'

#### src/RecipeIndex.js (was Recipes.js)
```Javascript
import React, { Component } from 'react'

class RecipeIndex extends Component {
  render() {
    return (
      <ul>
        <li>Recipe 1</li>
        <li>Recipe 2</li>
      </ul>
    );
  }
}

export default RecipeIndex;
````

Then in App.js, we need to use the renamed component

#### src/App.js
```Javascript
import React, { Component } from 'react'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header name='Bob' />
        <RecipeIndex />
        <Footer />
      </div>
    );
  }
}

export default App;
```

### React Router

First let's set up the router in `src/App.js`.

#### src/App.js

```Javascript

import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	<div>
    		<Router>

    		</Router>
    	</div>
    )
  }
}

```

Then, in the main App component, we setup the Switch component to navigate be able to navigate to both pages:

#### src/App.js
```Javascript
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import RecipeDetail from './RecipeDetail'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Header name='Bob' />
              <Route exact path="/" component={RecipeIndex} />
              <Route path='/recipes/:id' component={RecipeDetail} />
            <div>
              <Footer />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
```

### Add Links in RecipeIndex
Link is a component provided by ReactRouter to create links between pages in our app.  Once we import it, we can use it like any other component.  We'll need to add links for each recipe in the RecipeIndex component, and then a link back to the home page from the detail pages.

#### src/RecipeIndex.js
```Javascript
import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

class RecipeIndex extends Component {
  componentWillMount(){
    this.setState({recipes: Recipes})
  }
  render() {
    let list = this.state.recipes.map(function(recipe){
      return(
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} >
            {recipe.name}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default RecipeIndex;
```



### Add a detail page

Our app has a home page, and a recipe detail page.  We create a new component to be the main component for the detail page called ```RecipeDetail```

#### src/RecipeDetail.js
```Javascript
import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    let recipe = this.state.recipes.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(recipe) {
      this.setState({recipeId: id, recipe: recipe})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.recipe.name}</h2>
      </div>
    );
  }
}

export default RecipeDetail;
```

### But wait! There's more!

Turns out we are not using our Switch component to its full potential. Along with defining what component to show for specific urls, we can specify what to show when the url requested doesn't have content.

Try requesting `localhost:3000/1`.

You find that you get a blank page and that's the case for any url that doesn't have a component specified with that route. The Switch component can be used to fix this.

First, we can create a component to show when the user has requested a bad url:


### src/Oops.js
```Javascript
import React, { Component } from 'react';

export default class Oops extends Component {
  render(){
    return (
      <h2>Oops, this is not the page you are looking for.</h2>
    )
  }
}
```

Then, we can add a Route component that calls our new component.

src/App.js
```Javascript
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import RecipeDetail from './RecipeDetail'
import Oops from './Oops'                       {/* Importing Oops component*/}
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Header name='Bob' />
            <Route exact path="/" component={RecipeIndex} />
            <Route path='/recipes/:id' component={RecipeDetail} />
            <Route component={Oops} />                      {/* A route that calls that component */}
          <div>
            <Footer />
          </div>
        </div>
      </Switch>
    );
  }
}

export default App;
```

Notice that we have not specified a path. Switch gives us the ability use the first matching path case. This includes paths that aren't specified. Hence, the last Route component will match any url we haven't specified in the previous Route components.

Now request an invalid url. Our Oops component shows up. We are now handling bad url requests!

### Review

* What does `react-router-dom` allow us to do?

* What three things did we have to import from `react-router-dom`?
