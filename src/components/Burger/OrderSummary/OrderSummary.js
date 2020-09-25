import React from 'react'

import './OrderSummary.css'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        {' '}
        <span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{' '}
        {props.ingredients[igkey]}
      </li>
    )
  })
  return (
    <Aux>
      <h3>Your order </h3>
      <p>Delicious :) ...</p>
      <ul>{ingredientSummary}</ul>
      <p>continue</p>
    </Aux>
  )
}
export default orderSummary
