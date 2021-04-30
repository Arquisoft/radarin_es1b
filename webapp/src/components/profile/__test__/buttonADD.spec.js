import React from 'react';
import {shallow, instance} from 'enzyme';
import { render, find } from '@testing-library/react';
import ButtonAddDelete from '../ButtonAddDelete';
import { Button } from '@material-ui/core';

describe('ButtonFriendship', () => {

  describe('logger distint webid and pending friend', function () {
    let result;
    beforeEach(() => {
      result = shallow(<ButtonAddDelete webId="https://webid.example/#me" loggedUser="https://webid.example/#loger" />);
    });

    it('should render a botton AddDelate', () => {
      let butonAddDelete = result.find(Button);
      expect(butonAddDelete).toBeTruthy();
    });
    it('should render a botton componentDidMount', () => {
        const instance=result.instance();
        const spy=jest.spyOn(instance, 'displayText'); // You spy on the randomFunction
      instance.componentDidMount();
      
      expect(spy).toHaveBeenCalled();
      });

  });
  

  describe('logger same webid', function () {
    let result;
    beforeEach(() => {
      result = shallow(<ButtonAddDelete webId="https://webid.example/#me" loggedUser="https://webid.example/#me" />);
    });

    it('should render a default face icon', () => {
        let butonAddDelete = result.find(ButtonAddDelete).exists();
        expect(butonAddDelete).not.toBeTruthy();
    });
  });
  
});w