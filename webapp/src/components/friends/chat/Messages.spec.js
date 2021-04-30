import React from 'react';
import {shallow} from 'enzyme';

import Messages from'./Messages';

import SingleMsg from'./SingleMsg';

describe('Chat', () => {
        let result;
        beforeEach(() => {
          result = shallow(<Messages webId="https://webid.example/#me"/>);
        });
  
        it('SingleMsg', () => {
            const singe = result.find(SingleMsg);
            expect(singe).toBeTruthy();
        });

      
  
    });