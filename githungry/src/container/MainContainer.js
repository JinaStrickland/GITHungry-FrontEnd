import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import RecipeContainer from './RecipeContainer'
import BookmarkContainer from './BookmarkContainer'
import UserDetailContainer from './UserDetailContainer'
import Filter from '../components/Filter'
import RecipeDetails from '../components/RecipeDetails'

const API = "http://localhost:3000/"

class MainContainer extends Component {

  state = {
    recipes: [],
    bookmark: [],
    clicked: false,
    clickedRecipeId: []
  }

  componentDidMount() {
    fetch(API + "recipes")
    .then(res => res.json())
    .then(recipes => {
      this.setState({
      recipes: recipes 
    })}
    )
  }

  showRecipeDetailClick = (id) => {
    console.log("clicked");
    console.log(id);
    this.setState({
      clicked: !this.state.clicked,
      clickedRecipeId: id
    })
  }

  render(){

    let id = this.state.clickedRecipeId

    return (
      <div >
        <Container className="main-container">
        <div>
          <RecipeContainer  recipes={ this.state.recipes }
                            showRecipeDetailClick={ this.showRecipeDetailClick } />
        </div>
        <div>
          <Filter />
        </div>
          <div>
            { this.state.clicked ? 
              <Redirect to={`/recipes/${id}`} />
              :
              null }
          </div>
        <div>
          <BookmarkContainer />
        </div>
        <div>
          <UserDetailContainer />
        </div>
      </Container>
      </div>
    );
  }
}

export default MainContainer;