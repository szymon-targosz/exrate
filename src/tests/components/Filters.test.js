import React from 'react';
import { Filters } from '../../components/Filters';
import { shallow } from 'enzyme';
import Input from '../../components/UI/Input';

const filters = { text: '', sort: 'alpha' };

let wrapper, setTextFilter, sortAlpha, sortAsc, sortDesc;

beforeEach(() => {
   setTextFilter = jest.fn();
   sortAlpha = jest.fn();
   sortAsc = jest.fn();
   sortDesc = jest.fn();

   wrapper = shallow(
      <Filters setTextFilter={setTextFilter} sortAlpha={sortAlpha} sortAsc={sortAsc} sortDesc={sortDesc} filters={filters} />
   );
});

describe('COMPONENT - Filters', () => {
   test('Should render Filters correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should handle text change', () => {
      const value = 'text filter';
      wrapper.find(Input).first().prop('changeHandler')({ target: { value } });
      expect(setTextFilter).toHaveBeenCalledWith(value);
   });

   test('Should handle sort change(ascending)', () => {
      const value = 'asc';
      wrapper.find(Input).at(1).prop('changeHandler')({ target: { value } });
      expect(sortAsc).toHaveBeenCalled();
   });

   test('Should handle sort change(descending)', () => {
      const value = 'desc';
      wrapper.find(Input).at(1).prop('changeHandler')({ target: { value } });
      expect(sortDesc).toHaveBeenCalled();
   });

   test('Should handle sort change(alphabetical)', () => {
      const value = 'alpha';
      wrapper.find(Input).at(1).prop('changeHandler')({ target: { value } });
      expect(sortAlpha).toHaveBeenCalled();
   });
});
