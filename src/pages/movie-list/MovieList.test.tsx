import { shallow } from "enzyme";
import * as React from "react";
import { MovieList } from "./MovieList";

test('renders correctly', () => {
    shallow(<MovieList />);
});
