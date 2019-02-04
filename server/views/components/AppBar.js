import React from 'react'

const AppBar = props => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">SQUADUP.gg</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="collapsible.html">Browse</a></li>
        <li><a href='/auth/twitch'>Login</a></li>
        <li><a href='/auth/logout'>Logout</a></li>
      </ul>
    </div>
  </nav>
)

export default AppBar;