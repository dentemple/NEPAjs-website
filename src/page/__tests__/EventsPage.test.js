// @flow

import React from "react";
import { shallow } from "enzyme";
import MyComponent from "../EventsPage";

it("renders without crashing", () => {
  shallow(<MyComponent />);
});
