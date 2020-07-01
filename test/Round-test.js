const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should take in a deck of cards', () => {
    const card1 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    const card2 = new Card(42, 'What color is cooked spaghetti in space?', ['yellow', 'black', 'transparent'], 'transparent');
    const card3 = new Card(90, 'What time of day is the best time for dreams', ['tomorrow', 'all day', 'sleeping'], 'tomorrow');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck[1].answer).to.equal('transparent');
  });

  it.skip('should make the first card in the deck the \'currentCard\'', () => {
    const card1 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    const card2 = new Card(42, 'What color is cooked spaghetti in space?', ['yellow', 'black', 'transparent'], 'transparent');
    const card3 = new Card(90, 'What time of day is the best time for dreams', ['tomorrow', 'all day', 'sleeping'], 'tomorrow');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  });
  
  it.skip('should be able to return the currentCard', () => {
    const card1 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    const card2 = new Card(42, 'What color is cooked spaghetti in space?', ['yellow', 'black', 'transparent'], 'transparent');
    const card3 = new Card(90, 'What time of day is the best time for dreams', ['tomorrow', 'all day', 'sleeping'], 'tomorrow');

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

  it.skip('should instantiate a new turn when a guess is made', () => {
    const card1 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    const card2 = new Card(42, 'What color is cooked spaghetti in space?', ['yellow', 'black', 'transparent'], 'transparent');
    const card3 = new Card(90, 'What time of day is the best time for dreams', ['tomorrow', 'all day', 'sleeping'], 'tomorrow');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('cus this is the guitar');

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it.skip('should be able to keep track of how many turns have been taken', () => {
    const card1 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    const card2 = new Card(42, 'What color is cooked spaghetti in space?', ['yellow', 'black', 'transparent'], 'transparent');
    const card3 = new Card(90, 'What time of day is the best time for dreams', ['tomorrow', 'all day', 'sleeping'], 'tomorrow');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('cus this is the guitar');

    expect(round.turns).to.equal(1);
  });

  it.skip('should be able to store incorrect guesses', () => {
    const card1 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    const card2 = new Card(42, 'What color is cooked spaghetti in space?', ['yellow', 'black', 'transparent'], 'transparent');
    const card3 = new Card(90, 'What time of day is the best time for dreams', ['tomorrow', 'all day', 'sleeping'], 'tomorrow');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    
    round.takeTurn('cus this is the guitar');

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

});