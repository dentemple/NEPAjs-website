// @flow

import React from "react";
import { shallow, render } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MyComponent from "../index";

it("renders without crashing", () => {
  shallow(
    <MemoryRouter>
      <MyComponent />
    </MemoryRouter>
  );
});

it("matches the snapshot", () => {
  const component = render(
    <MemoryRouter>
      <MyComponent />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
