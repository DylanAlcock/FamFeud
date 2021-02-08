var incorrect = 0;
var teamTurn = Math.round(Math.random()) + 1;
document.getElementById("turn").innerHTML = "It's team " + teamTurn + "'s turn.";

var input = document.getElementById("guess");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("guessBtn").click();
  }
});


function flip(element){
  var score = document.getElementById("scoreboard").innerHTML;
  if (element.className === "card") {
    if(element.style.transform == "rotateX(180deg)") {
      element.style.transform = "rotateX(0deg)";
      score = +score - +(answer.nextElementSibling.innerHTML);
      document.getElementById("scoreboard").innerHTML = score;
    }
    else {
      element.style.transform = "rotateX(180deg)";
      score = +score + +(element.lastElementChild.lastElementChild.innerHTML);
      if (score > 0){
        checkSweep();
      }
      document.getElementById("scoreboard").innerHTML = score;
    }
  }
};


function addScore(forTeam){
  setTimeout(function(){
    var scr = document.getElementById("scoreboard").innerHTML;
    if (forTeam === 1){
      document.getElementById("score1").innerHTML = scr;
    }
    else {
      document.getElementById("score2").innerHTML = scr;
    }
    document.getElementById("scoreboard").innerHTML = 0;
    newQuestions();
  }, 2000);
}


function guess(answers){

  var guess = document.getElementById("guess");
  var answers = document.getElementsByClassName("answer");
  var correct = 0;

  if (guess.value.length < 3 && isNaN(guess.value) || guess.value.length == 0){
    document.getElementById("hide").hidden = false;

    setTimeout(function(){
      document.getElementById("hide").hidden = true;
    }, 3000);
    
    return;
  }

  for(answer of answers){
    
    if (answer.textContent.toLowerCase().includes(guess.value.toLowerCase())){
      correct = 1;
      flip(answer.parentNode.parentNode);
      if(document.getElementById("guessBtn").innerHTML === "Steal") {
        addScore(teamTurn);
        document.getElementById("guessBtn").innerHTML = "Guess";
      }
    } 
  }
  if (!correct && document.getElementById("guessBtn").innerHTML === "Steal"){
    addScore(teamTurn%2+1);
  }


  if (!correct) {
    incorrect += 1;
    incorrect = wrong();
  }
  
  document.getElementById("guess").value = "";
};


function wrong(){
  var wrongX = "";
  for (var i = 0; i < incorrect; i++) {
    wrongX += "X"
  }

  document.getElementById("alarmMsg").innerHTML = wrongX;

  setTimeout(function(){
      document.getElementById("alarmMsg").innerHTML = '';
  }, 3000);

  if (incorrect === 3){
    incorrect = 0;
    console.log(teamTurn);
    teamTurn = teamTurn%2+1;
    console.log(teamTurn);
    steal(teamTurn);
  }
  return incorrect;
}

function steal(team){
  document.getElementById("turn").innerHTML = "It's team " + teamTurn + "'s turn." ;    

  document.getElementById("guessBtn").innerHTML = "Steal";
}

function checkSweep() {
  var cards = document.getElementsByClassName("card");
  var check = 1;
  for(card of cards){
    if (card.style.transform != "rotateX(180deg)"){
      check = 0;
    }
  }
  if (check) {
    addScore(teamTurn);
  }
}

