import {newCoordinates} from './map.js';
import {previewImage, file} from './image.js';
import {sendForm} from './send.js';
import {DEFAULT_IMAGE} from './reset.js';

const blockCitizen = document.querySelector('.citizen');
const blockAge = document.querySelector('.age');
const blockTell = document.querySelector('.tell');
const blockIdea = document.querySelector('.container-idea__text');
const buttonSend = document.querySelector('.button-send');
const ideaConsent = document.querySelector('.container-idea__consent');
const themeInput = blockIdea.querySelector('input');
const ideaInput = blockIdea.querySelector('textarea');
let inputsBlock;

function getCheckedRadio (block){
    return inputsBlock = block.querySelector('input:checked');
};

ideaConsent.addEventListener('click', function() {  
    if(getCheckedRadio(ideaConsent) !== undefined && getCheckedRadio(ideaConsent) !== null){
        buttonSend.classList.toggle('active');  
        if (buttonSend.getAttribute('type') === 'submit'){
            buttonSend.setAttribute('type', 'button');
        } else if (buttonSend.getAttribute('type') === 'button'){
            buttonSend.setAttribute('type', 'submit');
        }
        checkForm();
    }
});

function checkForm(){
    buttonSend.addEventListener('click', function(evt){   
        evt.preventDefault(); 
        if(getCheckedRadio(blockCitizen) === undefined || getCheckedRadio(blockCitizen) === null || 
        getCheckedRadio(blockAge) === undefined || getCheckedRadio(blockAge) === null ||
        getCheckedRadio(blockTell) === undefined || getCheckedRadio(blockTell) === null){
            alert('Не сделан выбор в вопросе 1-3');
        } else if(newCoordinates === undefined || file === undefined || previewImage.getAttribute('src') === DEFAULT_IMAGE){
            alert('Не загружена картинка или не указано место на карте');
        } else if (themeInput.value.length < 3){
            alert('Слишком короткое название темы');
        } else if(ideaInput.value.length < 20){
            alert('Слишком короткий текст идеи');
        } else {
            sendForm();
        }
    });    
}

export {themeInput, ideaInput, buttonSend};