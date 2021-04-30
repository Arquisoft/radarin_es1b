import React from 'react';
import {shallow, mount} from 'enzyme';

import NewRequest from '../NewRequest';
import { Button } from '@material-ui/core';
import Friend from "../../friendList/friend";


const literal = value => ({
  toString: () => value
});

describe('NewRequest', function () {
    
    it('Friend', () => {
        const result = shallow(<NewRequest webId={literal('https://uo225211.solidcommunity.net/')}/>);
        const chat=result.find(Friend);
        expect(chat).toBeTruthy();
      });

      

});

