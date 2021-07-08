const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  //-----------test set-up
  let card1;
  let card2;
  let card3;
  let deck;
  //do I need cards
  let cards;
  let round;
  let correctGuess;
  let incorrectGuess;
  before(() => {
    card1 = new Card(
      1, 
      'What allows you to define a set of related information using key-value pairs?', 
      ['object', 'array', 'function'], 
      'object'
    );
    card2 = new Card(
      14, 
      'Which iteration method can turn an array into a single value of any data type?', 
      ['reduce()', 'map()', 'filter()'], 
      'reduce()'
    );
    card3 = new Card(
      12, 
      'Which iteration method returns an array of the same length as the original array?', 
      ["map()", "forEach()", "reduce()"], 
      'map()'
    );
     //game.start() passes in deck.cards
     //this does deck.cards...so need to test this way.
    //  this.currentRound = new Round(deck.cards);
    deck = new Deck([card1, card2, card3]);
    //do I use this variable cards? ***
    cards = deck.cards;
    correctGuess = 'object';
    incorrectGuess = 'array';
  });

  beforeEach(() => {
    round = new Round(cards);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  //-----------default property tests
  //wording -should store cards passed in
  it('should store given cards', () => {
    expect(round.cards).to.equal(cards);
  });

  it('should default turns to 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should store the current Card object', () => {
    expect(round.currentCard).to.equal(card1);
    //expect .... to equal (rounds.deck.cards[0])
  });

  it('should default incorrect guesses to an empty array', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
    //test has length of zero.
  });

  //-----------returnCurrentCard() tests
  it('should return the current card', () => {
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(round.currentCard);

    round.turns = 1;

    const currentCard2 = round.returnCurrentCard();

    expect(currentCard2).to.equal(round.currentCard);
  })

  //-----------takeTurn(guess) tests
  it('should be able to store current turn when given guess', () => {
    //should this be round.takeTurn(guess); just have a guess variable for generic.
    //should I be passing in a string since they will have strings passed in?
    round.takeTurn(incorrectGuess);
    
    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should create a new instance of turn with given guess', () => {
    round.takeTurn(incorrectGuess);

    expect(round.currentTurn.guess).to.equal(incorrectGuess);
  });

  it('should store the incorrect guesses by id', () => {
    round.takeTurn(incorrectGuess);
  
    expect(round.incorrectGuesses).to.deep.equal([1]);
      
    round.takeTurn(round.currentCard.correctAnswer);
  
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it('should increment turns after a turn is taken', () => {
    round.takeTurn(incorrectGuess);
   
    expect(round.turns).to.equal(1);

    round.takeTurn(incorrectGuess);

    expect(round.turns).to.equal(2);
  });

  it('should update the current card after a turn is taken', () => {
    round.takeTurn(incorrectGuess);

    expect(round.currentCard).to.equal(card2);

    round.takeTurn(correctGuess);

    expect(round.currentCard).to.equal(card3);
  });

  it('should provide feedback regarding whether the guess is correct or incorrect', () => {
    const feedback = round.takeTurn(correctGuess);

    expect(feedback).to.equal('correct!')

    const feedback2 = round.takeTurn(incorrectGuess);

    expect(feedback2).to.equal('incorrect!')
  })
  
  //-----------calculatePercentCorrect() tests
  it('should return the percentage of correct guesses', () => {
    round.takeTurn(correctGuess);
    
    let percentCorrect = round.calculatePercentCorrect();
    
    expect(percentCorrect).to.equal(100);

    round.takeTurn(incorrectGuess);
    round.takeTurn(incorrectGuess);
 
    percentCorrect = round.calculatePercentCorrect();

    expect(percentCorrect).to.equal(33);
  });

})