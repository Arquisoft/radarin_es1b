import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import styles from './Friend.module.css';

import { toProfile } from '../../../routing';
import Image from "../../profile/Image";

import { assist, removeAttendance } from "../../../api/api"

import Button from '@material-ui/core/Button';




function checkInMeet(meet, loggedWebId) {

    if (!meet.attendances.includes(loggedWebId)) {
        assist(meet._id, loggedWebId)
    } else {
        removeAttendance(meet._id, loggedWebId)

    }

}


function checkMeetText(meet, loggedWebId) {
    if (meet.attendances.includes(loggedWebId)) {
        meet.attendances.push(loggedWebId)
        return "No asistir"
    } else {
        const index = meet.attendances.indexOf(loggedWebId);
        if (index > -1) {
            meet.attendances.splice(index, 1);
        }
        return "Asistir"
    }

}



//Meets
const Meet = ({ webId, fullName, imageSrc, meet, loggedWebId }) =>(

    <div>
        <strong>Meet Creado por</strong>
        <ListItem className={styles.friend} button component={Link} to={toProfile(webId)} clickable>
            <ListItemIcon>
                <Image className={styles.avatar} fullName={fullName} src={imageSrc} />
            </ListItemIcon>
            <div style={{ marginLeft: 10 }}>
                <ListItemText
                    primary={fullName}
                />
            </div>

        </ListItem>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '2em' }}>
                <ListItemText
                    primary={"Fecha: " + meet.date}
                />
                <ListItemText
                    primary={"Hora: " + meet.time}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ marginRight: '1.5em', padding: '0.25em' }}>
                    <Button color="primary" variant="contained" onClick={() => { checkInMeet(meet, loggedWebId).bind(meet) }}>  {checkMeetText(meet, loggedWebId)}   </Button>
                </div>
                <div style={{ padding: '0.25em' }}>
                    <Button color="primary" variant="contained">Lista de Usuarios</Button>
                </div>
            </div>
        </div>
    </div>
)



export default Meet