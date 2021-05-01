import React from 'react';
import {shallow, render} from 'enzyme';

import NotificationContainer from './NotificationContainer'
import FriendList from '../FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

const literal = value => ({
  toString: () => value
});

describe('Friend list container', function () {
  
  it('indicates loading', () => {
    const result = shallow(NotificationContainer);
    expect(result).toBetruthy();;
  });

  it('shows friend list after loading', () => {
    const result = shallow(<FriendListContainer
      webId={literal('https://uo225211.solidcommunity.net/')}/>).find(<FriendList webId={literal('https://uo225211.solidcommunity.net/')}/>);
    expect(result).toBeTruthy();
  });

});