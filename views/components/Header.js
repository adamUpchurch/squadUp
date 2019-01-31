import React, { Component } from 'react';

const navBarTextStyle = {
  color: '#413567',
  font: 'Changa'
}
const navBarStyle={
  backgroundColor: '#413567'
}

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <h1 style={this.props.style}>SquadUp.gg</h1>
      </div>
    )
  }
}

export default Header;