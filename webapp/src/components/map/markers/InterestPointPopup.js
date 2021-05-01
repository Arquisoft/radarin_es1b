import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import styles from './Friend.module.css';

import {toProfile} from '../../../routing';
import Image from "../../profile/Image";

class InterestPointPopup extends React.Component {

    constructor({ webId, fullName, imageSrc, label, loggedWebId }) {
        super();
        this.webId = webId;
        this.fullName = fullName;
        this.imageSrc = imageSrc;
        this.label = label;
        this.loggedWebId = loggedWebId;
    }

    render() {
        return (
            <div>
                <strong>{this.label}</strong>
                <p>{this.fullName}</p>
            </div>
        )
    }
}

export default InterestPointPopup;