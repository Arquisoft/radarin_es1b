import React from 'react';
import {shallow} from 'enzyme';

import PendingFriends from '../PendingFriends';
import Friend from "../../friendList/friend";


const literal = value => ({
  toString: () => value
});

describe('Friends', function () {
    
    it('Friend', () => {
      const result = shallow(<PendingFriends webId={literal('https://uo225211.solidcommunity.net/')}/>);
      const chat=result.find(Friend);
      expect(chat).toBeTruthy();
    });
    
});
