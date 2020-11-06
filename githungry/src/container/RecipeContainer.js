import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'


class RecipeContainer extends Component {

  render(){
    return (
      <div className="App">
        <div>
        { this.props.recipes.map(recipe => <RecipeCard key={ recipe.id }
                                                              recipe={ recipe } /> )}
        </div>
      </div>
    );
  }
}

export default RecipeContainer;