import React from 'react'
import RecipeCard from '../components/RecipeCard'


class RecipeContainer extends Component {

  render(){
    return (
      <div className="App">
        <div>
          <RecipeCard />
        </div>
      </div>
    );
  }
}

export default RecipeContainer;