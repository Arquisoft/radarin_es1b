import React from "react";


function NotificationContainer(props) {
    const amigo = props.notif;

    if (amigo.length === 0) { return <div class="notification-list">No tienes notificaciones nuevas.</div> }
    return amigo.map(function (not, index) {
        return (
            <div class="notification-list" key={index}>
                {not}
            </div>
        )
    });
}

export default NotificationContainer;