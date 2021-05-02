import React from 'react';
import {shallow} from 'enzyme';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import Friend from '../Friend';
import Image from "../../../profile/Image";
import { Button } from '@material-ui/core';

describe('Friend in friend list', function () {
  it('shows name and webId', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"/>);
    const text = result.find(ListItemText);
    expect(text).toBeTruthy();
  });

  it('links to profile', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"/>);
    const link = result.find(Link);
    expect(link).toBeTruthy();
  });

  it('renders the profile image of the friend', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   imageSrc="https://image.example/me.png"
                                   webId="https://webid.example/#me"/>);
    const image = result.find(Image);
    expect(image).toBeTruthy();
  });
  
  it('button Aceptar!', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"
                                   loggedUser="https://webid.example/#logger"/>);
    const button=result.find(Button)
    button.simulate('click')
    expect(button).toBeTruthy();
  });
  
  it('button no Aceptar!', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"
                                   loggedUser="https://webid.example/#me"/>);
    const button=result.find(Button)
    expect(button).toEqual({});
  });

});