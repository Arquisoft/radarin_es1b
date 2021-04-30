import React from 'react';
import {render, shallow} from 'enzyme';

import Profile from '../Profile';
import Image from '../Image';
import Typography from "@material-ui/core/Typography";
import FriendList from '../../friendList';
import ButtonFriendship from '../ButtonFriendship';

test('renders learn react link', () => {
  var result=render(<Profile
    webId="https://webid.example/#me"
    fullName="John Doe"
    imageSrc="https://img.example/me.png"
    loggedUser="https://webid.example/#loger"
    loggedUser="https://img.example/me.png"

/>);
  expect(result).toBeTruthy();
});
