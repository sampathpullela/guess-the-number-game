let randomNumber = Math.ceil(Math.random() * 100);

function startGame(){
enteredNumber = parseInt(document.getElementById('guess-number').value);


if(enteredNumber===randomNumber){
    document.getElementById('res').innerHTML='Congrats, You guessed the right number';
    document.getElementById('res').style.backgroundColor = 'green';
}
else{
    if((randomNumber-enteredNumber)>0){
        document.getElementById('res').innerHTML=`Number is greater than ${enteredNumber}`;
        document.getElementById('res').style.backgroundColor = 'red';

    }
    else{
        document.getElementById('res').innerHTML=`Number is less than ${enteredNumber}`;
        document.getElementById('res').style.backgroundColor = 'red';

    }
}
}
function restart(){
    location.reload();
}
