import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class RecipeDetails extends Component {

  // state = {
  //   recipe: []
  // }

  // componentDidMount() {
  //   let id = this.props.recipe.id 
  //   fetch("http://localhost:3000/recipes/" + id)
  //   .then(res => res.json())
  //   .then(recipe => this.setState({ recipe }))
  // }

  // ratingClick = () => {
  //   let id = this.state.recipe.id
  //   let rating = this.state.recipe.rating 
  // // console.log(this.state.recipe)

  //   fetch("http://localhost:3000/recipes/" + id, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify ({
  //       rating: ++rating 
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(updatedRecipe => {
  //     this.setState({ updatedRecipe })})
  // }

  render() {
    let { title, cuisine_type, image, meal_type, cooking_time, servings, tags, ingredients, instructions, sourceURL, rating, id } = this.props.recipe 
    let ingre = `${ingredients}`
    let ingredientsArray = ingre.split("*")
    let instr = `${instructions}`
    let instructionsArray = instr.split("*")
    let foodTags = `${tags}`
    let tagsArray = foodTags.split("*")
    let url = sourceURL.split("//")[1]

    return (
      
      <div id="detail-card">
        <div className="ui centered" >
          <div className="content">
            <h1 className="header">{ title }</h1>
          </div>
          <div className="image" id="detail-image">
            <img src={ image } alt=""/>
          </div>

          <div>
              <div className="ui teal button" tabindex="0" onClick={ () => this.props.addToBookmark(id) }>
                <i className="heart icon"></i> Add to Bookmark
              </div>
              <div className="ui red button" onClick={ () => this.props.ratingClick(id) }>
                <i className="star icon"></i> {`Rating:  ${rating}`} 
              </div>
          </div>
         
          <br />
          <div className="content">
            <div className="extra">
              <h3>
                Cooking Time:  { cooking_time } minutes
              <br />
                Servings:  { servings } 
              <br />
                Cuisine Type:  { cuisine_type }
              <br />
                Meal Type:  { meal_type }
              <br />
              <br />
                Tags:  { tagsArray.map(tag => <li> {tag} </li>) }
              <br />
                Ingredients:  { ingredientsArray.map(ingredient => <li> {ingredient} </li>) }
              <br />
                Instructions:  { instructionsArray.map(instruction => <li> {instruction} </li>) }
              </h3>
              <h5>
                Source: <Link to={`${url}`}> { url } </Link>
              </h5>
              <br/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RecipeDetails;