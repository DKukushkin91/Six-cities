import PropTypes from 'prop-types';

export default PropTypes.shape({
  price: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  images: PropTypes.array,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
}).isRequired;
