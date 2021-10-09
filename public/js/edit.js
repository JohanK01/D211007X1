'use strict'
let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    

    let elementForm = document.createElement('form');
    let elementInput1 = document.createElement('input');
    let elementInput2 = document.createElement('input');
    let elementBtn = document.createElement('input');

    elementForm.id = 'formData'
    elementForm.name = 'formData'
    elementForm.method = 'POST'

    elementInput1.type = 'text';
    elementInput1.id = 'txtID1';
    elementInput1.name= 'txtID1';
    elementInput1.value = data.headline;
  
    elementInput2.type = 'text';
    elementInput2.id = 'txtID2';
    elementInput2.name = 'txtID2';
    elementInput2.value = data.intro;

    elementBtn.type= 'submit';
    elementBtn.value = 'Go';
    elementBtn.addEventListener('click', Button2Handler());

    elementInput1.textContent = data.headline;
    elementInput2.textContent = data.intro;

    

    document.getElementById('Exercise2').appendChild(elementForm);
    document.getElementById('formData').appendChild(elementInput1);
    document.getElementById('formData').appendChild(elementInput2);
    document.getElementById('formData').appendChild(elementBtn);
    
};

function Button2Handler(){
    console.log('Button update pushed')
}