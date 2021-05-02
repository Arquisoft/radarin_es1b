import React from "react";
import { shallow} from 'enzyme';
import Image from "../../../profile/Image";
import LoadingFriend from "../LoadingPopup";
import Friend from "../FriendPopup"
  
const profile =
{
  webId: 'https://uo225211.solidcommunity.net/profile/card#me',
  fullName:'bea'
}

describe('FriendPopUp', () => {
  it('', () => {
    const result = shallow(<Friend {...profile}
       />);
    expect(result.find(Image)).toBeTruthy();
  });
    

});


