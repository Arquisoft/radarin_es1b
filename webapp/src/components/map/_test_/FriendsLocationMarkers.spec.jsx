import React from 'react';
import { render, screen } from '@testing-library/react';
import FriendsLocationMarkers from '../FriendsLocationMarkers';
const literal = value => ({
    toString: () => value
  });

  test('renders learn react link', () => {
    var result=render(<FriendsLocationMarkers webId={literal('https://uo225211.solidcommunity.net/profile/card#me')}/>);
    expect(result).toBeTruthy();
     
  });
