// @flow

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TestView from '../test-view';

describe('Test View component', () => {
  it('should render with a text prop', () => {
    const props = {
      text: 'This is test text',
    };

    const tree = toJson(
      shallow(<TestView {...props} />),
    );

    expect(tree).toMatchSnapshot();
  });
});
