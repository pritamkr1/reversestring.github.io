var inputTxt = document.querySelector('.input-text');

var check = document.querySelector('.btn-check');

var reverse = document.querySelector('.reverce-text');



check.addEventListener('click', convert);


function convert(){
    var myText = inputTxt.value.split("").reverse();
    myText = myText.join("");
    reverse.innerHTML = myText;

    console.log(myText);
}