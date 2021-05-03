import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetLocationMarkersFunc from '../MeetLocationMarkersFunc';
import { MapContainer } from 'react-leaflet';


const literal = value => ({
  toString: () => value
});

  test('renders learn react link', () => {
    var result=render(<MapContainer><MeetLocationMarkersFunc webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} /></MapContainer>);
    expect(result).toBeTruthy();
  });
