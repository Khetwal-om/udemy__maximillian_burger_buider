import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import './Layout.css'

const layout = (props) => (
  <Aux>
    <div>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </div>
  </Aux>
)
export default layout
