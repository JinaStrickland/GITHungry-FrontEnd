import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'

const foodTags = ["Soups and Stews", "Poultry", "Fish", "Healthy", "Dairy Free", "Gluten Free", "Vegan", "Vegetarian", "Egg Free", "Seafood"]


const initialValues = {
  title: "", 
  ingredients: [""], 
  instructions: [""], 
  cuisine_type: "",
  meal_type: "", 
  cooking_time: 0, 
  servings: 0, 
  tags: "", 
  image: ""
}

const onSubmit = userRecipe => {
  console.log(userRecipe)
  // e.preventDefault()
  let requestPackage = {
    headers: {'Content-Type':'application/json'},
    method: 'POST',
    body: JSON.stringify({
      title: userRecipe.title, 
      ingredients: userRecipe.ingredients,
      instructions: userRecipe.instructions,
      cuisine_type: userRecipe.cuisine_type,
      meal_type: userRecipe.meal_type,
      cooking_time: userRecipe.cooking_time,
      servings: userRecipe.servings,
      tags: userRecipe.tags,
      image: userRecipe.image
    })
  }
  fetch("http://localhost:3000/recipes", requestPackage)
  .then(rsp => rsp.json())
  .then(newRecipe => console.log(newRecipe))
}

const validate = values => {
  let errors = {}
  if(!values.title){
    errors.title = "Title is required!"
  }
  if(!values.ingredients){
    errors.ingredients = "Ingredients are required!"
  }
  if(!values.instructions){
    errors.instructions = "Instructions are required!"
  }
  if(!values.cuisine_type){
    errors.cuisine_type = "Please choose one of the following."
  }
  if(!values.meal_type){
    errors.meal_type = "Please choose one of the following."
  }
  if(!values.tags){
    errors.tags = "Please choose the following." 
  }
  if(!values.image){
    errors.image = "Please upload an image"
  }
  return errors
}

function OldRecipeForm() {

  // handleSubmit = e => {
  //   //when click submit, add the data we've put in to our database
  //   e.preventDefault()
  //   let requestPackage = {
  //     headers: {'Content-Type':'application/json'},
  //     method: 'POST',
  //     body: JSON.stringify({initialValues})
  //   }
  //   fetch("http://localhost:3000/recipes", requestPackage)
  //   .then(rsp => rsp.json())
  //   .then(newRecipe => console.log(newRecipe))
  // }

  return(
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    // handleSubmit={handleSubmit}
    validate={validate}>
        <Form className="ui form">
          <div className='form-control'>
          <label>Title: </label>
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Title..."
            />
          <ErrorMessage name="title">
            {errorMsg => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          </div>
          <br/>
          <div className='form-control'>
            <label>Ingredients: </label>
            <FieldArray name="ingredients">
              {fieldArrayProps => {
                // console.log('fieldArrayProps', fieldArrayProps)
                const {push, remove, form} = fieldArrayProps
                const {values} = form
                const {ingredients} = values
                return (
                <div>
                  {ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <Field name={`ingredients[${index}]`} />
                      {index > 0 && (
                        <button type='button' onClick={() => remove(index)}>
                          {' '}
                          x{' '}
                        </button>
                      )}
                      <button type='button' onClick={() => push('')}>
                        {' '}
                        +{' '}
                      </button>
                    </div>
                ))}
                </div>
                )
            }}
          </FieldArray>
          </div>
          <br/>
          <div className='form-control'>
          <label>Instructions: </label>
          <FieldArray name="instructions">
            {fieldArrayProps => {
              const {push, remove, form} = fieldArrayProps
              const {values} = form
              const {instructions} = values
              return(
                <div>
                  {instructions.map((instruction, index) => (
                    <div key={index}>
                      <Field name={`instructions[${index}]`}/>
                      {index > 0 && (
                        <button type='button' onClick={() => remove(index)}>
                          {' '}
                          x{' '}
                        </button>
                      )}
                      <button type='button' onClick={() => push(' ')}>
                        {' '}
                        +{' '}
                      </button>
                    </div>
                  ))}
                </div>
              )
            }}
          </FieldArray>

          </div>
          <br/>
          <div className='form-control'>
          <label>Type Of Cuisine: </label>
            <Field
              type="text"
              id="cuisine_type"
              name="cuisine_type"
              placeholder="Cuisine Type"
              />
            <ErrorMessage name="cuisine_type">
              {errorMsg => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <br/>
          <div className='form-control'>
          <label>Type of Meal: </label>
            <Field
              type="text"
              id="meal_type"
              name="meal_type"
              />
            <ErrorMessage name="meal_type">
              {errorMsg => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <br/>
          <div className='form-control'>
          <label>Total Cooking Time: </label>
            <Field
              type="number"
              id="cooking_time"
              name="cooking_time"
              />
          </div>
          <br/>
          <div className='form-control'>
          <label>Servings: </label>
            <Field
                type="number"
                id="servings"
                name="servings"
              />
          </div>
          <br/>
          <div className='form-control'>
          <label>Select Tags: </label>
            {foodTags.map(foodTag => {
            return (
            <div>
              <div> {foodTag} </div>
              <Field 
                  className="ui checkbox"
                  type="checkbox"
                  id={foodTag}
                  name={foodTag}
                /> 
            </div>
              )
            })
          }
            <ErrorMessage name="tags">
              {errorMsg => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <br/>
          <div className='form-control'>
          <label>Image URL: </label>
            <Field
                type="text"
                id="image"
                name="image"
              />
            <ErrorMessage name="image">
              {errorMsg => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <br/>
          <button>Submit</button>
        </Form>
    </Formik>
  )
}


export default OldRecipeForm