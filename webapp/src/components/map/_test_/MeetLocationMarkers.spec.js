import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetLocationMarkers from '../MeetLocationMarkers';
const literal = value => ({
    toString: () => value
  });

  test('renders learn react link', () => {
    var result=render(<MeetLocationMarkers webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);
    expect(result).toBeTruthy();
     
  });
