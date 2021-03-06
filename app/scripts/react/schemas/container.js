import { PropTypes } from 'prop-types';


export default PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string,  
    }),
    description: PropTypes.string,
    bottomText: PropTypes.string,
  }) 