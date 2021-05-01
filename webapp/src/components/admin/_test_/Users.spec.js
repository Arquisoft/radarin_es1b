import React from 'react';
import {shallow, render} from 'enzyme';


import AddAdminUsers from '../AddAdminUsers';
import Users from '../Users';

const literal = value => ({
  toString: () => value
});

describe('UsersAutomaticTabs', function () {
   
    const result = shallow(<Users webId='https://asw2021es1b.solidcommunity.net/profile/card#me'/>);

  it('AllUsers', () => {
      const all=result.find(AddAdminUsers);
    expect(all).toBeTruthy();
  });

  
});