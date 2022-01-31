import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, key } = this.props;
    return (
      <div data-testid="planet-card" id={ key }>
        <p data-testid="planet-name">
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
  key: null,
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  key: PropTypes.number,
};

export default PlanetCard;
