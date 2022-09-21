import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const title = 'Missões';
    return (
      <section className="main-container">
        <div data-testid="missions" className="container">
          <Title headline={ title } />
          { missions.map(({ name: n, year: y, country: c, destination: d }) => (
            <MissionCard
              key={ n }
              name={ n }
              year={ y }
              country={ c }
              destination={ d }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
