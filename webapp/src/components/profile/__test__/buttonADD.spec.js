import React from 'react';
import {shallow} from 'enzyme';
import ButtonAddDelete from '../ButtonAddDelete';
import { Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

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
  
});


describe('ButtonAddDelete ', function () {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  
  it('can render and update a counter', () => {
    // Prueba la primer renderización y componentDidMount
    act(() => {    ReactDOM.render(<ButtonAddDelete webId="https://webid.example/#me" loggedUser="https://webid.example/#me" />, container)});

    expect(container).toBeTruthy();
  });

});