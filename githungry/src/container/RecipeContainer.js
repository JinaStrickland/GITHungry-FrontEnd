import React from 'react'
import RecipeCard from '../components/RecipeCard'


const RecipeContainer = (props) => {

  return (

      <div>
        <div className="ui four column grid">
          { props.recipes.map(recipe => 
            <div className="column">
                <div className="ui fluid cards">
                  <RecipeCard key={ recipe.id } 
                              recipe={ recipe }
                              showRecipeDetailClick={ props.showRecipeDetailClick } /> 
                </div>
            </div>
          )}
        </div>
    </div>

    );
}

export default RecipeContainer;