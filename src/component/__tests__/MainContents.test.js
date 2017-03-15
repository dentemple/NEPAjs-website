/* global it expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-enzyme'

import MyComponent from '../MainContents'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})

it('receives the bootstrap container class', () => {
  const wrapper = mount(<MyComponent />)
  expect(wrapper.find('.container-fluid')).toHaveClassName('container-fluid')
})
