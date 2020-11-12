import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class RecipeForm extends React.Component {
  state = {
    title: "", 
    ingredients: "", 
    instructions: "", 
    cuisine_type: "American",
    meal_type: "Appetizer", 
    cooking_time: 0, 
    servings: 0, 
    tags: "", 
    image: ""
  }

  handleChange = (event) =>{
    // console.log(event.target.name)
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    //when click submit, add the data we've put in to our database
    event.preventDefault()
    let requestPackage = {
      headers: {'Content-Type':'application/json'},
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title, 
        ingredients: this.state.ingredients,
        instructions: this.state.instructions, 
        cuisine_type: this.state.cuisine_type,
        meal_type: this.state.meal_type,
        cooking_time: this.state.cooking_time,
        servings: this.state.servings,
        tags: this.state.tags,
        image: this.state.image
      })
    }
    fetch("http://localhost:3000/recipes", requestPackage)
    .then(rsp => rsp.json())
    .then(newRecipe => this.props.handleNewRecipe(newRecipe))
  }

  render () {
    return(
      <Form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <Form.Input
          type="text" 
          value={this.state.title} 
          name="title" 
          placeholder="Title..." 
          onChange={this.handleChange}
          />
        <br />
        <br />
        <label>Ingredients: </label>
        <Form.Input
          type="textbox" 
          value={this.state.ingredients} 
          name="ingredients" 
          placeholder="Ingredients" 
          onChange={this.handleChange}
          />
        <br /> 
        <br />
        <label>Instructions: </label>
        <Form.Input
          type="textbox" 
          value={this.state.instructions} 
          name="instructions" 
          placeholder="Instructions..." 
          onChange={this.handleChange}
          />
        <br /> 
        <br />
        <label>Type of Cuisine</label>
                <select 
                    value={this.state.cuisine_type}
                    onChange={this.handleChange}
                    name="cuisine_type"
                >
                    <option value="American">American</option>
                    <option value="Asian">Asian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Italian">Italian</option>
                    <option value="Soul">Soul</option>
                    <option value="Creole">Creole/Cajun</option>
                    <option value="French">French</option>
                    <option value="Greek">Greek</option>
                    <option value="Carribean">Carribean</option>
                    <option value="Arabic">Arabic</option>
                </select>
        <br /> 
        <label>Type of Meal:</label>
                <select 
                    value={this.state.meal_type}
                    onChange={this.handleChange}
                    name="meal_type"
                >
                    <option value="Appetizer">Appetizer</option>
                    <option value="Sides">Sides</option>
                    <option value="Main Dish">Main Dish</option>
                    <option value="Dessert">Dessert</option>
                </select>
        <br /> 
        <label>Total Cooking Time: </label>
        <Form.Input
          type="number" 
          value={this.state.cooking_time} 
          name="cooking_time" 
          onChange={this.handleChange}
          />
        <br /> 
        <label>Servings: </label>
        <Form.Input
          type="number" 
          value={this.state.servings} 
          name="servings" 
          onChange={this.handleChange}
          />
        <br /> 
        <label>Tags: </label> 
        <Form.Input
          type="text" 
          value={this.state.tags} 
          name="tags" 
          placeholder="Healthy, Dairy Free, Vegan, etc..." 
          onChange={this.handleChange}
          />
        <br /> 
        <label>Image: </label>
        <Form.Input
          type="text" 
          value={this.state.image} 
          name="image" 
          placeholder="Image URL..." 
          onChange={this.handleChange}
          />
        <br /> 
        <Link to="/recipes">
        <Form.Button>Submit</Form.Button>
        </Link>
      </Form>
    )
  }
}

export default RecipeForm