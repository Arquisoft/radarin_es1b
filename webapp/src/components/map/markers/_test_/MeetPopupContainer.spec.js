import React from "react";
import { shallow} from 'enzyme';
import MeetContainer from '../MeetPopupContainer';
import LoadingFriend from "../LoadingPopup";
import Meet from "../MeetPopup"
const literal = value => ({
    toString: () => value
  });
  
const meetA={
  date:new Date(),
  attendances:[],
  
}

meetA.attendances.push('https://uo269450.solidcommunity.net/profile/card#me');
describe('MeetContainer', () => {
  it('pending', () => {
    const result = shallow(<MeetContainer
      webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}
      meet={meetA} loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')} pending/>);
    expect(result.find(LoadingFriend)).toBeTruthy();
  });
    it('nop Pending', () => {

        const result = shallow(<MeetContainer
          webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}
          meet={meetA} loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);
        expect(result.find(Meet)).toBeTruthy();
        
       
      
        });

});


