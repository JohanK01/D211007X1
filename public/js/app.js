'use strict'
let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    console.log(data)

    var imgUrl = data.articleImage;

    let elementH1 = document.createElement('h1');
    let elementP = document.createElement('p');
    let elementIMG = document.createElement('img');
    let btn2 = document.createElement('button');


    elementH1.textContent = data.headline;
    elementP.textContent = data.intro;

    elementIMG.setAttribute('src', imgUrl);
    elementIMG.id = 'ImgDuck';

    btn2.style.position = 'fixed';
    btn2.textContent ='Hide';
    btn2.id = 'imgBtn';
    btn2.addEventListener('click', Button1Handler)

    document.getElementById('Exercise1').appendChild(elementH1);
    document.getElementById('Exercise1').appendChild(elementP);
    document.getElementById('Exercise1').appendChild(btn2);
    document.getElementById('Exercise1').appendChild(elementIMG);

};
  

function Button1Handler() {
    
    var x = document.getElementById('ImgDuck');
    if (x.style.display == "none")
    {
        document.getElementById('imgBtn').textContent = 'Hide';
        x.style.display = 'block';
    }
    else
    {
        document.getElementById('imgBtn').textContent = 'Show';
        x.style.display = 'none'
    }

}