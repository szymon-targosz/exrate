import React, { Component } from 'react';
import SectionHeader from './UI/SectionHeader';
import Input from './UI/Input';
import { connect } from 'react-redux';
import { setTextFilter, sortAlpha, sortAsc, sortDesc } from '../store/actions';

export class Filters extends Component {
   onTextChange = e => {
      this.props.setTextFilter(e.target.value);
   };

   onSortChange = e => {
      const sort = e.target.value;
      if (sort === 'alpha') {
         this.props.sortAlpha();
      } else if (sort === 'desc') {
         this.props.sortDesc();
      } else {
         this.props.sortAsc();
      }
   };

   render() {
      return (
         <section className="filters">
            <SectionHeader title="Filters" />
            <div className="p-s">
               <Input
                  elementType="input"
                  config={{
                     placeholder: 'Search',
                     value: this.props.filters.text,
                     id: 'search-input',
                     type: 'search',
                     autoComplete: 'off'
                  }}
                  changeHandler={this.onTextChange}
                  label
               />
               <Input
                  elementType="select"
                  cssClasses="input__control--select"
                  config={{ value: this.props.filters.sort }}
                  changeHandler={this.onSortChange}
                  options={[
                     { value: 'alpha', text: 'Alphabetically' },
                     { value: 'asc', text: 'Ascending' },
                     { value: 'desc', text: 'Descending' }
                  ]}
               />
            </div>
         </section>
      );
   }
}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = dispatch => ({
   setTextFilter: text => dispatch(setTextFilter(text)),
   sortAlpha: () => dispatch(sortAlpha()),
   sortAsc: () => dispatch(sortAsc()),
   sortDesc: () => dispatch(sortDesc())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
