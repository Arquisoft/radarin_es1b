import L from 'leaflet';
import friendPNG from './placeholder.png';

const iconPerson = new L.Icon({
    iconUrl: friendPNG,
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50),
})

export { iconPerson };