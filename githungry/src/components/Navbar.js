import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import BookmarkContainer from '../container/BookmarkContainer';
import Homepage from '../container/Homepage';
import RecipeForm from './RecipeForm';

const Navbar = (props) => {

  return (
    <div style={{position: "relative", width: "1160px"}}>
      <div className="ui grey inverted huge menu">
        <div className="active item">
          <NavLink to="/recipes" >
            Home
          </NavLink>
        </div>

        {/* <div className="item">
          <NavLink to="/profile">
            Profile
          </NavLink>
        </div> */}
        <div className="item">
        <NavLink to="/bookmark" >
          Bookmark
            </NavLink>
        </div>
        <div className="item">
          <NavLink to="/addrecipe">
            Add Recipe
              </NavLink>
        </div>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <div className="ui item">
          {/* <NavLink to="/" }
            Logout
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </div>

  )
};

export default Navbar