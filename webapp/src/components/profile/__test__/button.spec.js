import React from 'react';
import {shallow, isEmpty} from 'enzyme';

import ButtonAddDelete from '../ButtonAddDelete';
import { Button } from '@material-ui/core';
import ButtonFriendship from '../ButtonFriendship'

describe('ButtonFriendship', () => {

  describe('logger distint webid and pending friend', function () {
    let result;
    beforeEach(() => {
      result = shallow(<ButtonFriendship webId="https://webid.example/#me" loggedUser="https://webid.example/#loger" />);
    });

    it('should render a botton AddDelate', () => {
      let butonAddDelete = result.find(ButtonAddDelete);
      expect(butonAddDelete).toBeTruthy();
    });

  });

  describe('logger same webid', function () {
    let result;
    beforeEach(() => {
      result = shallow(<ButtonFriendship webId="https://webid.example/#me" loggedUser="https://webid.example/#me" />);
    });

    it('should render a default face icon', () => {
        let butonAddDelete = result.find(ButtonAddDelete).exists();
        expect(butonAddDelete).not.toBeTruthy();
    });
  });
  
});

