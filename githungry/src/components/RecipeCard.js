import React from 'react'
import { Card } from 'semantic-ui-react'

const RecipeCard = (props) => {

    let { id, title, image } = props.recipe 
  
    return (

      <div className="ui fluid cards" id="cards">
        <div className="card" onClick={ () => props.showRecipeDetailClick(id) }>
          <div className="image">
            <img src={ image }/>
          </div>
          <div className="content">
            <div className="header"> 
              { title } 
            </div>
          </div>
        </div>
      </div>

    )
}

export default RecipeCard;