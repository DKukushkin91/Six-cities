import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
})).isRequired;
