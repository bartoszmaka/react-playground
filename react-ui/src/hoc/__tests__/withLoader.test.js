import React from 'react';
import withLoader from '../withLoader';

const DummyComponent = () => <p>A component</p>
const EnhancedComponent = withLoader(DummyComponent)

describe('withLoader', () => {
  describe('when isLoading prop is true', () => {
    it('renders the loader', () => {
      const wrapper = shallow(<EnhancedComponent isLoading={true} />)
      expect(wrapper.find('Loading...').length).toEqual(1)
    });
  });

  describe('when isLoading prop is false', () => {
    it('renders the component', () => {
      const wrapper = shallow(<EnhancedComponent isLoading={true} />)
      expect(wrapper.find('Loading...').length).toEqual(0)
    });
  });
});
