const element = document.getElementById("Exercise1");

const txt = '{"headline" : "Welcome to Exercise1", "intro" : "This is a short introduction"}'
const obj = JSON.parse(txt);
element.innerHTML = obj.headline + " " + obj.intro



// let xhttp = XMLHttpRequest();
// document.getElementById("Exercise1").innerHTML = xhttp.responseText;