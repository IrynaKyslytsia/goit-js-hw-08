import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

const formData = {};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const userFeedback = JSON.parse(savedData)

    if (savedData) {
        input.value = userFeedback.email;
        textarea.value = userFeedback.message;
    };
    
};
