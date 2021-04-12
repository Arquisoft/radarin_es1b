import { Button } from '@material-ui/core';
import React from 'react';
import ReactNotifications from 'react-browser-notifications';

class Notifications extends React.Component {
    constructor() {
        super()
        this.showNotifications = this.showNotifications.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log("Notificacion creada");
    }

    render() {
        return (
            <div>
            <ReactNotifications
              onRef={ref => (this.n = ref)} // Required
              title="Radarin" // Required
              body="Hay alguien cerca tuyo!"
              icon="favicon.ico"
              onClick={event => this.handleClick(event)}
            />

            {this.showNotifications}
                
            </div>
            
            
        )
    }

    showNotifications() {
        if(this.n.supported()) this.n.show();
    }
    
    handleClick(event) {
        window.focus()
        this.n.close(event.target.tag);
    }
}

export default Notifications