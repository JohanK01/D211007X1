'use strict'
let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    console.log(data);

    let elementlist = document.createElement('h1');
    elementlist.textContent = data.headline;
    elementlist.id = 'list';

    document.getElementById('list').appendChild(elementlist);
};