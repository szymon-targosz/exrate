import React, { Component } from 'react';
import DefineRate from './components/DefineRate';
import AddTransaction from './components/AddTransaction';
import Transactions from './components/Transactions';
import HighestTransaction from './components/HighestTransaction';
import Header from './components/Header';
import Filters from './components/Filters';

export default class App extends Component {
   render() {
      return (
         <React.Fragment>
            <Header />
            <section className="content container">
               <DefineRate />
               <AddTransaction />
               <HighestTransaction />
               <Filters />
               <Transactions />
            </section>
         </React.Fragment>
      );
   }
}
