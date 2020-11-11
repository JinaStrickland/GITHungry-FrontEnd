import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {

    let { id, title, image } = props.recipe 
  
    return (
      <div>

          <Link to={`/recipes/${id}`} >
            <div className="ui fluid cards" id="cards" >
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