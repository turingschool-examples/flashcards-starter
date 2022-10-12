const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const testCard = {
  id: 13, 
  question: 'What is the best 2000\'s emo band?', 
  answers: ['Emery', 'My Chemical Romance', 'The Starting Line', 'Mae', 'Copeland', 'Senses Fail'], 
  correctAnswer: 'Copeland'
};
const testDeck = [{
  id: 24,
  question: 'What is Robbie\'s favorite animal',
  answers: ['sea otter', 'pug', 'capybara'],
  correctAnswer: 'sea otter'
}]

describe('Round', function () {
  it('should take an array of cards (a deck) as an argument', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    expect(round.deck.cards[0]).to.eql({
      id: 24,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })
  })

  it('should be assigned a card from the deck', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    expect(round.currentCard).to.eql(testDeck[0]);
  })

  it('should have a method that returns the current card', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    expect(round.returnCurrentCard()).to.eql(testDeck[0])
  })

  it('should have a method that updates the number of turns taken', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);
    round.takeTurn();

    expect(round.turnsTaken).to.equal(1);
    expect(round.turn.guess).to.be.a('string');
  })

  it('should be able to store id of cards guessed incorrectly', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    round.takeTurn();

    expect(round.incorrectGuesses[0]).to.equal(24);
  })

  it('should be able to tell player percent of correct answers', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);
    round.turns = 10;
    round.incorrectGuesses.push(1, 2, 3);
    var percent = round.calculatePercentCorrect();

    expect(percent).to.equal(70);
  })

  it('should be able to end the current round', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);
    round.turns = 10;
    round.incorrectGuesses.push(1, 2, 3);
    var endOfRound = round.endRound();

    expect(endOfRound).to.equal('** Round over! ** You answered 70% of the questions correctly!');
  })
})