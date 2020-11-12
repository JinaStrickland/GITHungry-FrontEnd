import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class BookmarkContainer extends Component {

  state = {
    bookmarks: []
  }

  fetchBookmark = () => {
    this.props.getBookmarks().then(bookmarks => this.setState({ bookmarks }))
  }

  getBookmarks = async () => {
    const res = await fetch("http://localhost:3000/bookmarks/")
    const data = await res.json()
    console.log(data)
    await this.setState({
      bookmarks: data.bookmarks 
    }) 
  }
  
  componentDidMount() {
    this.getBookmarks()
  }


  render() {

    // this.fetchBookmark()

  return (

    <div>
      <h2>
        {/* My Favorite Recipes */}
        { this.state.bookmarks.map(bookmark => <RecipeCard  recipeId={ bookmark.recipe_id }
                                                          />)}
      </h2>
    </div>
  
)}
};

export default BookmarkContainer