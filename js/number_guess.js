var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
    var guessCount = 1;
    var resetButton;

    function checkGuess() {
      var userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent='Last guess is low!' ;
        }
        else if(userGuess === 420) {
          lowOrHi.textContent = 'The number is '+randomNumber;
        }
         else if(userGuess === 385120) {
          lowOrHi.textContent = 'The number is '+randomNumber;
        }else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess is high!';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.setAttribute("class", "reset");
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      var resetParas = document.querySelectorAll('.resultParas p');
      for(var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }
    /*function randomnum() {
  var g= Math.floor(Math.random()*100);
  console.log(g);
  return g;
} 
var bttn= document.getElementById("bttn");
var input= document.getElementById("userinput").value;

var win;
var low;
var high;
var valid;

function win () {
  win= document.write("You win");
  return win;
}

function low () {
  low= document.write("Go high");
  return low;
}

function high () {
  high= document.write("Go low");
  return high;
}

function valid () {
  valid= document.write("Enter something valid");
  return valid;
}

for (var x=0; x<10; x++) {
  bttn.onclick= function (event) {
    if (input == g) {
      win();
      return;
    }
    else if (input > g) {
      high();
    }
    else if (input < g) {
      low();
    }
    else{
      valid();
    }
  }   
}*/