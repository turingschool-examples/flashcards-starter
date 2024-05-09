const chai = require('chai');
const expect = chai.expect;
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const {createDeck} = require('../src/deck')

describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create round object with multiple properties', function() {
    const deck = createDeck();
    const currentCard = deck[0];
    const round = createRound(deck, currentCard, 0, []);
    
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(currentCard);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  
});

describe('takeTurn', function() {
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should update turn count and current card when the guess is correct', function() {
    const deck = createDeck();
    const round = createRound(deck);
    const correctGuess = round.currentCard.correctAnswer;
    const initialTurn = round.turns;

    takeTurn(correctGuess, round)


    expect(round.turns).to.equal(initialTurn + 1);
    expect(round.currentCard).to.equal(deck[1])
  });  

  it('should update turn count and current card when the guess is incorrect', function() {
    const deck = createDeck();
    const round = createRound(deck);
    const initialTurn = round.turns;
    const incorrectGuess = 'Incorrect';

    takeTurn(incorrectGuess, round);

    expect(round.turns).to.equal(initialTurn + 1);
    expect(round.currentCard).to.equal(deck[1]);
  });

  it('should store incorrect guesses in the round object', function() {
    const deck = createDeck();
    const round = createRound(deck);
    const incorrectGuess = 'Incorrect';

    takeTurn(incorrectGuess, round);

    expect(round.incorrectGuesses).to.have.lengthOf(1);
    expect(round.incorrectGuesses[0]).to.equal(deck[0].id);
  });

  it('should return "Incorrect!" when the guess is incorrect', function() {
    const deck = createDeck();
    const round = createRound(deck);
    const incorrectGuess = 'Incorrect';

    const result = takeTurn(incorrectGuess, round);

    expect(result).to.equal('Incorrect!');
  });

  it('should return "Correct!" when the guess is correct', function() {
    const deck = createDeck();
    const round = createRound(deck);
    const correctGuess = round.currentCard.correctAnswer;

    const result = takeTurn(correctGuess, round);

    expect(result).to.equal('Correct!');
  });
  
});

describe('calculatePercentCorrect', function() {
  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate percentage of correct answers', function() {
    const round1 = {turns: 5, incorrectGuesses: [] };
    const round2 = {turns: 30, incorrectGuesses: [1, 2, 3]}

    expect(calculatePercentCorrect(round1)).to.equal(100);
    expect(calculatePercentCorrect(round2)).to.equal(90);
  });  
});

describe('endRound', function(){
  it('should be a function', function(){
    expect(endRound).to.be.a('function')
  });

  it('should print out result that includes percentage of correctly guessed', function(){
    const round1 = {turns: 30, incorrectGuesses: []};
    const round2 = {turns: 30, incorrectGuesses: [1, 2, 3, 4, 5, 6]}

    expect(endRound(round1)).to.equal('** Round Over! ** You answered 100% of the questions correctly!');
    expect(endRound(round2)).to.equal('** Round Over! ** You answered 80% of the questions correctly!');
  })
})