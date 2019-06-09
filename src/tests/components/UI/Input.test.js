import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../components/UI/Input';

let wrapper, changeHandler;

beforeEach(() => {
   changeHandler = jest.fn();
   wrapper = shallow(<Input changeHandler={changeHandler} config={{ value: 'input value' }} />);
});

describe('COMPONENT - Input', () => {
   test('Should render input type "text" if the elementType prop is not defined', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should render input type "text"', () => {
      wrapper.setProps({ elementType: 'input', config: { value: 'input value', type: 'text' } });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should render input type "text" with label', () => {
      wrapper.setProps({
         elementType: 'input',
         config: {
            value: 'input value',
            type: 'text',
            id: 'some-input-id',
            placeholder: 'placeholder text'
         },
         label: true
      });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should render select element', () => {
      wrapper.setProps({
         elementType: 'select',
         options: [ { value: 'asc', text: 'ascending' }, { value: 'desc', text: 'descending' } ]
      });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should add external css classes - array', () => {
      wrapper.setProps({ cssClasses: [ 'bg-secondary', 'border', 'border-info' ] });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should add external css classes - string', () => {
      wrapper.setProps({ cssClasses: 'bg-warning p-s' });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should handle onChange event', () => {
      wrapper.find('input').simulate('change');
      expect(changeHandler).toHaveBeenCalled();
   });
});
