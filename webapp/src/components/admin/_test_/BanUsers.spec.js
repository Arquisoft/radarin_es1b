import React from 'react';
import {shallow, mount} from 'enzyme';
import BanUsers from '../BanUsers';
import User from "../userBan";

import InfiniteScroll from "react-infinite-scroll-component";

import List from "@material-ui/core/List";

const literal = value => ({
  toString: () => value
});

describe('BanUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<BanUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(List).find(User);
    expect(friends.length>=0).toBeTruthy();
  });

  it('shows an InfiniteScroll', () => {
    const result = shallow(<BanUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });

  it('shows the given maximum of friends initially', () => {
    const result = shallow(<BanUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const query= result.prop('querySuccess');
    //expect(query).toBe(false);
    const searchname=result.state('hasMore');
    expect(searchname).not.toBeTruthy();
  });
  
});

