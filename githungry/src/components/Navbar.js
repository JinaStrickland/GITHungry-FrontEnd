import React from 'react'

const Navbar = (props) => {

  return (
    <div>
      <div class="ui green menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          Profile
        </a>
        <a class="item">
          Bookmarked
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
    </div>

  )
};

export default Navbar