import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'
import { Container } from 'semantic-ui-react'
import UserDetailContainer from './container/UserDetailContainer';
import MainContainer from './container/MainContainer'
import Homepage from './container/Homepage'
import UserLogInForm from './components/UserLogInForm'
import RecipeDetails from './components/RecipeDetails'
import RecipeForm from './components/RecipeForm'
import Header from './components/Header'
import Navbar from './components/Navbar'


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
          {/* <Route exact path="/homepage" component={ Homepage }/> */}
          <Route exact path="/myprofile" component={ UserDetailContainer }/>
          <Route exact path="/recipes/:id" component={ RecipeDetails }/>
          <Route exact path="/recipes" component={ MainContainer }/>
          {/* <Route exact path="/addrecipe" component={ RecipeForm }/> */}
        </Switch>
      </div>
    </Container>
    );
  }
}

export default App;
