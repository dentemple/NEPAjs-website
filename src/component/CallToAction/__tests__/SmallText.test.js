// @flow

import React from "react";
import { shallow } from "enzyme";
import MyComponent from "../SmallText";

it("renders without crashing", () => {
  shallow(<MyComponent />);
});
