import React from "react";
import { shallow } from "enzyme";
import CourseRecs from "./CourseRecs";

//RENDERING
describe("<CourseRecs/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CourseRecs />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
