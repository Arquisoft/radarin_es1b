import React from 'react';
import {shallow, render} from 'enzyme';
import Index from '../Index';
import ProfileContainer from '../Container';
import useProfile from "../useProfile";

const literal = value => ({
  toString: () => value
});
describe('Profile container', () => {

    it('should not render profile while pending', () => {
      const result = shallow(<Index  webId="https://uo225211.solidcommunity.net/profile/card#me"/>);
      expect(result.find(ProfileContainer)).toEqual({});
    });
  
    
    
      });