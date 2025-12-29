'use strict';

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = source.firstname.value;
    const lastName = source.lastname.value;

    target.innerText = `Hello ${firstName} ${lastName}`;
});

