import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ elementType, config, cssClasses, changeHandler, options, label, ...rest }) => {
   let inputElem = null;
   let classes = [ 'input__control' ];

   if (cssClasses) classes = classes.concat(cssClasses);

   switch (elementType) {
      case 'input':
         inputElem = <input className={classes.join(' ')} {...config} onChange={changeHandler} {...rest} />;
         break;

      case 'select':
         inputElem = (
            <select className={classes.join(' ')} {...config} onChange={changeHandler} {...rest}>
               {options.map(option => (
                  <option key={option.value} value={option.value}>
                     {option.text}
                  </option>
               ))}
            </select>
         );
         break;

      default:
         inputElem = <input type="text" className={classes.join(' ')} {...config} onChange={changeHandler} {...rest} />;
         break;
   }

   return (
      <div className="input">
         {inputElem}
         {(label && elementType !== 'select') && <label className="input__label" htmlFor={config.id}>{config.placeholder}</label>}
      </div>
   );
};

Input.propTypes = {
   elementType: PropTypes.string,
   cssClasses: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
   changeHandler: PropTypes.func.isRequired,
   config: PropTypes.shape({
      value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
   })
};

export default Input;
