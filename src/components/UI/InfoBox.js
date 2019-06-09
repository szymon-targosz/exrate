import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({ description, data, cssClasses, ...rest }) => {
   let classes = [ 'info-box' ];

   if (cssClasses) classes = classes.concat(cssClasses);

   return (
      <div className={classes.join(' ')} {...rest}>
         <p className="info-box__description">{description}</p>
         <h4>{data}</h4>
      </div>
   );
};

InfoBox.propTypes = {
   cssClasses: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
   description: PropTypes.string.isRequired,
   data: PropTypes.string.isRequired
};

export default InfoBox;
