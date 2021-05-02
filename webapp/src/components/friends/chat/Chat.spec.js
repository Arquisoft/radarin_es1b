import React from 'react';
import {shallow} from 'enzyme';
import Chat from'./Chat';
import ChatList from'./ChatsList';
import Messages from'./Messages';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Chat', () => {
        let result;
        beforeEach(() => {
          result = shallow(<Chat webId="https://webid.example/#me"/>);
        });
  
        it('ChatList', () => {
            const chatL = result.find(ChatList);
            expect(chatL).toBeTruthy();
        });
  
        it('Messages', () => {
          const mese = result.find(Messages);
          expect(mese).toBeTruthy();
        });
  
      
  
    });

    describe('MeetLocationMarkers ', function () {
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
        act(() => {    ReactDOM.render(<Chat webId="https://webid.example/#me"/>, container)});
    
        expect(container).toBeTruthy();
      });
    
    });