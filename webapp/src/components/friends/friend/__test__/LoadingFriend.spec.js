import React from 'react';
import {shallow} from 'enzyme';
import LoadingFriend from "../LoadingFriend";
import CircularProgress from "@material-ui/core/CircularProgress";

const literal = value => ({
    toString: () => value
  });
  
  describe('friend container', function () {
    it('renders a loading friend component while pending', () => {
        const result = shallow(<LoadingFriend webId="https://webid.example/#me"/>);
        expect(result.find(CircularProgress)).toContainEqual(<CircularProgress/>);
    });
});
