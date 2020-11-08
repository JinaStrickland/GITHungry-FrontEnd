import React, { Component } from 'react'
import './App.css'
import Homepage from './container/Homepage'
import MainContainer from './container/MainContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react'


class App extends Component {

  render(){
    return (
      <Container>
      <div >
        <div>
          <Homepage />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <MainContainer />
        </div>
      </div>
    </Container>
    );
  }
}

export default App;
