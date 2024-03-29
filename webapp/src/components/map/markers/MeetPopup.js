import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import styles from './Friend.module.css';

import { toProfile } from '../../../routing';
import Image from "../../profile/Image";

import { assist, getMeet, removeAttendance } from "../../../api/api"

import Button from '@material-ui/core/Button';

import AttendancesDialog from "./dialog/AttendancesDialog"

class MeetPopup extends React.Component {

    state = {
        open: false,
        toShow: "Asistir"
    };

    constructor({ webId, fullName, imageSrc, meet, loggedWebId }) {
        super();
        this.webId = webId;
        this.fullName = fullName;
        this.imageSrc = imageSrc;
        this.meet = meet;
        this.loggedWebId = loggedWebId;
    }

    

    checkInMeet() {

        var promise = getMeet(this.meet._id)

        promise.then((result)=>{
            this.meet=result

            if (!this.meet.attendances.includes(this.loggedWebId)) {
                assist(this.meet._id, this.loggedWebId)
                this.meet.attendances.push(this.loggedWebId)
                this.setState({
                    toShow: "No asistir",
                })
            } else {
                removeAttendance(this.meet._id, this.loggedWebId)
                const index = this.meet.attendances.indexOf(this.loggedWebId);
                if (index > -1) {
                    this.meet.attendances.splice(index, 1);
                }
                this.setState({
                    toShow: "Asistir",
                })
            }

        })

        

    }


    componentDidMount(){
        this.checkMeetText()
    }


    checkMeetText() {
        if (this.meet.attendances.includes(this.loggedWebId)) {
            this.setState({
                toShow: "No Asistir",
            })
        } else {
            this.setState({
                toShow: "Asistir",
            })
        }

    }

    showAttendantsList() {
        this.setState({
            open: true
        })
    }



    displayDialog() {
        this.toShow = false;
        return (<AttendancesDialog meet={this.meet} open={this.state.open} handleClose={this.handleClose} />)
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        })
    };

    handleClose = () => {
        this.setState({
            open: false,
        })
    };



    render() {
        return (
            <div>
                {this.state.open ? this.displayDialog() : null}
                <ListItemText
                            primary={this.meet.name}
                        />
                <strong>Meet Creado por</strong>
                <ListItem className={styles.friend} button component={Link} to={toProfile(this.webId)} clickable>
                    <ListItemIcon>
                        <Image className={styles.avatar} fullName={this.fullName} src={this.imageSrc} />
                    </ListItemIcon>
                    <div style={{ marginLeft: 10 }}>
                        <ListItemText
                            primary={this.fullName}
                        />
                    </div>

                </ListItem>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '2em' }}>
                        <ListItemText
                            primary={"Fecha: " + this.meet.date}
                        />
                        <ListItemText
                            primary={"Hora: " + this.meet.time}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ marginRight: '1.5em', padding: '0.25em' }}>
                            <Button color="primary" variant="contained" onClick={() => { this.checkInMeet() }}>  {this.state.toShow} </Button>
                        </div>
                        <div style={{ padding: '0.25em' }}>
                            <Button color="primary" variant="contained" onClick={()=>{this.showAttendantsList() }}>Asistentes</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MeetPopup