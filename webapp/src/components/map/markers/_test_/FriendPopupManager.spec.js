import React from "react";
import { shallow} from 'enzyme';
import Friend from '../FriendPopupManager';
import FriendContainer from '../FriendPopupContainer'

const literal = value => ({
    toString: () => value
  });

describe('FriendPopup Manager', () => {
  it('pending', () => {
    const result = shallow(<Friend
      webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);
    expect(result.find(FriendContainer)).toBeTruthy();
  });
});

