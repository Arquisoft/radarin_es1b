import React from 'react';
import {shallow} from 'enzyme';

import {
  LoggedIn
} from '@solid/react';

import LoginBadge from '../LoginBadge';
import LoginContainer, {AuthButtonComponent} from '../Container';
import Button from "@material-ui/core/Button";

describe('Login container', () => {
  it('shows badge if the user is logged in', () => {
    const result = shallow(<LoginContainer
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"
    />);
    const loggedIn = result.find(LoggedIn);
    expect(loggedIn).toBeTruthy(); 
    
  });

  it('shows the auth button', () => {
    const result = shallow(<LoginContainer
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"
    />);
    const button=result.find(Button);
    expect(button).toBeTruthy();
  });
});
