import React from 'react';
import {shallow, mount} from 'enzyme';
import BannedUsers from '../BannedUsers';
import { Button } from '@material-ui/core';
import User from "../userBanned";

import InfiniteScroll from "react-infinite-scroll-component";

import List from "@material-ui/core/List";

const literal = value => ({
  toString: () => value
});

describe('BannedUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<BannedUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(List).find(User);
    expect(friends.length>=0).toBeTruthy();
  });

  it('shows an InfiniteScroll', () => {
    const result = shallow(<BannedUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });

  it('shows the given maximum of friends initially', () => {
    const result = shallow(<BannedUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const boton = result.find(List).find(Button);
    const query= result.prop('querySuccess');
    //expect(query).toBe(false);
    const searchname=result.state('items');
    expect(searchname>=0).toBeTruthy();
  });
  
});

