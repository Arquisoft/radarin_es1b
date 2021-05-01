import React from 'react';
import {shallow, render} from 'enzyme';
import Index from '../index';
import FriendList from '../FriendList';

const literal = value => ({
  toString: () => value
});
describe('Profile index', () => {

    it('should not render profile while pending', () => {
      const result = shallow(<Index  webId="https://uo225211.solidcommunity.net/profile/card#me"/>);
      expect(result.find(FriendList)).toEqual({});
    });
  
    
    
      });
