/* global it expect */
import React from 'react'
import { render, mount } from 'enzyme'
import 'jest-enzyme'

import MyComponent from '../SpinningLogo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MyComponent />, div)
})

it('receives the custom css', () => {
  const wrapper = mount(<MyComponent />)
  expect(wrapper.find('.React-logo')).toHaveClassName('React-logo')
})
