import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const title = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ title } />
        { planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
      </div>
    );
  }
}

// SolarSystem.defaultProps = {
//   planets: [],
// };

// SolarSystem.propTypes = {
//   planets: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//   })),
// };

export default SolarSystem;
