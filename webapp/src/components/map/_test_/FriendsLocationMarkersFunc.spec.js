import React from 'react';
import { render, screen } from '@testing-library/react';
import FriendsLocationMarkersFunc from '../FriendsLocationMarkersFunc';
import { MapContainer } from 'react-leaflet';

const literal = value => ({
    toString: () => value
  });



  test('renders learn react link', () => {
    var result=render(<MapContainer><FriendsLocationMarkersFunc webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} /></MapContainer>);
    expect(result).toBeTruthy();
  });
