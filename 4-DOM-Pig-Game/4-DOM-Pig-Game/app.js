/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// variable declarations 
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;

// keep track of current player
// using this style to access scores array 
// 0 = player 1
// 1 = player 2
activePlayer = 1;

// get random dice values that are integers 
// Math.floor - to get rid of decimals 
// (Math.random() * 6) + 1 - get number between 1 and 6 
//dice = Math.floor(Math.random() * 6) + 1;

// perform DOM manipulation 
// the document object will give you access to the DOM

// querySelector - used to select elements from the page 
// similar to CSS selection 
// selects <div class="player-current-score" id="current-0">11</div>
// textContent - method to change the text 
// '#current-' + activePlayer - A dynamic way to select players (0 or 1)

// innerHTML - to use html elements when doing js manipulation 
// put html elements in '' to distinguish 
//document.querySelector('#current-' + activePayer).innerHTML = '<b>' + dice + '</>'

// read and store an element with an idea and store in a variable 
//var x = document.querySelector('#score-0').textContent;

// To manipulate the CSS of an element
// Hide the dice element in beginning of the game - display to none 
// .style.display = none - style, css property, then css value 
document.querySelector('.dice').style.display = 'block';


/********************************************************************************************

Event Handling - Roll the Dice

*/

// refer to modzilla.org for js events 
// assEventListern takes two parameters 
// First part: Type of event
// Second Part: What to do when the event happens 

//function btn() {
//    // do something 
//}
//
//btn();
//
//// in addEventListener('click', btn), btn is a call back function since the btn() will be called by another function 
//document.querySelector('.btn-roll').addEventListener('click', btn)

// Ananymou function - a function with no name
// Can't use ananymous functions outside this scope

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {

    //    Note this variables are only within the scope of this function

    // 1. Random Number 
    // get random dice values that are integers 
    // Math.floor - to get rid of decimals 
    // (Math.random() * 6) + 1 - get number between 1 and 6 
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';

    // change the image of the dice 
    diceDom.src = 'dice-' + dice + '.png';


});