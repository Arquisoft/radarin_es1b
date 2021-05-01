import React from 'react';
import {shallow} from 'enzyme';

import InfiniteScroll from 'react-infinite-scroll-component';
import Messages from'./Messages';

import SingleMsg from'./SingleMsg';
import { ExpansionPanelActions } from '@material-ui/core';

describe('Chat', () => {
        let result;
        beforeEach(() => {
          result = shallow(<Messages webId="https://webid.example/#me"/>);
        });
  
        it('SingleMsg', () => {
            const singe = result.find(SingleMsg);
            expect(singe).toBeTruthy();
        });
        it('SingleMsg', () => {
          const singe = result.find(SingleMsg);
          expect(singe).toBeTruthy();
      });
      
      it('shows an empty list', () => {
        const scrooll = result.find(InfiniteScroll);
        expect(scrooll).toBeTruthy();
      });
    });