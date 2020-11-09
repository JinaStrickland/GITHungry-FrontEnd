import React from 'react'
import { Link } from 'react-router-dom'
import BookmarkContainer from '../container/BookmarkContainer'
import RecipeForm from './RecipeForm'
import Homepage from '../container/Homepage'

const Navbar = (props) => {

  return (
    <div>
      <div className="ui green menu">
        <a className="active item">
        <Link to="/homepage" render={ () => { return <Homepage/> }}>
          Home
          </Link>
        </a>
        <a className="item">
        <Link to="/myprofile" render={ () => { return <RecipeForm/> }}>
          Profile
          </Link>
        </a>
        <a className="item">
          <Link to="/userpage" render={ () => { return <BookmarkContainer/> }}>
          Bookmarked
          </Link>
        </a>
        <a className="item">
        <Link to="/addrecipe" render={ () => { return <RecipeForm/> }}>
          Add Recipe
          </Link>
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
    </div>

  )
};

export default Navbar