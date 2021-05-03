import React from 'react';
import {render} from 'enzyme';
import ChangeStatus from '../ChangeStatusContainer';


test('ChangeStatus', () => {
  var result=render(<ChangeStatus webId="https://webid.example/#me" status={"online"}/>);
  expect(result).toBeTruthy();
});
