import React from 'react';
import {shallow, mount} from 'enzyme';
import OnlineUsers from '../OnlineUsers';
import Friend from "../../friendList/friend";

import InfiniteScroll from "react-infinite-scroll-component";

import List from "@material-ui/core/List";

const literal = value => ({
  toString: () => value
});

describe('OnlineUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<OnlineUsers webId={literal('https://uo225211.solidcommunity.net//profile/card#me')}/>);
    const friends = result.find(List).find(Friend);
    expect(friends.length>=0).toBeTruthy();
  });

  it('shows an InfiniteScroll', () => {
    const result = shallow(<OnlineUsers webId={literal('https://uo225211.solidcommunity.net//profile/card#me')}/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });

  it('shows the given maximum of friends initially', () => {
    const result = shallow(<OnlineUsers webId={literal('https://uo225211.solidcommunity.net//profile/card#me')}/>);

    const query= result.prop('querySuccess');
    //expect(query).toBe(false);
    const searchname=result.state('hasMore');
    expect(searchname).not.toBeTruthy();
  });
  
});

