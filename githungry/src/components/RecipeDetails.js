import React from 'react'

const RecipeDetails = (props) => {

  let { title, cuisine_type, image, meal_type,  servings, tags, ingredients, instructions } = props.recipe 
  ingredients = JSON.parse(ingredients)
  instructions = JSON.parse(instructions)
  tags = JSON.parse(tags)

  return (

    <div className="ui link cards">
        <div className="column">

       
      <div className="card">
        <div className="image">
          <img src={ image }/>
        </div>
        <div className="content">
          <a className="header">{ title }</a>
        </div>

        //when clicked show below:
        <div className="extra">
          Rating:
          <div className="ui star rating" data-rating="4"></div>
        </div>
      </div>
      </div>
    </div>

  )
}

export default RecipeDetails;