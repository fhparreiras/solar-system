import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-cards">
        <p data-testid="mission-name">
          Name:
          { name }
        </p>
        <p data-testid="mission-year">
          Year:
          { year }
        </p>
        <p data-testid="mission-country">
          Country:
          { country }
        </p>
        <p data-testid="mission-destination">
          Destination:
          { destination }
        </p>
      </div>);
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default MissionCard;
