let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/exercise1.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    console.log(data)

    var imgUrl = data.articleImage;
    
    let headlineH1 = document.createElement('h1');
    let introP = document.createElement('p');
    let articleIMG = document.createElement('img');

    headlineH1.textContent = data.headline;
    introP.textContent = data.intro;
    articleIMG.setAttribute('src', imgUrl);

    document.getElementById('Exercise1').appendChild(headlineH1);
    document.getElementById('Exercise1').appendChild(introP);
    document.getElementById('Exercise1').appendChild(articleIMG)
};