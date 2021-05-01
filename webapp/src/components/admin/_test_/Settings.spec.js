
import React from 'react';
import {shallow, mount} from 'enzyme';
import Settings from '../Settings';

describe('OnlineUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<Settings />);
    expect(result).toBeTruthy();
  });
});