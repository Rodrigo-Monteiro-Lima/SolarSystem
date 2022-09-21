import React, { Component } from 'react';
import logo from '../images/logo-sistema-solar.png';

class Header extends Component {
  render() {
    return (
      <header>
        {/* <h1>Sistema Solar</h1> */}
        <img src={ logo } alt="Sistema Solar logo" />
      </header>
    );
  }
}

export default Header;
