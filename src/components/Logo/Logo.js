import React from 'react'
import './Logo.css'

import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="" />
  </div>
)
export default logo
