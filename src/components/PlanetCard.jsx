import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ planetName }
        />
        <p data-testid="planet-name" className="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
