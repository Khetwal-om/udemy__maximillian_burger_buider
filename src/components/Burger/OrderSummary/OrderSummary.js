import React from 'react'

import './OrderSummary.css'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

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
      <p>Total price: {props.totalPrice}</p>
      <Button clicked={props.purchaseContinue} btnType="Success">
        Continue
      </Button>
      <Button clicked={props.purchaseCancel} btnType="Danger">
        Cancel
      </Button>
    </Aux>
  )
}
export default orderSummary
