import React from 'react';
import {shallow} from 'enzyme';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

import Friend from '../UserBanned';
import Image from "../../../profile/Image";

describe('Friend in friend list', function () {
  it('shows name and webId', () => {
    const result = shallow(<Friend fullName="John Doe"
                        webId="https://webid.example/#me"/>);
    const text = result.find(ListItemText);
    expect(text).toBeTruthy();
  });
                               
  it('button unban', () => {
    const result = shallow(<Friend fullName="John Doe"
                            webId="https://webid.example/#me"/>);
    const button=result.find(Button)
    expect(button).toBeTruthy();
  });
                               
  it('renders the profile image of the friend', () => {
    const result = shallow(<Friend fullName="John Doe"
                            imageSrc="https://image.example/me.png"
                             webId="https://webid.example/#me"/>);
    const image = result.find(Image);
    expect(image).toBeTruthy();
  });
});