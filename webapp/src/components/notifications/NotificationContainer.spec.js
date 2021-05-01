import React from 'react';
import {shallow, render} from 'enzyme';

import NotificationContainer from './NotificationContainer'
import FriendList from '../FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

const literal = value => ({
  toString: () => value
});

describe('Friend list container', function () {
  
  const muensaje="No nearby user";
  const amigo=[];
  amigo.push(muensaje);
  it('indicates loading', () => {
    const result = shallow( <NotificationContainer notif={amigo} />);
    expect(result.find('li')).toBeTruthy();;
  });

});