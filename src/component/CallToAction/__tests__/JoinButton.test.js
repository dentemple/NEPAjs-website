// @flow

import React from "react";
import { shallow } from "enzyme";
import MyComponent from "../JoinButton";

it("renders without crashing", () => {
  shallow(<MyComponent />);
});
