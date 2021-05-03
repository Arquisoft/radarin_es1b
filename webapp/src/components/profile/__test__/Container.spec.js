import React from 'react';
import {shallow, render} from 'enzyme';
import ProfileContainer from '../Container';
import Profile from '../Profile';

const literal = value => ({
  toString: () => value
});

describe('Profile container', () => {

  it('should not render profile while pending', () => {
    const result = shallow(<ProfileContainer pending/>);
    expect(result.find(Profile)).toEqual({});
  });

  it('should render the loaded profile', () => {
    const result = render(<ProfileContainer
        webId="https://uo225211.solidcommunity.net/"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"        
        loggedUser="https://uo225211.solidcommunity.net/"
    />);
    const profiel=result.find(<Profile
      webId="https://uo225211.solidcommunity.net/"
      fullName="John Doe"
      imageSrc="https://image.example/me.png"        
      loggedUser="https://webid.example/#me"
  />)
    expect(profiel).toBeTruthy();
  });

  it('should render the loaded profile without data', () => {
    const result = shallow(<ProfileContainer
        webId="https://webid.example/#me"
    />);
    const profiel=result.find(<Profile
      webId="https://webid.example/#me"
      fullName={undefined}
      imageSrc={undefined}
  />);
    expect(profiel).toBeTruthy();
  });

  it('should not update when pending', () => {
    const result = shallow(<ProfileContainer
        webId="https://webid.example/#me"
        fullName={literal("John Doe")}
        imageSrc={literal("https://image.example/me.png")}
    />);
    result.setProps({
      pending: true,
      fullName:  undefined,
      imageSrc: undefined
    });
    const profiel=result.find(<Profile
      webId="https://webid.example/#me"
      fullName="John Doe"
      imageSrc="https://image.example/me.png"
  />);
    expect(profiel).toBeTruthy();
  });

  
});
