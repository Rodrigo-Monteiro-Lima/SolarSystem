import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const title = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ title } />
        { missions.map(({ name: n, year: y, country: c, destination: d }) => (
          <MissionCard key={ n } name={ n } year={ y } country={ c } destination={ d } />
        ))}
      </div>
    );
  }
}

export default Missions;
