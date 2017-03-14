/* global it */
import React from 'react'
import { render, mount } from 'enzyme'
import { toHaveClassName } from 'jest-enzyme'

import MyComponent from '../SpinningLogo'

it('receives the custom css', () => {
  const wrapper = mount(<MyComponent />);
  expect(wrapper.find('.React-logo')).toHaveClassName('React-logo')
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MyComponent />, div)
})
