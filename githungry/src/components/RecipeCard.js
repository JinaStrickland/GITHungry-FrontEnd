import React from 'react'

const RecipeCard = (props) => {
  let { title, cuisine_type, image, meal_type,  servings, tags, ingredients, instructions } = props.recipe 
  ingredients = JSON.parse(ingredients)
  instructions = JSON.parse(instructions)
  tags = JSON.parse(tags)

  return (
    <div>
      <div>
        <h2>
          { title }
        </h2>
        <h5>
          { cuisine_type }
        
       
          <ul> Tags:
          { tags.map(tags => 
            <li>
              {tags}
            </li>
            )}
          </ul>
          <ul>
          { ingredients.map(ingredient => 
            <li>
              {ingredient}
            </li>
            )}
          </ul>
        </h5>
      </div>
    </div>
  )
}

export default RecipeCard
