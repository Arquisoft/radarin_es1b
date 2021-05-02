import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function MeetCreationDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [name, setName] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(Date.now());

  const handleClose = () => {
    setOpen(false);
  };


  const handleCancel=()=>{
    setOpen(false);
    props.handleCancel();
  }

  const handleNameChange = (name) => {

    setName(name.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInput = () => {
    let check = true;

    if (name.trim().length == 0) {
      check = false;
      toast.error("Introduce un nombre para el Meet.", { position: "top-center" });
    }

    let now = Date.now();
    if (selectedDate < now) {
      check = false;
      toast.error("Introduce una fecha y hora posteriores a la actual.", { position: "top-center" });
    }



    if (check) {
      
      props.handleCreate(name,selectedDate);
      handleClose()
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear un nuevo Meet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escoge un nombre y fecha para tu nuevo Meet.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            required
            value={name}
            onChange={handleNameChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                required
                margin="normal"
                id="date-picker-dialog"
                label="Fecha"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                required
                ampm={false}
                margin="normal"
                id="time-picker"
                label="Hora"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleInput} color="primary">
            Seleccionar ubicación
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}