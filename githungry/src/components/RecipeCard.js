import React from 'react'
import { Card } from 'semantic-ui-react'

const RecipeCard = (props) => {

  let { title, cuisine_type, image, meal_type,  servings, tags, ingredients, instructions } = props.recipe 
  ingredients = JSON.parse(ingredients)
  instructions = JSON.parse(instructions)
  tags = JSON.parse(tags)

  return (
    <div className="ui fluid cards">
      <div className="card">
        <div className="image">
          <img src={ image }/>
        </div>
        <div className="content">
          <a className="header">{ title }</a>
        </div>
      </div>
    </div>

  )
}

export default RecipeCard;