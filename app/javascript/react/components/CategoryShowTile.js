import React from 'react'
import { link } from 'react-router'

const CategoryShowTile = (props) => {

  return(
    <div>
      <a href={props.category.name} onClick={props.handleClick}>{props.category.name}</a>
    </div>
  )
}

export default CategoryShowTile
