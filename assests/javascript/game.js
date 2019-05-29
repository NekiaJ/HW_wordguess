
// variables
var letterChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//variables starting at 0
var winsCount = 0;
var lossCount = 0;
//var guessInput_count=0;
//var guessAllowed= 10;


var userGuess_text = document.getElementById("userGuess");
var psycGuess_text = document.getElementById("psycGuess");

//var guessLeft_text=document.getElementById("guessLeft");
//var user_guessText=document.getElementById("user_guess");

var win_text = document.getElementById("winsDiv");
var loss_text = document.getElementById("lossDiv");

//functions
document.onkeyup = function(event) { 
// gathers user input
  var userGuess = event.key;
 
// computer(pychic) generates a random number
  var psycGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
 
 
// adds point to win if input matches
if (userGuess == psycGuess){
  winsCount++;
  
}
else{ 
    //adds point to loss if input doesn't match
  lossCount++;
  
}
// starts the game
 questDiv.textContent = "";



   //writes the amount 
 userGuess_text.textContent = "Your Guess:"+ '' + userGuess;
 psycGuess_text.textContent = "Psychic Guess:"+''  + psycGuess;
 win_text.textContent = "Wins:" +''+ winsCount;
 loss_text.textContent = "Losses:" +'' + lossCount; 
};
/* Pseudo Code for steps 6-9
# OF GUESS LEFT
6. - counts the number of guess inputs
- compares guess input to allowed guess
    if input_guess is less than allowed _guess
        return statement of how many guess left 
    if guess_input is greater than allowed_guess
        return statement of out of guess and 
        the game stops
DISPLAY USERS GUESS
7. variable holds user's input
    returns user input to screen
    remove from screen if the user win or losses
 WHEN THE PLAYER WINS   
8. if user's guess matches psychic guess
        add point to win input 
    if userGuess points are greater than psychic guess
        return statment: player won game
        reset game

9. WHEN THE USER LOSES
    If the user guess doesn't match the computer input
        -add point to loss input
    If loss point is greater than win point 
        return statement: player loss game
    reset game.



*/

