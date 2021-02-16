import PropTypes from 'prop-types';

export default PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string
  }).isRequired
}).isRequired;
