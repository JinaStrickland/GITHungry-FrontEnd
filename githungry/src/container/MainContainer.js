import React, { Component } from 'react'
import RecipeContainer from './RecipeContainer'
import BookmarkContainer from './BookmarkContainer'
import UserDetailContainer from './UserDetailContainer'
import Filter from '../components/Filter'


class MainContainer extends Component {

  render(){
    return (
      <div >
        <div>
          <RecipeContainer />
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