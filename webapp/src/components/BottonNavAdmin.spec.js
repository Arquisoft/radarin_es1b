import React from 'react';
import {shallow} from 'enzyme';
import  BottomNavAdmin from './BottomNavAdmin';
import Users from './admin/Users';
import StartPageAdmin from '../routes/StartPageAdmin';

const literal = value => ({
  toString: () => value
});

describe('AddAdminUsers ', function () {

  it('Users', () => {
    const result = shallow(<BottomNavAdmin webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const map = result.find(Users);
    expect(map).toBeTruthy();
  });

  it('StartPageAdmin', () => {
    const result = shallow(<BottomNavAdmin webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(StartPageAdmin);
    expect(friends).toBeTruthy();
  });

  
  
  
});

