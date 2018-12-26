import React, {Component} from 'react';
import CategoryShowTile from '../components/CategoryShowTile'
import { withRouter } from "react-router-dom";

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/categories')
    .then(response => {
      if(response.ok) {
        return response;
      }else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        categories: body
      })
    })
    .catch(error => console.error('Error:', error))
  }

  handleClick(event) {
    event.preventDefault()
    debugger
    browswerHistory.push(`${event.target.text}`)
  }

  render() {
    let categories = this.state.categories.map(category => {
      return(
        <CategoryShowTile
          key={category.id}
          category={category}
          handleClick={this.handleClick}
        />
      )
    })
    return(
      <div>
        <h1>Create Category</h1>
        {categories}
      </div>
    )
  }
}

export default CategoriesContainer;
