let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    console.log(data)

    let headlineH1 = document.createElement('h1');
    let introP = document.createElement('p');

    headlineH1.textContent = data.headline;
    introP.textContent = data.intro;

    document.getElementById('Exercise1').appendChild(headlineH1);
    document.getElementById('Exercise1').appendChild(introP);
};