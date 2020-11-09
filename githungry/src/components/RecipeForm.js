import React from 'react'
import { useFormik } from 'formik'

const foodTags = ["Soups and Stews", "Poultry", "Fish", "Healthy", "Dairy Free", "Gluten Free", "Vegan", "Vegetarian", "Egg Free", "Seafood"]

const initialValues = {
  title: "", 
  ingredients: [], 
  instructions: [], 
  cuisine_type: "",
  meal_type: "", 
  cooking_time: 0, 
  servings: 0, 
  tags: [], 
  image: ""
}

const onSubmit = values => {
  console.log("Form values", values)
}

const validate = values => {

}

function RecipeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  return(
    <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-control'>
          <label>Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title..."
          {... formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title ? (
          <div className='error'>{formik.errors.title}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Ingredients: </label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            placeholder="Ingredients..."
            {... formik.getFieldProps('ingredients')}
          />
          {formik.touched.ingredients && formik.errors.ingredients ? (
          <div className='error'>{formik.errors.ingredients}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Instructions: </label>
          <input
            type="text"
            id="instructions"
            name="instructions"
            placeholder="Instructions..."
            {... formik.getFieldProps('instructions')}
          />
          {formik.touched.instructions && formik.errors.instructions ? (
          <div className='error'>{formik.errors.instructions}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Type Of Cuisine: </label>
          <input
            type="text"
            id="cuisine_type"
            name="cuisine_type"
            placeholder="Cuisine Type"
            {... formik.getFieldProps('cuisine_type')}
          />
          {formik.touched.cuisine_type && formik.errors.cuisine_type ? (
          <div className='error'>{formik.errors.cuisine_type}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Type of Meal: </label>
          <input
            type="text"
            id="meal_type"
            name="meal_type"
            {... formik.getFieldProps('meal_type')}
          />
          {formik.touched.meal_type && formik.errors.meal_type ? (
          <div className='error'>{formik.errors.meal_type}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Total Cooking Time: </label>
          <input
            type="number"
            id="cooking_time"
            name="cooking_time"
            {... formik.getFieldProps('cooking_time')}
          />
          {formik.touched.cooking_time && formik.errors.cooking_time ? (
          <div className='error'>{formik.errors.cooking_time}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Servings: </label>
          <input
            type="number"
            id="servings"
            name="servings"
            placeholder="Ingredients"
            {... formik.getFieldProps('servings')}
          />
          {formik.touched.servings && formik.errors.servings ? (
          <div className='error'>{formik.errors.servings}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Select Tags: </label>
          <input
            type="checkbox"
            id="tags"
            name="tags"
            placeholder="Ingredients"
            {... formik.getFieldProps('tags')}
          />
          {formik.touched.tags && formik.errors.tags ? (
          <div className='error'>{formik.errors.tags}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Image URL: </label>
          <input
            type="numtextber"
            id="image"
            name="image"
            placeholder="Ingredients"
            {... formik.getFieldProps('image')}
          />
          {formik.touched.image && formik.errors.image ? (
          <div className='error'>{formik.errors.image}</div>)
           : null}
          </div>
          <br/>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default RecipeForm