import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
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
            />

            {this.componentDidMount}
            <Button onClick={this.showNotifications}>
                notify me
            </Button>
            </div>
            
            
        )
    }

    componentDidMount() {
        this.interval = this.showNotifications();
      }

    showNotifications() {
        if(this.n.supported()) this.n.show();
    }
    
    handleClick(event) {
        window.focus()
        this.n.close(event.target.tag);
    }

    doNothing(){

    }
}

export default Notifications