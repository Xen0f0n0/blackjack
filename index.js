let firstCard=11;
let secondCard=11;
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message="";
function startGame(){
 if (sum<=20){
    message="Do you want to draw a new card?";
 }else if(sum===21){
    message="You've got blackjack!";
    hasBlackJack=true;
 }else{
    message="You lost!";
    isAlive=false;
 }

 console.log(message);
}

