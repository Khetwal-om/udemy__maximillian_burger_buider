import React from 'react'
import Aux from '../../hoc/Aux'
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import './Layout.css'

const layout = (props) => (
  <Aux>
    <div>
      <Toolbar />
      <SideDrawer />
      <main className="Content">{props.children}</main>
    </div>
  </Aux>
)
export default layout
