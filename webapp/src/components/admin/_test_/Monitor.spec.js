
import React from 'react';
import {shallow, mount} from 'enzyme';
import Monitor from '../Monitor';

describe('OnlineUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<Monitor />);
    expect(result).toBeTruthy();
  });
});