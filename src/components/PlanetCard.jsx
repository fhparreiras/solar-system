import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, id } = this.props;
    return (
      <div data-testid="planet-card" key={ id } className="planet-card">
        <p data-testid="planet-name" className="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
  id: null,
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  id: PropTypes.number,
};

export default PlanetCard;
