import {resetForm} from './reset.js';

const form = document.querySelector('form');
const URL = 'https://my-json-server.typicode.com/typicode/demo/posts';

const sendForm = () => {
    const dataForm = new FormData(form);
    fetch(
    URL,
    {
        method: 'POST',
        body: dataForm,
    })
    .then((response) => {
        if (response.ok) {
            resetForm();
        } 
    }
    )
    .catch(error => console.log(error));
}

export {sendForm};