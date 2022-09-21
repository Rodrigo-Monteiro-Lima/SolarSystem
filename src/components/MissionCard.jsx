import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Year from '../images/year.png';
import Place from '../images/place.png';
import Flag from '../images/flag.png';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="card">
        <div className="name-card">
          <p data-testid="mission-name">{ name }</p>
        </div>
        <hr />
        <div className="info-card">
          <div data-testid="mission-year" className="year">
            <img src={ Year } alt="ícone de ano" />
            <p>{ year }</p>
          </div>
          <div data-testid="mission-country" className="country">
            <img src={ Place } alt="ícone de lugar" />
            <p>{ country}</p>
          </div>
          <div data-testid="mission-destination" className="destination">
            <img src={ Flag } alt="ícone de bandeira" />
            <p>{ destination }</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
