import React from "react";
import {render, shallow} from 'enzyme';
import Meet from "../MeetPopup"
import Button from '@material-ui/core/Button';
const literal = value => ({
    toString: () => value
  });
  
const meetA={
  date:new Date(),
  attendances:[],
  
}

meetA.attendances.push('https://uo269450.solidcommunity.net/profile/card#me');
describe('MeetPOpup', () => {
    it('MeetPOpup', () => {
      var result=shallow(<Meet webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      fullName="John Doe"
      meet={meetA}/>
    );
    expect(result).toBeTruthy();
    expect(result.find(Button)).toBeTruthy();
  });
});


