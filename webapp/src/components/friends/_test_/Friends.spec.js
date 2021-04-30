import React from 'react';
import {shallow, render} from 'enzyme';

import Friends from '../Friends';
import FriendsTabs from '../SearchFriends';
import Chat from '../chat/Chat';


const literal = value => ({
  toString: () => value
});

describe('Friends', function () {
    
    it('Chat', () => {
        const result = shallow(<Friends state={"isToggled: true"} webId={literal('https://uo225211.solidcommunity.net/')}/>);
        const chat=result.find(Chat);
        expect(chat).toBeTruthy();
      });
      
      it('FriendsTabs', () => {
        const result = shallow(<Friends state={"isToggled: false"} webId={literal('https://uo225211.solidcommunity.net/')}/>);
        const friends=result.find(FriendsTabs);
        expect(friends).toBeTruthy();
      }); 

});
