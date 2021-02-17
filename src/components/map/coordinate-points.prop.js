import PropTypes from "prop-types";

export default PropTypes.arrayOf(PropTypes.shape({
  lat: PropTypes.number,
  lng: PropTypes.number,
  title: PropTypes.string
})).isRequired;
