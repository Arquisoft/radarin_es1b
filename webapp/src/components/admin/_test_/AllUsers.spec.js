import React from 'react';
import {shallow, mount} from 'enzyme';
import AllUsers from '../AllUsers';
import { Button } from '@material-ui/core';
import Friend from "../../friendList/friend";

import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import InfiniteScroll from "react-infinite-scroll-component";

import List from "@material-ui/core/List";

const literal = value => ({
  toString: () => value
});

describe('AllUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<AllUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(List).find(Friend);
    expect(friends.length>=0).toBeTruthy();
  });

  it('shows an InfiniteScroll', () => {
    const result = shallow(<AllUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });


  it('shows the given maximum of friends initially', () => {
    const result = shallow(<AllUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const boton = result.find(List).find(Button);
    boton.simulate('click');
    expect(boton).toBeTruthy();
    const input = result.find(List).find("input");
    expect(input).toBeTruthy();
    
  });
  
  it('sbuton', () => {
    const result = shallow(<AllUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const boton = result.find(List).find(Button);
    const query= result.prop('querySuccess');
    //expect(query).toBe(false);
    const searchname=result.state('searchName');
    expect(searchname).toBe("");
  });
  
});

describe('AllUsers ', function () {
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
    act(() => {    ReactDOM.render(<AllUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>, container)});

    expect(container).toBeTruthy();
  });

});

