import React from 'react'; 
import FilterLink from './FilterLink'

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Already Read</FilterLink>
    {' '}
    <FilterLink>Still Reading</FilterLink>
  </div>
  )

export default Footer; 
