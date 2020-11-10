import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import { Container } from 'semantic-ui-react'
import UserLogInForm from './components/UserLogInForm'
import MainContainer from './container/MainContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import RecipeDetails from './components/RecipeDetails'
import RecipeForm from './components/RecipeForm'


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
          <Route exact path="/login" component={ UserLogInForm } />
          <Route exact path="/recipes/:id" component={ RecipeDetails }/>
          <Route exact path="/recipes" component={ MainContainer }/>
          <Route path="/addrecipe" exact component={ RecipeForm }/>
        </Switch>
      </div>
    </Container>
    );
  }
}

export default App;
