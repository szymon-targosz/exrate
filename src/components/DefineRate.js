import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionHeader from './UI/SectionHeader';
import InfoBox from './UI/InfoBox';
import Input from './UI/Input';
import { setExchangeRate } from '../store/actions';
import { generateAmountMsg } from '../helpers/transactions';

export class DefineRate extends Component {
   state = { rate: 0 };

   handleInput = e => {
      const rate = e.target.value;
      if (!rate || rate.match(/^\d{1,}(\.\d{0,9})?$/)) {
         this.setState({ rate: rate });
         this.props.setExchangeRate(rate || 0);
      }
   };

   render() {
      return (
         <section className="define-rate">
            <SectionHeader title="Set exchange rate" cssClasses="define-rate__header" />
            <div className="define-rate__form p-s">
               <Input
                  elementType="input"
                  cssClasses="input__control--short"
                  changeHandler={this.handleInput}
                  config={{
                     value: this.state.rate,
                     placeholder: 'Exchange rate',
                     id: 'rate-input',
                     type: 'text'
                  }}
                  label
               />
            </div>
            <div className="define-rate__current">
               <InfoBox
                  description="Current exchange rate"
                  data={`${generateAmountMsg(1)} = ${generateAmountMsg(parseFloat(this.state.rate) || 0, 'pl', true)}`}
               />
            </div>
         </section>
      );
   }
}

const mapDispatchToProps = dispatch => ({ setExchangeRate: rate => dispatch(setExchangeRate(rate)) });

export default connect(null, mapDispatchToProps)(DefineRate);
