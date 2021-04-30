import React from 'react';
import {shallow, render} from 'enzyme';

import SearchFriends from '../Friends';
import { Button } from '@material-ui/core';
import Friend from "../../friendList/friend";


const literal = value => ({
  toString: () => value
});

describe('Friends', function () {
    
    it('Search', () => {
        const result = shallow(<SearchFriends webId={literal('https://uo225211.solidcommunity.net/')}/>);
        const chat=result.find(Friend);
        expect(chat).toBeTruthy();
      });
      
      it('FriendsTabs', () => {
        const result = shallow(<SearchFriends webId={literal('https://uo225211.solidcommunity.net/')}/>);
        const friends=result.find(Button);
        expect(friends).toBeTruthy();
      }); 
});
