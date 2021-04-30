import React from 'react';
import {shallow, render} from 'enzyme';

import FriendListContainer from '../Container'
import FriendList from '../FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

const literal = value => ({
  toString: () => value
});

describe('Friend list container', function () {
  
  it('indicates loading', () => {
    const result = shallow(<FriendListContainer webId={literal('https://webid.example/#me')} pending/>);
    expect(result).toContainEqual(<CircularProgress/>);
  });

  it('shows friend list after loading', () => {
    const result = shallow(<FriendListContainer
      webId={literal('https://uo225211.solidcommunity.net/')}/>).find(<FriendList webId={literal('https://uo225211.solidcommunity.net/')}/>);
    expect(result).toBeTruthy();
  });

});