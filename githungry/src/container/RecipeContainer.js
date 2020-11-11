import React from 'react'
import RecipeCard from '../components/RecipeCard'


const RecipeContainer = (props) => {

  return (

      // <div >
      <div style={{position: "relative", top: "20px"}}>
        <div className="ui three column grid">
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