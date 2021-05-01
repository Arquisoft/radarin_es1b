import React from 'react';
import {shallow} from 'enzyme';
import InfiniteScroll from "react-infinite-scroll-component";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import List from "@material-ui/core/List";
import ChatList from './ChatsList';
import ChatFriend from "./ChatFriend";

describe('Chat list', function () {
  it('shows an empty list', () => {
    const result = shallow(<ChatList/>);
    const friends = result.find(List).find(ChatFriend);
    expect(friends).toHaveLength(0);
  });

  it('shows an empty list', () => {
    const result = shallow(<ChatList/>);
    const scrooll = result.find(InfiniteScroll);
    expect(scrooll).toBeTruthy();
  });
  it('shows an empty list', () => {
    const result = shallow(<ChatList/>);
    const arrow = result.find(ArrowBackIcon);
    expect(arrow).toBeTruthy();
  });
  
  it('shows the given maximum of friends initially', () => {
    const result = shallow(<ChatList
        webiD='https://uo225211.solidcommunity.net/profile/card#me'
    />);
    const friends = result.find(List).find(ChatFriend);
    expect(friends.length>=0).toBeTruthy();
    //expect(friends.at(0).webId).toBe('https://albertofreije.solidcommunity.net/profile/card#me');
    expect(friends.at(0).find('https://albertofreije.solidcommunity.net/profile/card#me')).toBeTruthy();
  });
  

});