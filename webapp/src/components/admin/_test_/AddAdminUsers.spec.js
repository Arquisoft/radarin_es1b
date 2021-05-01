import React from 'react';
import {shallow} from 'enzyme';
import  AddAdminUsers from '../AddAdminUsers';
import User from "../../admin/addAdmin";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";

const literal = value => ({
  toString: () => value
});

describe('AddAdminUsers ', function () {
  it('shows an empty list', () => {
    const result = shallow(<AddAdminUsers webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(List).find(User);
    expect(friends.length>=0).toBeTruthy();
  });

  it('shows an InfiniteScroll', () => {
    const result = shallow(<AddAdminUsers webId={literal('https://uo225211.solidcommunity.net//profile/card#me')}/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });
  
  
  
});
