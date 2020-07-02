const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  const card1 = new Card(37, "Why is the guitar like this?", ["physics", "hippies", "cus this is the guitar"], "cus this is the guitar");
  const card2 = new Card(42, "What color is cooked spaghetti in space?", ["yellow", "black", "transparent"], "transparent");
  const card3 = new Card(90, "What time of day is the best time for dreams", ["tomorrow", "all day", "sleeping"], "tomorrow");

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take in a deck of cards', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards[1].id).to.equal(42);
  });

  it('should make the first card in the deck the \'currentCard\'', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });
  
  it('should be able to return the currentCard', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const showMeTheCard = round.returnCurrentCard(); 

    expect(showMeTheCard).to.deep.equal({
      id: 37,
      question: 'Why is the guitar like this?',
      answers: ['physics', 'hippies', 'cus this is the guitar'],
      correctAnswer: 'cus this is the guitar'
    });
  });

  it('should instantiate a new turn when a guess is made', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('cus this is the guitar');

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should be able to keep track of how many turns have been taken', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('cus this is the guitar');

    expect(round.turns).to.equal(1);
    
    round.takeTurn('transparent');

    expect(round.turns).to.equal(2);
  });

  it('should make the next card the currentcard when a turn is taken', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('cus this is the guitar');

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should be able to evaluate guesses', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    let takeAGuess = round.takeTurn('cus this is the guitar');

    expect(takeAGuess).to.equal('correct!');

    takeAGuess = round.takeTurn('transparent');

    expect(takeAGuess).to.equal('correct!');

    takeAGuess = round.takeTurn('sleeping');

    expect(takeAGuess).to.equal('incorrect!');
  });

  it('should be able to store incorrect guesses', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('hippies');
    
    expect(round.incorrectGuesses).to.deep.equal([37]);
  });
  
  it('should be able to calculate the percentage of questions answered correctly', () => {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('cus this is the guitar');
    round.takeTurn('transparent');
    round.takeTurn('sleeping');
    
    expect(round.calculatePercentageCorrect()).to.equal(66);
  });
});