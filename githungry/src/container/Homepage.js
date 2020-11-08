import React, { Component } from 'react'
import UserForm from '../components/UserForm'

class Homepage extends Component {
  render(){
    return(
      <div>
        <h1>Homepage with login form</h1>
        <UserForm />
      </div>
    )
  }
}


export default Homepage