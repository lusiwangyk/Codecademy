let round = 1;
document.getElementById('round').innerHTML = "Round " + round;

let target = 0;
target = Math.floor(Math.random() * 10);
console.log(target);


var number = 0;
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
    if ()
})

