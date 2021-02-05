const chai = require('chai');
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  })

  it('should update the turn count if the answer is CORRECT', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
        
    expect(round.turns).to.equal(0);
    round.takeTurn('blue crane');
    expect(round.turns).to.equal(1);
  })

  it('should update the turn count if the answer is INCORRECT', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
        
    expect(round.turns).to.equal(0);
    round.takeTurn('hornbill');
    expect(round.turns).to.equal(1);
  })

  it('the next card should become the current card after a turn is taken', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn('blue crane');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  })

  it('should return an appropriate message if the guess is CORRECT', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('blue crane')).to.equal('correct!');
  })

  it('should return an appropriate message if the guess is INCORRECT', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('hornbill')).to.equal('incorrect!');
  })

  it('should store the id of incorrectly guessed cards', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('hornbill')
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it('should be able to calculate the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('blue crane')
    round.takeTurn(9)
    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it('should print an end-of-game message with the users percentage of correct answers', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    round.takeTurn('blue crane')
    round.takeTurn(9)
    expect(round.endRound()).to.equal(`
-------------------------------------------

Round over! You completed the test in 0:00 seconds
You answered 50% of the questions correctly!
Press ENTER to review the cards you got wrong

-------------------------------------------`);
  })
})