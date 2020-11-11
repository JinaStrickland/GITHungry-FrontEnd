import React from 'react'

const RecipeCard = (props) => {

    let { id, title, image } = props.recipe 
  
    return (
      <div>

      { props.recipe ? <div className="ui fluid cards" id="cards">
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
      </div> : null }
      
      </div>
    )
}

export default RecipeCard;