const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let cards;
  let round;
  let guess1;
  let guess2;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'], 'reduce()');
    card3 = new Card(12, 'Which iteration method returns an array of the same length as the original array?', ["map()", "forEach()", "reduce()"], 'map()');
    deck = new Deck([card1, card2, card3]);
    cards = deck.cards;
    round = new Round(cards);
    guess1 = 'object';
    guess2 = 'array';
    // const incorrectGuess1 = round.deck[0].id;
    // const incorrectGuess2 = round.deck[1].id;
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    // const round = new Round(cards);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store a deck', () => {
    // const round = new Round(cards);

    expect(round.deck).to.equal(cards);
  });

  it('should default to having 0 turns', () => {
    // const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should store a current card', () => {
    // const round = new Round(cards);
    expect(round.currentCard).to.equal(card1);
  });

  //how do I word this it to say should be an empty array
  it('should default incorrect guesses as empty', () => {
    // const round = new Round(cards);
    expect(round.incorrectGuesses).to.deep.equal([]);

  });

  it('should store incorrect guesses', () => {
    // const round = new Round(cards);
    const incorrectGuess1 = round.deck[0].id;
    const incorrectGuess2 = round.deck[1].id;

    round.incorrectGuesses.push(incorrectGuess1);
    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.incorrectGuesses.push(incorrectGuess2);
    //is this the correct way to write this?
    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should return the current card', () => {
    // const round = new Round(cards);

    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(round.currentCard);

    round.turns = 1;

    const currentCard2 = round.returnCurrentCard();

    expect(currentCard2).to.equal(round.currentCard);
  })


  it('should be able to return a new instance of turn when a guess is made', () => {
    //move this guess variable.
    // const guess2 = 'array';
    // const round = new Round(cards);
    round.takeTurn(guess2);
    
    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it.skip('should create a new instance of turn passing in a guess as an argument', () => {
    // const round = new Round(cards);
    // const guess2 = 'array';
    console.log('round.currentTurn', round.currentTurn);
    console.log('round', round);
  

    round.takeTurn(guess2);

    console.log('round.currentTurn', round.currentTurn)

    expect(round.currentTurn.guess).to.equal(guess2);
  });

  it('should increment turns after a turn is taken', () => {
    // const round = new Round(cards);
    // const guess2 = 'array';
    console.log('currentcard testing', round.currentCard);
    console.log('round.turns', round.turns);
    console.log('round', round);
   
    round.takeTurn(guess2);
   

    expect(round.turns).to.equal(1);
  });

  it('should update the current card after a turn is taken', () => {
    // const round = new Round(cards);
    // const guess2 = 'array';
    
    round.takeTurn(guess2);

    expect(round.currentCard).to.equal(card2);
  });

  it('should provide feedback regarding whether the guess is correct or incorrect', () => {
    // const round = new Round(cards);
    // const guess1 = 'object';
    // const guess2 = 'array';
    
    const feedback = round.takeTurn(guess1);

    expect(feedback).to.equal('correct!')

    const feedback2 = round.takeTurn(guess2);

    expect(feedback2).to.equal('incorrect!')
  })

  it('should store incorrect guesses by id', () => {
    // const round = new Round(cards);

    // const guess2 = 'array';
    
    round.takeTurn(guess2);
 
    expect(round.incorrectGuesses).to.include(round.currentCard.id);
  })

})