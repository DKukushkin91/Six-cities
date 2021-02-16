import PropTypes from 'prop-types';

export default PropTypes.shape({
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
}).isRequired;
