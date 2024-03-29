import React from 'react';
import {shallow} from 'enzyme';

import FriendsTabs from '../FriendsTabs'
import SearchFriends from '../SearchFriends';
import PendingFriends from '../PendingFriends';
import NewRequest from '../NewRequest';

describe('Friend tabs container', function () {
   
    const result = shallow(<FriendsTabs webId='https://uo225211.solidcommunity.net/'/>);

  it('Searchfriens', () => {
      const search=result.find(SearchFriends);
    expect(search).toBeTruthy();
  });

  it('PendingFriends', () => {
    const search=result.find(PendingFriends);
    expect(search).toBeTruthy();
    
  });

  it('NewRequest', () => {
    const search=result.find(NewRequest);
    expect(search).toBeTruthy();
  });
});