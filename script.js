var inputTxt = document.querySelector('.input-text');

var check = document.querySelector('.btn-check');

var reverse = document.querySelector('.reverce-text');

var alpha = document.querySelector('.alpha-text');

check.addEventListener('click', convert);


function convert(){
    var myText = inputTxt.value.split("").reverse();
    myText = myText.join("");
    reverse.innerHTML = myText;
    var alphaText = inputTxt.value.split("").sort().join('');
    alpha.innerHTML = alphaText;
    console.log(myText, alphaText);
}


