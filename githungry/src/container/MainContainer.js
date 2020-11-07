import React, { Component } from 'react'
import RecipeContainer from './RecipeContainer'
import BookmarkContainer from './BookmarkContainer'
import UserDetailContainer from './UserDetailContainer'
import Filter from '../components/Filter'

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
    
      </div>
    );
  }
}

export default MainContainer;