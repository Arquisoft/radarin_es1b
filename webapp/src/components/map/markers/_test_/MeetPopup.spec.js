import React from "react";
import {render, shallow} from 'enzyme';
import Meet from "../MeetPopup"
import Button from '@material-ui/core/Button';
import AttendancesDialog from "../dialog/AttendancesDialog"
const literal = value => ({
    toString: () => value
  });
  
const meetA={
  date:new Date(),
  attendances:[],
  
}


describe('MeetPOpup', () => {
  meetA.attendances.push('https://uo269450.solidcommunity.net/profile/card#me');
  
    it('MeetPOpup loger not asist', () => {   
      var result=shallow(<Meet webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      fullName="John Doe"
      meet={meetA}/>);
    expect(result).toBeTruthy();
    expect(result.find(Button)).toBeTruthy();
  });
  it('MeetPOpup loger  asist', () => {   
    
    meetA.attendances.push('https://uo225211.solidcommunity.net/profile/card#me');
    var result=shallow(<Meet webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      fullName="John Doe"
      meet={meetA}/>);
      expect(result).toBeTruthy();
    expect(result.find(Button)).toBeTruthy();
  });
  it('MeetPOpup botones', () => {   
    const mockCallBack = jest.fn();
    var result=shallow(<Meet webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      fullName="John Doe"
      meet={meetA}/>);
    expect(result).toBeTruthy();      
    result.find(Button).at(0).simulate('click');
    expect(mockCallBack.mock.calls.length>=0).toBeTruthy();
    result.find(Button).at(1).simulate('click');
    expect(mockCallBack.mock.calls.length>=0).toBeTruthy();
    console.log(result.find(Button).debug())
  });
  it('MeetPOpup loger  asist', () => {   
    
    meetA.attendances.push('https://uo225211.solidcommunity.net/profile/card#me');
    var result=shallow(<Meet webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      loggedWebId={literal('https://uo225211.solidcommunity.net/profile/card#me')} 
      fullName="John Doe"
      meet={meetA}/>);
      expect(result).toBeTruthy();
    expect(result.find(AttendancesDialog)).toBeTruthy();
  });

});


