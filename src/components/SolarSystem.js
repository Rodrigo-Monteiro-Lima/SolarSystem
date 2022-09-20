import React, { Component } from 'react';
import Title from './Title';
import PropTypes from 'prop-types';

class SolarSystem extends Component {
  render() {
    const title = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ title } />
      </div>
    );
  }
}

// SolarSystem.defaultProps = {
//   title: '',
// };

// SolarSystem.propTypes = {
//   title: PropTypes.string,
// };

export default SolarSystem;
