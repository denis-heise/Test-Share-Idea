const LAT_START = 51.7092;
const LNG_START = 36.15622;
const VIEW_ZOOM = 15;
const NUMBER_AFTER_POINT = 5;
const TITLE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const buttonLocation = document.querySelector('#label-location');
const blockMap = document.querySelector('#map');
const imageCloseMap = document.querySelector('.map-close');
let newCoordinates;

const map = L.map('map')
    .setView({
    lat: LAT_START,
    lng: LNG_START,
    }, VIEW_ZOOM);

L.tileLayer(
    TITLE_LAYER,
    {
    attribution: ATTRIBUTION,
    },
).addTo(map);

const marker = L.marker(
    {
        lat: LAT_START,
        lng: LNG_START,
    },
    {
        draggable: true,
    }
);
    marker.addTo(map);

marker.addEventListener('moveend', (evt) => {
    const addressMarker = evt.target.getLatLng();
    newCoordinates = `${addressMarker.lat.toFixed(NUMBER_AFTER_POINT)}, ${addressMarker.lng.toFixed(NUMBER_AFTER_POINT)}`;
});

buttonLocation.addEventListener('click', function(){
    blockMap.style.opacity = 1;
    blockMap.style.zIndex = 10;
    imageCloseMap.style.opacity = 1;
    imageCloseMap.style.zIndex = 10;
});
imageCloseMap.addEventListener('click', function(){
    blockMap.style.opacity = 0;
    blockMap.style.zIndex = -10;
    imageCloseMap.style.opacity = 0;
    imageCloseMap.style.zIndex = -10;
});

export {LAT_START, LNG_START, VIEW_ZOOM, map, marker, newCoordinates};