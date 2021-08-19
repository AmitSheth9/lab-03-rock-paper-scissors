/* eslint-disable no-unused-vars */

export function didUserWin(player, cpu) {
    
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