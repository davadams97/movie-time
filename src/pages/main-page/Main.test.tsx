import React from "react";
import { shallow } from "enzyme";
import { Main } from "./Main";

// TODO: Test routing triigers call
// TODO: Test callback is executed when pages are loaded
test('renders correctly', () => {
    shallow(<Main />);
});

test('loads empty page name', () => {
    const wrapper = shallow(<Main pageName="Test Page" />);
    expect(wrapper.state('pageName')).toEqual('');
});
