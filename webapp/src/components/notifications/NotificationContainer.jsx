import React from "react";


function NotificationContainer(props) {
    const amigo = props.notif;

    if(amigo.length === 0){return <li>No tienes notificaciones nuevas.</li>}
    return amigo.map(function(not,index){
        return (
        <li key={index} className="notification-user-list-item">
            {not}
        </li>
        )
    });
}

export default NotificationContainer;