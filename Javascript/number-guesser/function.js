var round = 1;
var target = 0;
var computerGuess = 0;
target = Math.floor(Math.random() * 10);
computerGuess = Math.floor(Math.random() * 10);
console.log(target);
console.log(computerGuess);

document.getElementById('round').innerHTML = "Round " + round;

document.getElementById('next').addEventListener('click',function(){
    round++;
    document.getElementById('round').innerHTML = "Round " + round;
    target = Math.floor(Math.random() * 10);
    computerGuess = Math.floor(Math.random() * 10);
    console.log(target);
    console.log(computerGuess);
    document.getElementById('number').innerHTML = '0';
})

var number = 0;
var humanScore = 0;
var computerScore = 0;

document.getElementById('plus').addEventListener('click',function(){
    number++;
    if (number > 9){
        alert('Please choose a number between 0 and 9.')
        number = 0;
    }
    document.getElementById('number').innerHTML = number;
    
})

document.getElementById('minus').addEventListener('click',function(){
    number--;
    if (number <0){
        alert('Please choose a number between 0 and 9.')
        number = 0;
    }
    document.getElementById('number').innerHTML = number;
})

document.getElementById('guesser').addEventListener('click',function(){
    if (number == target && computerGuess !== target){
        humanScore++;
        alert('You won one score.')
        document.getElementById('humanscore').innerHTML = "score: " + humanScore;
    }
    else if (computerGuess == target && number !== target){
        computerScore++;
        alert('Computer won.')
        document.getElementById('compscore').innerHTML = "score: " + computerScore;
    }
    else if (computerGuess == number) {
        alert('Please guess again.')
    }
})


