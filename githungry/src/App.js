import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom';
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
    currentRecipe: null,
    searchedRecipes: []
  }

  componentDidMount() {
    fetch(API + "recipes")
    .then(res => res.json())
    .then(recipes => this.setState({ recipes }))
  }
  
  deleteRecipe = (recipe) => {
    fetch(API + "recipes/" + recipe.id, {
      method: "DELETE"
    })
    .then(() => {
      this.setState(prevState => ({ 
        recipes: [...prevState.recipes].filter(rec => rec.id !== recipe.id) 
      }))
  })
}

  showRecipeDetailClick = (recipe) => { this.setState({ currentRecipe: recipe })}

  // ratingClick = (rec) => {
  //   const currentRating = this.state.recipes.find(recipe => recipe.id === rec.id)
  //   console.log(currentRating.rating)
  //     fetch(API + "recipes/" + rec.id, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify ({
  //         rating: currentRating.rating + 1
  //       })
  //     })
  //     .then(res => res.json())
  //     .then(updatedRecipe => {
  //       this.setState(prevState => ({ 
  //         recipes: [...prevState.recipes.filter(recipe => recipe.id !== rec.id), updatedRecipe] 
  //       }))
  //     })
  // }

  addToBookmark = (id) => {
    if(!this.state.bookmark.find(recipeId => recipeId === id)) {
      fetch("http://localhost:3000/bookmarks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify ({
          recipe_id: id 
        })
      })
      .then(res => res.json())
      .then(bookmark => { 
        this.setState(prevState => ({
          bookmark: [...prevState.bookmark, id]
        }))
      })
    }
  }

  // getBookmarks = async () => {
  //   const res = await fetch("http://localhost:3000/bookmarks/")
  //   const data = await res.json()
  //   return data 
  // }

  // addToBookmark = (id) => {
  //   const previousState = this.state.bookmark
    
  //   if(!previousState.find(recipeId => recipeId === id)) {
  //     previousState.push(id)
  //     this.setState({
  //       bookmark: previousState
  //     })
  //   }
  // }

  // removeFromBookmark = (recipe) => {
  //   this.setState({
  //     bookmark: [...this.state.bookmark].filter(bookmarkId => bookmarkId !== id)
  //   })
  // }


  handleNewRecipe = (newRecipe) => {
    console.log(newRecipe)
    let updatedRecipeArray = this.state.recipes.concat(newRecipe)
    this.setState({
      recipes: updatedRecipeArray,
      searchedRecipes: updatedRecipeArray
    })
  }
  
  displayUserSearch = (userSearch) => {
    let updatedSearch = this.state.recipes.filter(recipe => recipe.title.includes(userSearch))
    this.setState({
      searchedRecipes: updatedSearch
    })
  }

  render(){

    // const bookmarkRecipe = this.state.bookmark.map(recipeid => this.state.recipes.find(recipe => recipe.id === recipeid))
    
    return (
      <Container>
        <div >

          <div>
            <Header />
          </div>
          <div>
            <Navbar displayUserSearch={this.displayUserSearch}/>
          </div>
          
          <div>
            <Switch >
                {/* <Route path="/login" component={ UserLogInForm } />
                <Route path="/profile" component={ UserDetailContainer }/> */}
                {/* <Route path="/filter" component={ Filter }/> */}
                <Route path="/bookmark" render={() => {
                   return <BookmarkContainer addToBookmark={ this.addToBookmark }
                                      bookmark={ this.state.bookmark }
                                      removeFromBookmark={ this.removeFromBookmark }
                                      getBookmarks = { this.getBookmarks } />}}/>
                <Route path="/login" component={ UserLogInForm } />
                <Route path="/myprofile" component={ UserDetailContainer }/>
                <Route path="/mypage" component={ BookmarkContainer }/>
                <Route path="/addrecipe" render={()=> <RecipeForm handleNewRecipe={this.handleNewRecipe}/>}/>
                <Route path="/filter" component={ Filter }/>

                <Route path="/recipes/:id" render={(props) => {
                  let id = parseInt(props.match.params.id)
                  let currentRecipe = this.state.recipes.find(recipe => recipe.id === id)
                  return <RecipeDetails recipe={ currentRecipe }
                                        ratingClick={ this.ratingClick }
                                        addToBookmark={this.addToBookmark}
                                        deleteRecipe={ this.deleteRecipe }
                                        id={id} /> 
                }} />
                
                <Route path="/recipes" render={() => {
                  return <>
                        <RecipeContainer  recipes={ this.state.recipes }
                                          showRecipeDetailClick={ this.showRecipeDetailClick }/>
                        </>                
                 }}/>
            </Switch>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;


