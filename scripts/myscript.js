/* global variable */
var outlookImage = document.querySelector('img');

outlookImage.onclick = function() {
    var myImages = outlookImage.getAttribute('src');
    if (myImages === 'images/aleksandra-dementeva-SRgl8pvoFC0-unsplash.jpg') {
        outlookImage.setAttribute('src', 'images/royce-fonseca-sgm8_Tn7t5E-unsplash.jpg');
    }else {
        outlookImage.setAttribute('src', 'images/aleksandra-dementeva-SRgl8pvoFC0-unsplash.jpg');
    }
}

//Personalized welcome message code
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day,' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day,' + storedName;
}

nameButton.onclick = function() {
    'use strict';
    setUserName();
};