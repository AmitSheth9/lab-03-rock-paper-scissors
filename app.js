/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './did-user-win.js';

const playerDisplay = document.querySelector('#playerdisplay');
const cpuDisplay = document.querySelector('#cpudisplay');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playButton = document.querySelector('#playbutton');
const displayResults = document.querySelector('#displayresults');
const displayTracker = document.querySelector('#displaytracker');
const resetButton = document.querySelector('#buttonReset');

let wins = 0;
let losses = 0;
let draws = 0;
let throws = null;
let rpsArray = ['rock', 'paper', 'scissor'];


playButton.addEventListener('click', () => {
    throws++;
    let computerChoice = getRandomThrow(rpsArray);
    let player = document.querySelector('input:checked');
    let result = didUserWin(player.value, computerChoice);
    
    playerDisplay.textContent = `You selected: ${player.value}`;
    cpuDisplay.textContent = `Computer selected: ${computerChoice}`;
    displayResults.textContent = `You ${result}!`;
    resultsTracker(result);
    displayTracker.textContent = `Wins: ${wins} \n Losses: ${losses} \n Draws: ${draws}`;
});


function resultsTracker(result) {
    if (result === 'win') wins++;
    if (result === 'lose') losses++;
    if (result === 'draw') draws++;
}

resetButton.addEventListener('click', () => {
    location.reload();
});