import React from 'react';
import {shallow} from 'enzyme';
import Index from '../index';
import LoginContainer from '../Container'
import AddUsersContainer from "../../login/AddUsersContainer"
import ChangeStatus from "../ChangeStatusContainer"

describe('Profile index', () => {

    it('LoginContainer', () => {
      const result = shallow(<Index  webId="https://uo225211.solidcommunity.net/profile/card#me"/>);
      expect(result.find(LoginContainer)).toEqual({});
    });
    it('AddUsersContainer', () => {
      const result = shallow(<Index  webId="https://uo225211.solidcommunity.net/profile/card#me"/>);
      expect(result.find(AddUsersContainer)).toEqual({});
    });

    it('ChangeStatus', () => {
      const result = shallow(<Index  webId="https://uo225211.solidcommunity.net/profile/card#me"/>);
      expect(result.find(ChangeStatus)).toEqual({});
    });
    
    
      });

