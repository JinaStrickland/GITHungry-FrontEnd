import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'


class RecipeContainer extends Component {

  render(){
    return (
      <div >
        <div>
        <div class="ui four column grid">
          { this.props.recipes.map(recipe => 
          <div class="column">
              <div className="ui fluid cards">
            <RecipeCard key={ recipe.id } recipe={ recipe } /> 
              </div>
          </div>)}
        </div>
      </div>
    </div>
    );
  }
}

export default RecipeContainer;