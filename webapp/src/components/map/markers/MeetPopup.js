import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import styles from './Friend.module.css';

import { toProfile } from '../../../routing';
import Image from "../../profile/Image";





//Meets
const Meet = ({ webId, fullName, imageSrc, meet }) =>
    <ListItem className={styles.friend} button component={Link} to={toProfile(webId)} clickable>

        <div>
            <strong>Meet Creado por</strong>

            <ListItemIcon>
                <Image className={styles.avatar} fullName={fullName} src={imageSrc} />
            </ListItemIcon>
            <div style={{ marginLeft: 10 }}>
                <ListItemText
                    primary={fullName}
                />
            </div>
        </div>
        <ListItemText
            primary={"Fecha: " + meet.date}
        />
        <ListItemText
            primary={"hora: " + meet.time}
        />

    </ListItem>

export default Meet