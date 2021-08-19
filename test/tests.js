import { didUserWin } from '../did-user-win.js';
const test = QUnit.test;

test('didUserWin rock vs rock', (expect) => {
    
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('didUserWin rock vs scissor', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissor');

    expect.equal(actual, expected);

});

test('didUserWin rock vs paper', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper');
 
    expect.equal(actual, expected);
 
});


test('didUserWin scissor vs rock', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('scissor', 'rock');

    expect.equal(actual, expected);

});

test('didUserWin scissor vs scissor', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('scissor', 'scissor');
 
    expect.equal(actual, expected);
 
});

test('didUserWin scissor vs paper', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissor', 'paper');
 
    expect.equal(actual, expected);
 
});

test('didUserWin paper vs rock', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
 
    expect.equal(actual, expected);
 
});

test('didUserWin paper vs scissor', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissor');
 
    expect.equal(actual, expected);
 
});

test('didUserWin paper vs paper', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('paper', 'paper');
 
    expect.equal(actual, expected);
 
});