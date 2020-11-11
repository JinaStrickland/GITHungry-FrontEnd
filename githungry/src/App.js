import React, { Component } from 'react'
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';
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
    clicked: false,
    clickedRecipeId: []
  }

  // async componentDidMount() {
  //   const response = await fetch(API + "recipes")
  //   const recipes = await response.json()
  //   this.setState({ recipes })
  // }

  componentDidMount() {
    fetch(API + "recipes")
    .then(res => res.json())
    .then(recipes => this.setState({ recipes: recipes }))
  }

  showRecipeDetailClick = (id) => {
    console.log(id)
    this.setState({
      clicked: !this.state.clicked,
      clickedRecipeId: id
    })
  }


  render(){
    let id = this.state.clickedRecipeId
    const x = true 

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
                <Route exact path="/homepage" component={ Homepage }/>
                <Route exact path="/login" component={ UserLogInForm } />
                <Route exact path="/myprofile" component={ UserDetailContainer }/>
                <Route exact path="/mypage" component={ BookmarkContainer }/>
                <Route exact path="/addrecipe" component={ RecipeForm }/>
                <Route exact path="/filter" component={ Filter }/>
                <Route exact path="/recipes/:id" component={ RecipeDetails }/>
                <Route exact path="/recipes" render={ () => x ? <RecipeContainer  recipes={ this.state.recipes } showRecipeDetailClick={ this.showRecipeDetailClick } /> : null }/>
                {/* <Route exact path="/recipes" render={ () => this.state.recipes ? 
                  <RecipeContainer  recipes={ this.state.recipes }
                                    showRecipeDetailClick={ this.showRecipeDetailClick } />
                  : null
                }/> */}
                {/* <Route exact path="/recipes" render={ () => {
                  <RecipeContainer  recipes={ this.state.recipes }
                                    showRecipeDetailClick={ this.showRecipeDetailClick } />}}/> */}
              </Switch>
          </div>

          {/* <div>
            <RecipeContainer  recipes={ this.state.recipes }
                              showRecipeDetailClick={ this.showRecipeDetailClick } />
          </div> */}
        
            <div>
              { this.state.clicked ? 
                <Redirect to={`/recipes/${id}`} />
                :
                null }  
            </div>
       
        </div>
      </Container>
    );
  }
}

export default App;


