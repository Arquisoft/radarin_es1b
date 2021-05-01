import React from "react";
import { shallow} from 'enzyme';
import MeetContainer from '../MeetPopupContainer';
import Meet from "../MeetPopupManager";

const literal = value => ({
    toString: () => value
  });
  
const meetA={
  date:new Date(),
  attendances:[],
  cretaor: "https://uo225211.solidcommunity.net/profile/card#me"
}

meetA.attendances.push('https://uo269450.solidcommunity.net/profile/card#me');
describe('MeetContainer', () => {
  it('pending', () => {
    const result = shallow(<Meet
      meet={meetA} loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);
    expect(result.find(MeetContainer)).toBeTruthy();
  });
});

