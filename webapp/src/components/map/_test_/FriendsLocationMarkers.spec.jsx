import React from 'react';
import { render} from '@testing-library/react';
import FriendsLocationMarkers from '../FriendsLocationMarkers';
import { getFriendsLocations } from '../../../api/api';
import { MapContainer } from 'react-leaflet';
const literal = value => ({
    toString: () => value
  });

  test('renders learn react link', () => {
    const friends=[];
    getFriendsLocations('https://uo225211.solidcommunity.net/profile/card#me').then((result) => {
  
      if (friends.length !== result.locs.length) {
        result.locs.forEach((e) => {
          friends.push(e);
        })
      }
      })
    var result=render(<MapContainer><FriendsLocationMarkers webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} locs={friends}></FriendsLocationMarkers></MapContainer>);
    expect(result).toBeTruthy();
     
  });
