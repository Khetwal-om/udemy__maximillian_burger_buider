import React from 'react'
import Aux from '../../hoc/Aux'

import './Layout.css'

const layout = (props) => (
  <Aux>
    <div>
      Toolbar,sidedrawer,backgrop
      <main className="Content">{props.children}</main>
    </div>
  </Aux>
)
export default layout
