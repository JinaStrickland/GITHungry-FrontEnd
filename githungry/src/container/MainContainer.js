import React, { Component } from 'react'
import RecipeContainer from './RecipeContainer'
import BookmarkContainer from './BookmarkContainer'
import UserDetailContainer from './UserDetailContainer'
import Filter from '../components/Filter'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/"

class MainContainer extends Component {

  state = {
    recipes: [],
    bookmark: []
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

  render(){
    return (
      <div >
        <Container class="main-container">
        <div>
          <RecipeContainer recipes={ this.state.recipes } />
        </div>
        <div>
          <Filter />
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