import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ children, cssClasses, title, ...rest }) => {
   let classes = [ 'section-header' ];

   if (cssClasses) classes = classes.concat(cssClasses);

   return (
      <header className={classes.join(' ')} {...rest}>
         <h2 className="heading-2">{title}</h2>
         {children}
      </header>
   );
};

SectionHeader.propTypes = {
   cssClasses: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
   title: PropTypes.string.isRequired
};

export default SectionHeader;
