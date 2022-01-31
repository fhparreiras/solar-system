import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planet-card-container">
          {planets.map((p, id) => (
            <PlanetCard
              key={ id }
              planetName={ p.name }
              planetImage={ p.image }
            />))}
        </div>
      </div>);
  }
}

export default SolarSystem;
