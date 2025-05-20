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