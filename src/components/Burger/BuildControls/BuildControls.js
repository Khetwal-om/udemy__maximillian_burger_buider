import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]
const buildControls = (props) => (
  <div className="BuildControls">
    <p>{props.totalPrice.toFixed(4)}</p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        label={control.label}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className="OrderButton" disabled={!props.purchasable}>
      Order
    </button>
  </div>
)

export default buildControls
