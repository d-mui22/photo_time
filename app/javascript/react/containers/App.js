import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route, IndexRoute, Router} from 'react-router'
import HomeIndexPage from './HomeIndexPage'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={HomeIndexPage}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
