import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Friend from "./dialogFriendList"

import { getMeet } from "../../../../api/api";



const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);




class AttendancesDialog extends React.Component {

    constructor(props) {
        super();
        this.attendances = []
        this.meet=props.meet
        this.open = props.open;
        this.handleClose=props.handleClose
    }

    state = {
        meets:[]  //crea un array de amigos de 0 a el valor de showInitiall
      };


    showAttendantsList() {
        var promise = getMeet(this.meet._id);
    
        promise.then((result) => {

            this.setState({
                meets : result, 
            })
        });
    }

    render() {
        return (
            <div>

                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={this.open}
                >
                    <DialogTitle id="customized-dialog-title" >
                        Lista de asistentes
                       
                            <IconButton
                                aria-label="close"
                                onClick={()=>{this.handleClose()}}>
                                <CloseIcon />
                            </IconButton>
                            
                    </DialogTitle>
                    <DialogContent dividers>
                    {this.showAttendantsList()}
                    {this.state.meets.attendances!=undefined?this.state.meets.attendances.map((webId) => (
                        <Friend key={webId} webId={webId}  />)):null}

                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default AttendancesDialog