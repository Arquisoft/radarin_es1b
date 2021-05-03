import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getMeetsForUser, deleteMeets } from '../../api/api';


import MeetLocationMarkers from "./MeetLocationMarkers"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
    backgroundColor: '#e0e0e0'
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '80vh',
    overflowY: 'auto'
  }

});


function MeetLocationMarkersFunc(props) {
  const classes = useStyles();
  const [meets, setMeets] = useState([])
  const [update, setUpdate] = useState(true)


  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate(!update)
      fetchData()

    }, 3000);
    return () => clearInterval(interval);
  }, [meets, update]);

  async function fetchData() {
    getMeetsForUser(props.webId).then((result) => {

      if (meets.length !== result.length) {
        setMeets([])
        let meetsToDelete = []
        let fechaActual = Date.now()
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
  }




return (<div>
  <MeetLocationMarkers webId={props.webId} meets={meets}></MeetLocationMarkers>
</div>)
}

export default MeetLocationMarkersFunc
