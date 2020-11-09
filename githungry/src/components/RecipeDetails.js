import React, { Component } from 'react'

class RecipeDetails extends Component {

  state = {
    recipe: {}
  }

  // let { title, cuisine_type, image, meal_type,  servings, tags, ingredients, instructions } = props.recipe 
  // ingredients = JSON.parse(ingredients)
  // instructions = JSON.parse(instructions)
  // tags = JSON.parse(tags)
  componentDidMount() {
    let id = this.props.match.params.id 

  }

  render() {


  return (
    <div>

       <h1> details page </h1>
      
       {/* use path to get id  */}
    {/* // <div className="ui link cards">
    //     <div className="column"> */}
      {/* <div className="card">
        <div className="image">
          <img src={ image }/>
        </div>
        <div className="content">
          <a className="header">{ title }</a>
        </div>
        <div className="extra">
          Rating:
          <div className="ui star rating" data-rating="4"></div>
        </div>
      </div> */}
      
      {/* </div> */}
    </div>

  )
    }
}

export default RecipeDetails;