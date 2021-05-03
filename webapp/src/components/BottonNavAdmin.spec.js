import React from 'react';
import {shallow} from 'enzyme';
import  BottomNavAdmin from './BottomNavAdmin';
import Users from './admin/Users';
import StartPage from '../routes/StartPage';

const literal = value => ({
  toString: () => value
});

describe('AddAdminUsers ', function () {

  it('Users', () => {
    const result = shallow(<BottomNavAdmin webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const map = result.find(Users);
    expect(map).toBeTruthy();
  });

  it('StartPage', () => {
    const result = shallow(<BottomNavAdmin webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(StartPage);
    expect(friends).toBeTruthy();
  });

  
  
  
});

