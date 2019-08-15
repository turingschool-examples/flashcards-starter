const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', () => {
  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', () => {
    const card = new Card( 1, 'What is my name?', ['yo','hey','brady'], 'brady');
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card);
  });

  it('should be able to take turns', () => {
    const card1 = new Card(1,'a',['a','b','c','d'], 'a');
    const card2 = new Card(2,'b',['a','b','c','d'], 'b');
    const card3 = new Card(3,'c',['a','b','c','d'], 'c');
    const card4 = new Card(4,'d',['a','b','c','d'], 'd');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);
    round.takeTurn('a', Turn);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('incorrect', Turn);
    expect(round.incorrectGuesses.length).to.equal(1);
    round.takeTurn('c', Turn);
    expect(round.turns).to.equal(3);
    round.takeTurn('incorrect', Turn);
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([2,4]);

  });

  it('should be able to calculate percentage correct', () => {
    const card1 = new Card(1,'a',['a','b','c','d'], 'a');
    const card2 = new Card(2,'b',['a','b','c','d'], 'b');
    const card3 = new Card(3,'c',['a','b','c','d'], 'c');
    const card4 = new Card(4,'d',['a','b','c','d'], 'd');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);
    let guess1 = round.takeTurn('a', Turn);
    expect(guess1).to.equal('correct!');
    let guess2 = round.takeTurn('incorrect', Turn);
    expect(guess2).to.equal('incorrect!');
    round.takeTurn('c', Turn);
    round.takeTurn('incorrect', Turn);
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should be able to log results of round', () => {
    const card1 = new Card(1,'a',['a','b','c','d'], 'a');
    const card2 = new Card(2,'b',['a','b','c','d'], 'b');
    const card3 = new Card(3,'c',['a','b','c','d'], 'c');
    const card4 = new Card(4,'d',['a','b','c','d'], 'd');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);
    const round2 = new Round(deck);
    round.takeTurn('a');
    round.takeTurn('incorrect');
    round.takeTurn('c');
    round.takeTurn('incorrect', Turn);
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
    round2.takeTurn('a');
    round2.takeTurn('b');
    round2.takeTurn('c');
    round2.takeTurn('incorrect');
    expect(round2.endRound()).to.equal('** Round over! ** You answered 75% of the questions correctly!');
  });
});