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

  // componentDidMount() {
  //   fetch(API + "recipes")
  //   .then(res => res.json())
  //   .then(recipes => this.setState({ recipes: recipes }))
  // }

  showRecipeDetailClick = (id) => { this.setState({ currentRecipe: id })}

  render(){

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
                <Route path="/myprofile" component={ UserDetailContainer }/>
                <Route path="/mypage" component={ BookmarkContainer }/>
                <Route path="/addrecipe" component={ RecipeForm }/>
                <Route path="/filter" component={ Filter }/>

                <Route path="/recipes/:id" render={(props) => {
                  let id = parseInt(props.match.params.id)
                  let currentRecipe = this.state.recipes.find(recipe => recipe.id === id)
                  return <RecipeDetails recipe={ currentRecipe }/> 
                }} />
                
                {/* <Route exact path="/recipes" render={ () => x ? <RecipeContainer  recipes={ this.state.recipes } showRecipeDetailClick={ this.showRecipeDetailClick } /> : null }/> */}
              
                <Route path="/recipes" render={() => {
                  return <>
                        <RecipeContainer  recipes={ this.state.recipes }
                                          showRecipeDetailClick={ this.showRecipeDetailClick } />
                        </>                
                 }}/>

                <Route exact path="/" component={ Homepage }/>
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


