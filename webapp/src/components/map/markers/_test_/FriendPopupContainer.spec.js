import React from "react";
import { shallow} from 'enzyme';
import FriendPopupContainer from '../FriendPopupContainer';
import LoadingFriend from "../LoadingPopup";
import Friend from "../FriendPopup"
  
const profile =
{
  webId: 'https://uo225211.solidcommunity.net/profile/card#me',
  fullName:'bea'
}

describe('FriendContainer', () => {
  it('pending', () => {
    const result = shallow(<FriendPopupContainer {...profile}
       pending/>);
    expect(result.find(LoadingFriend)).toBeTruthy();
    expect(result).toContainEqual(<LoadingFriend webId={profile.webId}/>)
  });
    it('nop Pending', () => {

      const result = shallow(<FriendPopupContainer {...profile}
        />);
        expect(result.find(Friend)).toBeTruthy();
        
       
      
        });

});


