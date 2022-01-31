import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import contents from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {contents.map((content, index) => (
          <MissionCard
            name={ content.name }
            year={ content.year }
            country={ content.country }
            destination={ content.destination }
            key={ index }
          />
        ))}
      </div>);
  }
}

export default Missions;
