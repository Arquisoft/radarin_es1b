import React from 'react';
import {shallow} from 'enzyme';
import InfiniteScroll from "react-infinite-scroll-component";

import List from "@material-ui/core/List";
import FriendList from '../FriendList';
import Friend from "../friend";

describe('friend list', function () {
  it('shows an empty list', () => {
    const result = shallow(<FriendList/>);
    const friends = result.find(List).find(Friend);
    expect(friends).toHaveLength(0);
  });

  it('shows an empty list', () => {
    const result = shallow(<FriendList/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });


  it('shows the given maximum of friends initially', () => {
    const result = shallow(<FriendList
        webiD='https://uo225211.solidcommunity.net/profile/card#me'
        showInitially={3}
    />);
    const friends = result.find(List).find(Friend);
    expect(friends.length>=0).toBeTruthy();
    //expect(friends.at(0).webId).toBe('https://albertofreije.solidcommunity.net/profile/card#me');
    expect(friends.at(0).find('https://albertofreije.solidcommunity.net/profile/card#me')).toBeTruthy();
  });
  

});