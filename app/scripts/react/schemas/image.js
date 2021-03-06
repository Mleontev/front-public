import { PropTypes } from 'prop-types';

export default PropTypes.shape({
  height: PropTypes.number,
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
});