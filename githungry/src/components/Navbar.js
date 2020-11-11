import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import BookmarkContainer from '../container/BookmarkContainer';
import Homepage from '../container/Homepage';
import RecipeForm from './RecipeForm';

const Navbar = (props) => {

  return (
    <div>
      <div className="ui green menu">
        <div className="active item">
          {/* <Link to="/homepage" render={() => { return <Homepage /> }}> */}
            Home
          {/* </Link> */}
        </div>

        <div className="item">
          {/* <Link to="/myprofile" render={() => {  }}> */}
            Profile
          {/* </Link> */}
        </div>
        <div className="item">
        {/* <Link to="/mypage" render={() => { return <BookmarkContainer /> }}> */}
          Bookmarked
            {/* </Link> */}
        </div>
        <div className="item">
          <Link to="/addrecipe">
            Add Recipe
              </Link>
        </div>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <div className="ui item">
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