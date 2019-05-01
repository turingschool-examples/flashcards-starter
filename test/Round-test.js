const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a methods that returns the current card from the deck', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'hell yeah, there friend!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should have a methods that increments Round.turns by one after takeTurn() is invoked', function() {
    const round = new Round();
    expect(round.turns).to.equal(0);
    round.turnCounter();
    expect(round.turns).to.equal(1);
  }); 

  it('should have a method that creates a new instance of the Turn class', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah there, friend!'], 'hell yeah there, friend!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.createNewTurn('yeah!')).to.be.an.instanceof(Turn);
  });

  it('should have a method that returns "Correct!" if the guess is correct', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah there, friend!'], 'hell yeah there, friend!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.takeTurn('fuck yeah!')).to.equal('Correct!');
  });

  it('should have a method that returns "Incorrect!" if the guess is correct', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah there, friend!'], 'hell yeah there, friend!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.takeTurn('yeah!')).to.equal('Incorrect!');
  });

  it('should have a method that returns the percentage of correct answers', function() {
    const card1 = new Card(1, 'Is Jev cool?', ['yeah!', 'fuck yeah!', 'hell yeah, there friend!'], 'fuck yeah!');
    const card2 = new Card(2, 'Does Jev like burgers?', ['yeah!', 'fuck yeah!', 'hell yeah there, friend!'], 'hell yeah there, friend!');
    const cards = [card1, card2];
    const deck = new Deck(cards);
    const round = new Round(deck);
    round.takeTurn('yeah!');
    round.takeTurn('hell yeah there, friend!')
    expect(round.calculatePercentCorrect()).to.equal('50%');
  });
});