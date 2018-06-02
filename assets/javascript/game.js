// variables to keep track of wins, losses, and total score
var wins = 0;
var losses = 0;
var playerTotal = 0;

// generate random "score to match" number
var randomScore = Math.floor(Math.random() * 101+19);
$("#scoreToMatch").text(randomScore)


// generates random number for each of the crystals
var num1= Math.floor(Math.random()*12+1);
var num2= Math.floor(Math.random()*12+1);
var num3= Math.floor(Math.random()*12+1);
var num4= Math.floor(Math.random()*12+1);

// inputs zero as starting win/loss
$('#numberOfWins').text(wins);
$('#numberOfLosses').text(losses);


// Reset display - what happens at start of a new game?
function reset(){
  randomScore=Math.floor(Math.random()*102+19);
  console.log(randomScore)
  $('#scoreToMatch').text(randomScore);
  num1= Math.floor(Math.random()*12+1);
  num2= Math.floor(Math.random()*12+1);
  num3= Math.floor(Math.random()*12+1);
  num4= Math.floor(Math.random()*12+1);
  playerTotal= 0;
  $('#totalScore').text(playerTotal);
  } 

// Display when user wins
function userWins(){
alert("You won!");
  wins++; 
  $('#numberOfWins').text(wins);
  reset();
}

// Display when user loses
function userLoses(){
alert ("You lose!");
  losses++;
  $('#numberOfLosses').text(losses);
  reset()
}

// What happens when you click on each crystal
$('#redRandom').on ('click', function(){
playerTotal = playerTotal + num1;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
    if (playerTotal == randomScore){
      userWins();
    }
    else if ( playerTotal > randomScore){
      userLoses();
    }   
}) 

$('#greenRandom').on ('click', function(){
playerTotal = playerTotal + num2;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
    if (playerTotal == randomScore){
      userWins();
    }
    else if ( playerTotal > randomScore){
      userLoses();
    }   
}) 

$('#yellowRandom').on ('click', function(){
playerTotal = playerTotal + num3;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
    if (playerTotal == randomScore){
      userWins();
    }
    else if ( playerTotal > randomScore){
      userLoses();
    }   
}) 

$('#blueRandom').on ('click', function(){
playerTotal = playerTotal + num4;
console.log("New playerTotal= " + playerTotal);
$('#totalScore').text(playerTotal); 
    if (playerTotal == randomScore){
      userWins();
    }
    else if ( playerTotal > randomScore){
      userLoses();
    }   
}) 



// document.getElementById("redRandom").onclick = function() {
// 	redFunction();
// };
// function redFunction() {
// 	playerTotal = playerTotal + num1;
// 	document.getElementById("totalScore").innerHTML = playerTotal;
// }

// document.getElementById("yellowRandom").onclick = function() {
// 	yellowFunction();
// };
// function yellowFunction() {
// 	playerTotal = playerTotal + num2;
// 	document.getElementById("totalScore").innerHTML = playerTotal;
// }

// document.getElementById("blueRandom").onclick = function() {
// 	blueFunction();
// };
// function blueFunction() {
// 	playerTotal = playerTotal + num3;
// 	document.getElementById("totalScore").innerHTML = playerTotal;
// }

// document.getElementById("greenRandom").onclick = function() {
// 	greenFunction();
// };
// function greenFunction() {
// 	playerTotal = playerTotal + num4;
// 	document.getElementById("totalScore").innerHTML = playerTotal;
// }


