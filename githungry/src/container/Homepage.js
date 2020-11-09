import React, { Component } from 'react'
import UserForm from '../components/UserForm'
import RecipeForm from '../components/RecipeForm'

class Homepage extends Component {
  render(){
    return(
      <div>
        <h1>Homepage with login form</h1>
        <RecipeForm />
      </div>
    )
  }
}


export default Homepage