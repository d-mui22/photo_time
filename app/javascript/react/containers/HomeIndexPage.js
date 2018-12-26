import React, {Component} from 'react';
import CategoriesContainer from './CategoriesContainer'

class HomeIndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Welcome to Index Page</h1>
        <CategoriesContainer/>
      </div>
    )
  }
}

export default HomeIndexPage;
