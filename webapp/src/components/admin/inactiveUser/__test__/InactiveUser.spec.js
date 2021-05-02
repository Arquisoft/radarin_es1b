import React from 'react';
import {shallow} from 'enzyme';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import Friend from '../InactiveUser';
import Image from "../../../profile/Image";

describe('InactiveUser', function () {
  it('ListItemText', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"/>);
    const text = result.find(ListItemText);
    expect(text).toBeTruthy();
  });

 

  it('image', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   imageSrc="https://image.example/me.png"
                                   webId="https://webid.example/#me"/>);
    const image = result.find(Image);
    expect(image).toBeTruthy();
  });

});