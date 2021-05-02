import React from 'react';
import {shallow} from 'enzyme';

import InfiniteScroll from 'react-infinite-scroll-component';
import Messages from'./Messages';

import SingleMsg from'./SingleMsg';

import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

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

    describe('Messages ', function () {
      let container;
    
      beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
      });
      
      afterEach(() => {
        document.body.removeChild(container);
        container = null;
      });
      
      it('can render and update a counter', () => {
        // Prueba la primer renderización y componentDidMount
        act(() => {    ReactDOM.render(<Messages webId="https://webid.example/#me"/>, container)});
    
        expect(container).toBeTruthy();
      });
    
    });