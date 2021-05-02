import React from 'react';
import {shallow} from 'enzyme';
import AttendancesDialog from './AttendancesDialog';
import Friend from "./dialogFriendList"
import Dialog from "@material-ui/core/Dialog";

const meetA={
  date:new Date(),
  attendances:[],
  
}
meetA.attendances.push('https://uo269450.solidcommunity.net/profile/card#me');
describe('AttendancesDialog', function () {
  it('basic', () => {
    const result = shallow(<AttendancesDialog meet={meetA} open={true} handleClose={ () => {this.setState({open: false,
      }) }} />);
    const friends = result.find(Dialog).find(Friend);
    expect(friends).toBeTruthy();
  });

});