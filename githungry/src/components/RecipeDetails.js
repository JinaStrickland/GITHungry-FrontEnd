import React, { Component } from 'react'


class RecipeDetails extends Component {

  state = {
    recipe: []
  }

  async componentDidMount() {
    let id = parseInt(this.props.match.params.id) 
      const response = await fetch("http://localhost:3000/recipes/" + id)
      const recipe = await response.json()
      this.setState({ recipe })
  }

  render() {
    let { title, cuisine_type, image, meal_type, cooking_time, servings, tags, ingredients, instructions, sourceURL } = this.state.recipe 
    let ingre = `${ingredients}`
    let ingredientsArray = ingre.split("*")
    let instr = `${instructions}`
    let instructionsArray = instr.split("*")
    let foodTags = `${tags}`
    let tagsArray = foodTags.split("*")

    return (

      <div id="detail-card">
        <div className="ui centered" >
          <div className="content">
            <h1 className="header">{ title }</h1>
          </div>
          <div className="image" id="detail-image">
            <img src={ image } alt=""/>
          </div>

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
              <br />
                Source:  { sourceURL }
              <br />
              </h3>
            </div>
          </div>

            {/* <div className="ui star rating" data-rating="4">
              Rating: 
            </div> */}
            
        </div>
      </div>

    )
  }
}

export default RecipeDetails;