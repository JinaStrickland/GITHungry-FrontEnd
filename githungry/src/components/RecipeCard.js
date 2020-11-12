import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {

  // state = {
  //   recipe: {}
  // }

  // getRecipe = async () => {
  //   const res = await fetch("http://localhost:3000/recipes/" + this.props.recipeId)
  //   const data = await res.json()
  //   console.log(data)
  //   await this.setState({
  //     recipe: data.bookmarks 
  //   }) 
  // }

  // componentDidMount() {
  //   this.getRecipe()
  // }

  let { id, title, image } = props.recipe

  return (

      <div>

          <Link to={`/recipes/${id}`} >
            <div className="ui fluid cards" id="cards" style={{position: "relative", top: "30px"}} >
              <div className="card" onClick={ () => props.showRecipeDetailClick(id) } 
                    style={{height: "600px", width: "400px"}}>
                  <div className="image" >
                    <img src={ image } style={{height: "500px", width: "400px"}}/>
                  </div>
                  <div className="content">
                    <div className="header"> 
                      { title } 
                    </div>
                  </div>
              </div>
            </div> 
          </Link>
      
      
      </div>
    )

}

export default RecipeCard;