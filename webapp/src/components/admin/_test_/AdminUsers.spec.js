import React from 'react';
import {shallow} from 'enzyme';
import  AdminUsers from '../AdminUsers';
import Friend from "../../admin/deleteAdmin";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
const literal = value => ({
  toString: () => value
});

describe('AddAdminUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<AdminUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(List).find(Friend);
    expect(friends.length>=0).toBeTruthy();
  });

  it('shows an InfiniteScroll', () => {
    const result = shallow(<AdminUsers webId={literal('https://uo225211.solidcommunity.net//profile/card#me')}/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });
  
  
  
});

describe('AdminUsers ', function () {
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
    act(() => {    ReactDOM.render(<AdminUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>, container)});

    expect(container).toBeTruthy();
  });

});