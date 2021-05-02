import React from 'react';
import {shallow} from 'enzyme';
import  AppBar from './AppBar';
import InfiniteScroll from "react-infinite-scroll-component";
import Toolbar from '@material-ui/core/Toolbar';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Button } from '@material-ui/core';
import NotificationContainer from './notifications/NotificationContainer';
import Login from './login';

describe('AppBar ', function () {
  it('shows an empty list', () => {
    const result = shallow(<AppBar/>);
    const not = result.find(Toolbar).find(NotificationContainer);
    expect(not).toBeTruthy();
  });

  it('shows an empty list', () => {
    const result = shallow(<AppBar/>);
    console.log(result.debug())
    const not = result.find(Toolbar).find(Login);
    expect(not).toBeTruthy();
  });


  it('shows an InfiniteScroll', () => {
    const result = shallow(<AppBar/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });
  
  it('button', () => {
    const result = shallow(<AppBar/>);
    const boton = result.find(Button)
    expect(boton).toBeTruthy();
    
  });
  
  
});


describe('AppBar ', function () {
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
    act(() => {    ReactDOM.render(<AppBar/>, container)});

    expect(container).toBeTruthy();
    const button = container.querySelector('button');
    act(() => {    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));  })
  });

});

describe('AppBar ', function () {
  let container;
  var index=0;
  var msg={
    time:  new Date()
  };
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
    act(() => {    ReactDOM.render(<AppBar/>, container)});

    expect(container).toBeTruthy();
  });

});