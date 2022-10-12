const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const testCard = {
  id: 13, 
  question: 'What is the best 2000\'s emo band?', 
  answers: ['Emery', 'My Chemical Romance', 'The Starting Line', 'Mae', 'Copeland', 'Senses Fail'], 
  correctAnswer: 'Copeland'
};
const testDeck = [{
  id: 1,
  question: 'What is Robbie\'s favorite animal',
  answers: ['sea otter', 'pug', 'capybara'],
  correctAnswer: 'sea otter'
}]

describe('Round', function () {
  it.skip('should take an array of cards (a deck) as an argument', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    expect(round.deck[0]).to.eql({
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })
  })

  it.skip('should be assigned a card from the deck', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    expect(round.currentCard).to.eql(testDeck[0]);
  })

  it.skip('should have a method that returns the current card', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);

    expect(round.returnCurrentCard).to.eql(testDeck[0])
  })

  it.skip('should have a method that updates the number of turns taken', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);
    round.turn.guess = 'pug';
    round.takeTurn();

    expect(round.turns).to.equal(1);
    expect(round.turn.guess).to.be.a('string');
  })

  it.skip('should be able to store id of cards guessed incorrectly', () => {
    var deck = new Deck(testDeck);
    var round = new Round(deck);
    round.currentCard = testCard;
    round.takeTurn();

    expect(round.incorrectGuesses[0]).to.equal(1);
  })

  it.skip('should be able to tell player percent of correct answers', () => {
    var round = new Round;
    round.turns = 10;
    round.incorrectGuesses.push(1, 2, 3);
    var percent = round.calculatePercentCorrect();

    expect(percent).to.equal(70);
  })

  it.skip('should be able to end the current round', () => {
    var round = new Round;
    round.turns = 10;
    round.incorrectGuesses.push(1, 2, 3);
    var endOfRound = round.endRound();

    expect(endOfRound).to.equal('** Round over! ** You answered 70% of the questions correctly!');
  })
})