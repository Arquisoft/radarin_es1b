import React from 'react';
import {shallow} from 'enzyme';
import  BottonNav from './BottomNav';
import MapView from './map/MapView';
import Friends from './friends/Friends';
import Start from '../routes/StartPage';

const literal = value => ({
  toString: () => value
});

describe('BottonNav ', function () {
  it('MapView', () => {
    const result = shallow(<BottonNav webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const map = result.find(MapView);
    expect(map).toBeTruthy();
  });

  it('Friends', () => {
    const result = shallow(<BottonNav webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const friends = result.find(Friends);
    expect(friends).toBeTruthy();
  });

  it('Start', () => {
    const result = shallow(<BottonNav webId={literal('https://asw2021es1b.solidcommunity.net/profile/card#me')}/>);
    const map = result.find(Start);
    expect(Start).toBeTruthy();
  });
  
  
  
});

