import React from 'react';
import {shallow} from 'enzyme';

import ButtonAddDelete from '../ButtonAddDelete';
import FaceIcon from '@material-ui/icons/Face';

import ButtonFriendship from '../ButtonFriendship'

describe('ButtonFriendship', () => {

  describe('logger distint webid', function () {
    let result;
    beforeEach(() => {
      result = shallow(<ButtonFriendship webId="https://webid.example/#me" loggedUser="https://webid.example/#loger" />);
    });

    it('should render a botton AddDelate', () => {
      let butonAddDelete = result.find(ButtonAddDelete);
      expect(butonAddDelete).toExist();
      expect(butonAddDelete).toHaveProp('webId', 'https://webid.example/#me');
      expect(butonAddDelete).toHaveProp('loggedUser', 'https://webid.example/#loger');
    });

  });

  describe('logger same webid', function () {
    let result;
    beforeEach(() => {
      result = shallow(<ButtonFriendship webId="https://webid.example/#me" loggedUser="https://webid.example/#me" />);
    });

    it('should render a default face icon', () => {
        let butonAddDelete = result.find(ButtonAddDelete);
        expect(butonAddDelete).not.toExist();
    });
  });
});

