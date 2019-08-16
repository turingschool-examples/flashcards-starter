const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be a new instance of Round', function() {
    let round = new Round(); 
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the card being played', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck(card);
    const round = new Round(deck);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it('should update the turn count', function () {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()');
    const card3 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');

    const deck = new Deck( [card1, card2, card3] );
    const round = new Round(deck); 

    expect(round.turns).to.equal(0);
    round.takeTurn(' ')
    expect(round.turns).to.equal(1);
    round.takeTurn('dogs');
    expect(round.turns).to.equal(2);
    round.takeTurn('boots & pants');
    expect(round.turns).to.equal(3);
  });

  it('should give feedback of correct or incorrect', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()');
    const card3 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
    
    const deck = new Deck( [card1, card2, card3] );
    const round = new Round(deck);

    expect(round.)

  });
});