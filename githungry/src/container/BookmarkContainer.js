import React from 'react'
import RecipeCard from '../components/RecipeCard'

const BookmarkContainer = (props) => {

  console.log(props)
  return (

    <div>
      <h2>
        My Favorite Recipes
        { props.bookmarkRecipe.map(recipe => <RecipeCard  key={ recipe.id }
                                                          recipe={ recipe }
                                                          />)}
      </h2>
    </div>
  
)};

export default BookmarkContainer