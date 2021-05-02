import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import SingleMsg from'./SingleMsg';



      let container;
      var index=0;
      var msg={
        time:  new Date()
      };
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
        act(() => {    ReactDOM.render(<SingleMsg webId="https://webid.example/#me" msg={msg} index={index}/>, container)});
    
        expect(container).toBeTruthy();
      });
    
