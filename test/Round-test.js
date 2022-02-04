const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', ()=> {

  it('should be a function', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    const turn = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    const turn = new Round(deck);
    expect(turn).to.be.an.instanceof(Round);
  });

  it('The current card should be the first card in the deck at the start of the round', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('Should have a function that returns the current card being played', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    const round1 = new Round(deck);
    const round2 = new Round(deck, 1);
    round1.returnCurrentCard();
    expect(round1.returnCurrentCard()).to.deep.equal(round1.deckDeck.cardDeck[0]);
    expect(round2.returnCurrentCard()).to.deep.equal(round2.deckDeck.cardDeck[1]);
  });

  // it('Should have a method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', ()=> {
  // it('Should create a new Turn instance when a guess is made', ()=> {
  //   const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const deck = new Deck([card1, card2, card3]);
  //   const round1 = new Round(deck);
  //   const turn = new Turn('object', round1.currentCard);
  //   // const turn1 = new Turn('Is mayonnaise an instrument?', card1);
  //   // const round2 = new Round(deck, 1);
  //   // const turn1 = new Turn('Is mayonnaise an instrument?', card1);
  //   round1.takeTurn('object', card1);
  //   expect(turn).to.be.an.instanceof(Turn);
  // });

  it('Should update the turn count after every turn whether or not the guess is correct', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    round.takeTurn('object', card1);
    expect(round.turns).to.equal(1);
  });

  it('Should update the current card to the next card after every turn', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(round.deckDeck.cardDeck[0]);
    round.takeTurn('object', card1);
    expect(round.currentCard).to.equal(round.deckDeck.cardDeck[1]);
  });

  it('Should evaluate guess and store incorrect guesses after each turn', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object1', 'array', 'function'], 'object1');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object2', 'array', 'function'], 'object2');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object3', 'array', 'function'], 'object3');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('Not object1');
    expect(round.incorrectGuesses.length).to.equal(1);
    round.takeTurn('object2');
    expect(round.incorrectGuesses.length).to.equal(1);
    round.takeTurn('Not object3');
    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('Should give feedback regarding whether or not the guess is correct', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object1', 'array', 'function'], 'object1');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object2', 'array', 'function'], 'object2');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object3', 'array', 'function'], 'object3');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('Not object1')).to.equal('incorrect!');
    expect(round.takeTurn('object2')).to.equal('correct!');
    expect(round.takeTurn('Not object3')).to.equal('incorrect!');
  });

  it('Should give feedback regarding whether or not the guess is correct', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object1', 'array', 'function'], 'object1');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object2', 'array', 'function'], 'object2');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object3', 'array', 'function'], 'object3');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('Not object1')).to.equal('incorrect!');
    expect(round.takeTurn('object2')).to.equal('correct!');
    expect(round.takeTurn('Not object3')).to.equal('incorrect!');
  });

  it('Should calculate the percentage of correct guesses', ()=> {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object1', 'array', 'function'], 'object1');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object2', 'array', 'function'], 'object2');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object3', 'array', 'function'], 'object3');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('Not object1');
    round.takeTurn('object2');
    round.takeTurn('Not object3');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

});
