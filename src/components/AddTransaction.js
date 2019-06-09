import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../store/actions';
import SectionHeader from './UI/SectionHeader';
import Input from './UI/Input';

export class AddTransaction extends Component {
   state = { name: '', amount: '', error: undefined };
   inputNameRef = React.createRef();

   handleSubmit = e => {
      e.preventDefault();
      const name = this.state.name.trim();
      if (name === '') return this.setState({ error: 'Please enter the transaction name' });

      const isOccupied = this.props.transactions.find(t => t.name === name);
      if (isOccupied) return this.setState({ error: 'Name already taken' });

      this.props.addTransaction(name, this.state.amount);
      this.setState({ error: undefined, name: '', amount: '' });
      this.inputNameRef.current.focus();
   };

   onNameChange = e => {
      this.setState({ name: e.target.value });
   };

   onAmountChange = e => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState({ amount });
      }
   };

   render() {
      return (
         <section className="add-transaction">
            <SectionHeader title="Add transaction" />
            <form onSubmit={this.handleSubmit} className="p-s">
               <Input
                  elementType="input"
                  changeHandler={this.onNameChange}
                  config={{
                     name: 'name',
                     ref: this.inputNameRef,
                     value: this.state.name,
                     placeholder: 'Name',
                     autoComplete: 'off',
                     id: 'name-input',
                     type: 'text'
                  }}
                  label
               />
               <Input
                  elementType="input"
                  changeHandler={this.onAmountChange}
                  config={{
                     name: 'amount',
                     value: this.state.amount,
                     placeholder: 'Amount (EUR)',
                     autoComplete: 'off',
                     id: 'amount-input',
                     type: 'text'
                  }}
                  label
               />
               {this.state.error && <p className="error">{this.state.error}</p>}
               <button className="btn btn--block" disabled={!this.state.name || !this.state.amount}>
                  Add
               </button>
            </form>
         </section>
      );
   }
}

const mapStateToProps = ({ transactions }) => ({ transactions });

const mapDispatchToProps = dispatch => ({
   addTransaction: (name, amount) => dispatch(addTransaction(name, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
