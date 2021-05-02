import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetLocationMarkers from '../MeetLocationMarkers';
import { getMeetsForUser, deleteMeets } from '../../../api/api';
import { MapContainer } from 'react-leaflet';
const literal = value => ({
    toString: () => value
  });
const meets=[];
  getMeetsForUser('https://uo225211.solidcommunity.net/profile/card#me').then((result) => {

    if (meets.length !== result.length) {
      setMeets([])
      let meetsToDelete = []
      let fechaActual = Date.now()
      console.log("Update MeetsFunc")
      result.forEach((e) => {
        let meetDate = new Date(e.date)
        let diffTime = Math.abs(meetDate - fechaActual);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if(diffDays > 1){
          meetsToDelete.push(e._id)
        }else{
          setMeets(meets => [...meets, e]);
        }
      })
      if(meetsToDelete.length > 0)
        deleteMeets(meetsToDelete)
    }
    })




  test('renders learn react link', () => {
    var result=render(<MapContainer><MeetLocationMarkers webId={literal('https://uo225211.solidcommunity.net/profile/card#me')} meets={meets}/></MapContainer>);
    expect(result).toBeTruthy();
     
  });
