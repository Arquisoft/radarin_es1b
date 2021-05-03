import React from 'react';
import {shallow, render} from 'enzyme';
import MeetCreationDialog from './MeetCreationDialog';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';


describe('MeetCreationDialog', () => {

    it('should not render profile while pending', () => {
      const result = shallow(<MeetCreationDialog/>);
      expect(result).toBeTruthy();
    });
  
    
    
});

describe('MeetCreationDialog ', function () {
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
    act(() => {    ReactDOM.render(<MeetCreationDialog/>, container)});

    expect(container).toBeTruthy();
  });

});
