import L from 'leaflet';
import meetPNG from './ownMeeting.png';

const iconOwnMeet = new L.Icon({
    iconUrl: meetPNG,
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50),
})

export { iconOwnMeet };