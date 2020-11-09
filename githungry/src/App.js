import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { Container } from 'semantic-ui-react'
import UserForm from './components/UserForm'
import MainContainer from './container/MainContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import RecipeDetails from './components/RecipeDetails'


class App extends Component {

  render(){
    return (
      <Container>
      <div >
        <div>
          <Header />
        </div>
        <div>
          <Navbar />
        </div>
        
        <Switch >
          <Route exact path="/login" component={ UserForm } />
        
    
          <Route exact path="/recipes/:id" component={ RecipeDetails }/>
          <Route exact path="/recipes" component={ MainContainer }/>
       

        </Switch>
      </div>
    </Container>
    );
  }
}

export default App;
