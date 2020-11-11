import React from 'react'
import { Link } from 'react-router-dom'
import BookmarkContainer from '../container/BookmarkContainer';
import Homepage from '../container/Homepage';
import RecipeForm from './RecipeForm';

const Navbar = (props) => {

  return (
    <div>
      <div class="ui green menu">
        <div class="active item">
          {/* <Link to="/homepage" render={() => { return <Homepage /> }}> */}
            Home
          {/* </Link> */}
        </div>

        <div class="item">
          {/* <Link to="/myprofile" render={() => {  }}> */}
            Profile
          {/* </Link> */}
        </div>
        <div class="item">
        {/* <Link to="/mypage" render={() => { return <BookmarkContainer /> }}> */}
          Bookmarked
            {/* </Link> */}
        </div>
        <div class="item">
        <Link to="/addrecipe" render={() => { return <RecipeForm /> }}>
          Add Recipe
            </Link>
        </div>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i class="search link icon"></i>
            </div>
          </div>
          <div class="ui item">
          {/* <Link to="/" render={() => { }}> */}
            Logout
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>

  )
};

export default Navbar