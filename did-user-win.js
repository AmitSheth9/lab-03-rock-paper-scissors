/* eslint-disable no-unused-vars */

export function didUserWin(player, cpu) {
    //if player choice is rock and cpu choice is scissor, p wins
    //if cpu is paper, c wins etc..
    let result = '';
    if (player === 'rock' && cpu === 'rock') return result = 'draw';
    if (player === 'rock' && cpu === 'paper') return result = 'lose';
    if (player === 'rock' && cpu === 'scissor') return result = 'win';

    if (player === 'paper' && cpu === 'rock') return result = 'win';
    if (player === 'paper' && cpu === 'paper') return result = 'draw';
    if (player === 'paper' && cpu === 'scissor') return result = 'lose';

    if (player === 'scissor' && cpu === 'rock') return result = 'lose';
    if (player === 'scissor' && cpu === 'paper') return result = 'win';
    if (player === 'scissor' && cpu === 'scissor') return result = 'draw';
    
}