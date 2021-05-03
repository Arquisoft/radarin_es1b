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

import Geocode from "react-geocode";

import { addMeet } from "../../../../api/api";

toast.configure();

export default function MeetCreationDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [name, setName] = React.useState("");
  //const [create, setCreate]= React.useState(props.create)
  const [selectedDate, setSelectedDate] = React.useState(Date.now());

  const handleClose = () => {
    setOpen(false);
    props.create(false)
  };


  const handleCancel = () => {
    setOpen(false);
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

      saveMeet(props.meet)
      handleClose()
    }
  }

  function saveMeet(meet) {

    var latlng = meet.latlng;
    var date = selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate();
    var time = selectedDate.getHours() + ":" + selectedDate.getMinutes() + ":" + selectedDate.getSeconds();

    Geocode.fromLatLng(latlng.lat, latlng.lng).then(
      (response) => {
        let state, country;
        for (let i = 0; i < response.results[0].address_components.length; i++) {
          for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
            switch (response.results[0].address_components[i].types[j]) {
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
              default:
                break;
            }
          }
        }
        addMeet(
          meet.creator, latlng,
          state, country, date, time, name);
      },
      (error) => {
        console.log("No se ha podido guardar la localización")
        console.error(error);
      }
    );
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
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleInput} color="primary">
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}