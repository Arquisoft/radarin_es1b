import React from 'react';
import {shallow, render} from 'enzyme';

import Friends from '../Friends';
import FriendsTabs from '../SearchFriends';
import Chat from '../chat/Chat';


const literal = value => ({
  toString: () => value
});

describe('Friends', function () {
    
    it('Friend', () => {
      const result = shallow(<NewRequest webId={literal('https://uo225211.solidcommunity.net/')}/>);
      const chat=result.find(Friend);
      expect(chat).toBeTruthy();
    });
    
});
