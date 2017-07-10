// @flow

import React from "react";
import { shallow } from "enzyme";
import MyComponent from "../TranslucentBg";

it("renders without crashing", () => {
  shallow(<MyComponent />);
});
