import React from 'react';
import {render, shallow} from 'enzyme';
import Friend from "../markers/FriendPopupManager"
import Map from '../MainMap';
import FriendsLocationMarkersFunc from '../FriendsLocationMarkersFunc';
import MeetLocationMarkersFunc from"../MeetLocationMarkersFunc";
const literal = value => ({
  toString: () => value
});

test('renders learn react link', () => {
  var result=render(<Map  webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}

/>);
  expect(result).toBeTruthy();
});
describe('Friend tabs container', function () {
   
  const result = shallow(<Map  webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);

it('Searchfriens', () => {
    const friend=result.find(Friend);
  expect(friend).toBeTruthy();
});

it('PendingFriends', () => {
  const meet=result.find(MeetLocationMarkersFunc);
  expect(meet).toBeTruthy();
  
});

it('NewRequest', () => {
  const loc=result.find(FriendsLocationMarkersFunc);
  expect(loc).toBeTruthy();
});
});
