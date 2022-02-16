var playerOne = document.querySelector("#playerOnesResult")
var playerTwo = document.querySelector("#playerTwosResult")
var winer = document.querySelector("#winMesssage")

let playerOneCount = 0;
let playerTwoCount = 0;
let winMessage = "";

var playerOnesHelth = 100;
var playerTwosHelth = 100;
var clicked = 0;

playerOne.innerHTML = playerOneCount;
playerTwo.innerHTML = playerTwoCount;

function shoot() {
    clicked = clicked+1;
    if (clicked>=5) {
        stopEvent();
    }
    while (playerTwosHelth>0 && playerOnesHelth>0) {
        playerOneSooting()
        playerTwoSooting() 
    }

    if (playerTwosHelth<1) {
        playerOneCount = playerOneCount +1;
    } 
    else if(playerOnesHelth<1) {
        playerTwoCount = playerTwoCount +1;
    } 
    else if(playerTwosHelth<1 && playerOnesHelth<1) {
        alert("drow")
        playerOneCount = playerOneCount;
        playerTwoCount = playerTwoCount;
    } 

    playerOne.innerHTML = playerOneCount;
    playerTwo.innerHTML = playerTwoCount;
    
    winLogic()

    playerOnesHelth = 100;
    playerTwosHelth = 100;

}

function randomValue(num){
    if (num < 5) {
        return Math.ceil(Math.random() * num)
    } else {
       return Math.ceil(Math.random() * 5) 
    }
}
 
function playerOneSooting() {    
    power = randomValue(playerTwosHelth);
    playerTwosHelth = playerTwosHelth - power;  
}
        
function playerTwoSooting() {
    power = randomValue(playerOnesHelth);
    playerOnesHelth = playerOnesHelth - power;  
} 

function stopEvent() {
    var element = document.getElementById("btn");
    element.onclick = ""; 
} 

function winLogic() {
    if (playerOneCount>=3 && playerTwoCount>=3) {
        winer.innerHTML = "Match Draw";
        stopEvent();
    }
    else if (playerOneCount>=3) {
        winer.innerHTML = "Player One Won The Match";
        stopEvent();
    }
    else if(playerTwoCount>=3){
        winer.innerHTML = "player Two Wins The Match";
        stopEvent();
    }else{
        winer.innerHTML = ""
    }
}



