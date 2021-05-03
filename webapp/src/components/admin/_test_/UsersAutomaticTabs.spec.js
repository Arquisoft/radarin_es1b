import React from 'react';
import {shallow} from 'enzyme';
import AllUsers from '../AllUsers';
import OnlineUsers from '../OnlineUsers';
import DeleteUsers from '../DeleteUsers';
import BanUsers from '../BanUsers';
import BannedUsers from '../BannedUsers';
import AdminUsers from '../AdminUsers';
import AddAdminUsers from '../AddAdminUsers';
import UsersAutomaticTabs from '../UsersAutomaticTabs';
import TabPanel from '../UsersAutomaticTabs'
import InactiveUsers from '../InactiveUsers';

const literal = value => ({
  toString: () => value
});

describe('UsersAutomaticTabs', function () {
   
    const result = shallow(<UsersAutomaticTabs webId='https://asw2021es1b.solidcommunity.net/profile/card#me'/>);

    it('TabPanel', () => {
      const all=result.find(TabPanel);
    expect(all).toBeTruthy();
  });

  it('AllUsers', () => {
      const all=result.find(AllUsers);
    expect(all).toBeTruthy();
  });

  it('OnlineUsers', () => {
    const online=result.find(OnlineUsers);
    expect(online).toBeTruthy();
    
  });

  it('DeleteUsers', () => {
    const del=result.find(DeleteUsers);
    expect(del).toBeTruthy();
  });

  it('BanUsers', () => {
    const ban=result.find(BanUsers);
    expect(ban).toBeTruthy();
  });

  it('BannedUsers', () => {
    const banned=result.find(BannedUsers);
    expect(banned).toBeTruthy();
  });

  it('AdminUsers', () => {
    const adm=result.find(AdminUsers);
    expect(adm).toBeTruthy();
  });

  it('AddAdminUsers', () => {
    const add=result.find(AddAdminUsers);
    expect(add).toBeTruthy();
  });

  it('InactiveUsers', () => {
    const add=result.find(InactiveUsers);
    expect(add).toBeTruthy();
  });
});