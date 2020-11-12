import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css'
import { Container } from 'semantic-ui-react'
import UserDetailContainer from './container/UserDetailContainer';
import BookmarkContainer from './container/BookmarkContainer'
import RecipeContainer from './container/RecipeContainer'
import Homepage from './container/Homepage'
import RecipeDetails from './components/RecipeDetails'
import UserLogInForm from './components/UserLogInForm'
import RecipeForm from './components/RecipeForm'
import Filter from './components/Filter'
import Header from './components/Header'
import Navbar from './components/Navbar'


const API = "http://localhost:3000/"

class App extends Component {

  state = {
    recipes: [],
    bookmark: [],
    currentRecipe: null
  }

  async componentDidMount() {
    const response = await fetch(API + "recipes")
    const recipes = await response.json()
    this.setState({ recipes })
  }

  showRecipeDetailClick = (id) => { this.setState({ currentRecipe: id })}

  ratingClick = (id) => {
    // let currentRating = this.state.recipes.find(recipe => recipe.id === id)
  
    //   fetch("http://localhost:3000/recipes/" + id, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify ({
    //       rating: ++currentRating 
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(updatedRecipe => {
    //     this.setState({ 
    //       recipes: [...this.state.recipes.filter(recipe => recipe.id !== id), updatedRecipe] 
    //     })
    //   })
  }

  addToBookmark = (id) => {
    console.log(this.state.bookmark)
    console.log(id)

    if(!this.state.bookmark.find(recipeId => recipeId === id)) {
      this.setState({
        bookmark: [...this.state.bookmark, id]
      })
    }
  }

  removeFromBookmark = (id) => {
    this.setState({
      bookmark: [...this.state.bookmark].filter(bookmarkId => bookmarkId !== id)
    })
  }

  render(){

    let bookmarkRecipe = this.state.bookmark.map(recipeid => this.state.recipes.find(recipe => recipe.id === recipeid))
    

    return (
      <Container>
        <div >

          <div>
            <Header />
          </div>
          <div>
            <Navbar />
          </div>
          
          <div>
            <Switch >
                <Route path="/login" component={ UserLogInForm } />
                <Route path="/profile" component={ UserDetailContainer }/>
                <Route path="/bookmark" render={(props) => {
                   <BookmarkContainer addToBookmark={ this.addToBookmark }
                                      bookmarkRecipe={ bookmarkRecipe }
                                      removeFromBookmark={ this.removeFromBookmark } />}}/>
                <Route path="/addrecipe" component={ RecipeForm }/>
                <Route path="/filter" component={ Filter }/>
                <Route path="/recipes/:id" render={(props) => {
                  let id = parseInt(props.match.params.id)
                  let currentRecipe = this.state.recipes.find(recipe => recipe.id === id)
                  return <RecipeDetails recipe={ currentRecipe }
                                        ratingClick={ this.ratingClick }
                                        addToBookmark={this.addToBookmark} /> 
                }} />
                
                <Route path="/recipes" render={() => {
                  return <>
                        <RecipeContainer  recipes={ this.state.recipes }
                                          showRecipeDetailClick={ this.showRecipeDetailClick }/>
                        </>                
                 }}/>
            </Switch>
          </div>

          {/* <div>
            <RecipeContainer  recipes={ this.state.recipes }
                              showRecipeDetailClick={ this.showRecipeDetailClick } />
          </div> */}
        
        </div>
      </Container>
    );
  }
}

export default App;


