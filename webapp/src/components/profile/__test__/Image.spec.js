import React from 'react';
import {shallow} from 'enzyme';

import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

import Image from '../Image';

describe('Image', () => {

  describe('with src URI', function () {
    let result;
    beforeEach(() => {
      result = shallow(<Image name="John Doe" src="http://image.example/me.png" className="custom"/>);
    });

    it('should render a avatar', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toBeTruthy();
    });

    it('overrides className with passed value', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toBeTruthy();
    });
  });

  describe('without src URI', function () {
    let result;
    beforeEach(() => {
      result = shallow(<Image name="John Doe" className="custom"/>);
    });

    it('should render a default face icon', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toBeTruthy();
      expect(avatar.props().alt).toBe('John Doe');
      expect(avatar).not.toHaveProperty('src');
      expect(avatar.find(FaceIcon)).toBeTruthy();
    });

    it('overrides className with passed value', () => {
      let avatar = result.find(Avatar);
      expect(avatar.props().className).toBe( 'custom');
    });
  });
});

