import {themeInput, ideaInput, buttonSend} from './verification.js';
import {LAT_START, LNG_START, VIEW_ZOOM, map, marker} from './map.js';
import {previewImage} from './image.js';

const DEFAULT_IMAGE = './img/Vector.svg';
const inputsForm = document.querySelectorAll('input');

function resetForm (){
    inputsForm.forEach((item) => {
        item.checked = false;
    });
    themeInput.value = '';
    ideaInput.value = '';
    buttonSend.setAttribute('type', 'button');
    buttonSend.classList.remove('active');  
    previewImage.src = DEFAULT_IMAGE;
    marker.setLatLng({
        lat: LAT_START,
        lng: LNG_START,
    });
    map.setView({
        lat: LAT_START,
        lng: LNG_START,
        }, VIEW_ZOOM);
};

export {resetForm, DEFAULT_IMAGE};