import PropTypes from 'prop-types';

export default PropTypes.exact({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.exact({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}).isRequired;
