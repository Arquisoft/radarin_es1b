import React from 'react';
import {shallow} from 'enzyme';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

import LoginBadge from '../LoginBadge';
import Image from '../../profile/Image';

describe('User is logged in', () => {
  describe('component', () => {

    describe('without image and webid', function () {
      let result;
      beforeEach(() => {
        result = shallow(<LoginBadge fullName="John Doe"/>);
      });

      it('shows that the user is logged in', () => {
        const chip = result.find(Chip);
        expect(chip).toBeTruthy();
      });

      it('should render dummy tooltip', () => {
        const tooltip = result.find(Tooltip);
        expect(tooltip).toBeTruthy();
      });

    });

    describe('with image', function () {
      let result;
      beforeEach(() => {
        result = shallow(<LoginBadge fullName="John Doe"
                                   imageSrc="https://image.example/me.png"/>);
      });

      it('shows that the user is logged in', () => {
        const chip = result.find(Chip);
        expect(chip).toBeTruthy();
      });
    });

    describe('with webId', function () {
      let result;
      beforeEach(() => {
        result = shallow(<LoginBadge webId="https://webid.example/#me" />);
      });

      it('should link to profile page', () => {
        const chip = result.find(Chip);
        expect(chip).toBeTruthy();
      });

      it('should have webId as tooltip', () => {
        const tooltip = result.find(Tooltip);
        expect(tooltip).toBeTruthy();
      });

      it('shows that the user is logged in', () => {
        const chip = result.find(Chip);
        expect(chip).toBeTruthy();
      });

    });
  });
});
