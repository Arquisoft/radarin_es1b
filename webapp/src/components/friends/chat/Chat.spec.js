import React from 'react';
import {shallow} from 'enzyme';
import Chat from'./Chat';
import ChatList from'./ChatsList';
import Messages from'./Messages';
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