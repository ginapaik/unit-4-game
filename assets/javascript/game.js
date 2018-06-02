var wins = 0;
var losses = 0;
var totalScore = 0;
var num1= Math.floor(Math.random()*12+1)
var num2= Math.floor(Math.random()*12+1)
var num3= Math.floor(Math.random()*12+1)
var num4= Math.floor(Math.random()*12+1)

// Use randomizer to select a scoreToMatch number
function randomScore() {
    var x = Math.floor((Math.random() * 70) + 1);
    document.getElementById("scoreToMatch").innerHTML = x;
}

// Reset/new game display - what happens at start of new game?
function reset(){
      randomScore=Math.floor((Math.random() * 70) + 1);
      console.log(randomScore)
      $('#scoreToMatch').text(randomScore);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      }

// When a crystal is clicked, add that assigned number to the totalScore id

// When scoreToMatch equals totalScore, user wins

// When totalScore is greater than scoreToMatch, user loses

