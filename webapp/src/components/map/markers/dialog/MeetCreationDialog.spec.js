import React from 'react';
import {shallow, render} from 'enzyme';
import MeetCreationDialog from './MeetCreationDialog';


describe('MeetCreationDialog', () => {

    it('should not render profile while pending', () => {
      const result = shallow(<MeetCreationDialog/>);
      expect(result).toBeTruthy();
    });
  
    
    
});
