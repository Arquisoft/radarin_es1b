import L from 'leaflet';
import interestPointPNG from './interest-point.png';

const iconInterestPoint = new L.Icon({
    iconUrl: interestPointPNG,
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50),
})

export { iconInterestPoint };