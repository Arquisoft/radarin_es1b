import React from 'react';
import {shallow} from 'enzyme';

import FriendContainer from '../Container';

import Friend from '../UserBanned';
import LoadingFriend from "../LoadingFriend";

const literal = value => ({
  toString: () => value
});

describe('friend container', function () {
  it('renders a loading friend component while pending', () => {
    const result = shallow(<FriendContainer webId={literal('https://webid.example/#me')} pending/>);
    expect(result).toContainEqual(<LoadingFriend webId="https://webid.example/#me"/>);
  });
  it('renders a friend', () => {
    const result = shallow(<FriendContainer
        webId={literal('https://webid.example/#me')}
        fullName={literal('John Doe')}
        imageSrc={literal('https://image.example/me.png')}
    />);
    expect(result).toContainEqual(<Friend
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"
    />);
  });
});