import { PropTypes } from 'react';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['string', 'textarea']),
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
});