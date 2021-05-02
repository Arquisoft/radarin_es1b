import React from 'react';
import {render, shallow} from 'enzyme';
import Friend from "../markers/FriendPopupManager"
import Map from '../MainMap';
import FriendsLocationMarkersFunc from '../FriendsLocationMarkersFunc';
import MeetLocationMarkersFunc from"../MeetLocationMarkersFunc";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

const literal = value => ({
  toString: () => value
});

test('renders learn react link', () => {
  var result=render(<Map  webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}

/>);
  expect(result).toBeTruthy();
});
describe('Map', function () {
   
  const result = shallow(<Map  webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);

it('Friend', () => {
    const friend=result.find(Friend);
  expect(friend).toBeTruthy();
});

it('MeetLocationMarkersFunc', () => {
  const meet=result.find(MeetLocationMarkersFunc);
  expect(meet).toBeTruthy();
  
});

it('FriendsLocationMarkersFunc', () => {
  const loc=result.find(FriendsLocationMarkersFunc);
  expect(loc).toBeTruthy();
});

it('FriendsLocationMarkersFunc', () => {
  const loc=result.find(FriendsLocationMarkersFunc);
  expect(loc).toBeTruthy();
});



});


describe('Map ', function () {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    //document.body.removeChild(container);
    container = null;
  });
  
  it('can render and update a counter', () => {
    // Prueba la primer renderización y componentDidMount
    act(() => { container=render(<Map webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>)});

    expect(container).toBeTruthy();
  });

});

