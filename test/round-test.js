const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/card');
const { beforeEach } = require('mocha');

describe('round', function () {
  let testCard1, testCard2, testCard3, testDeck, testRound;
  beforeEach(function () {
    testCard1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    testCard2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    testCard3 = createCard(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()');

    testDeck = createDeck([testCard1, testCard2, testCard3]);

    testRound = createRound(testDeck);

  });


  it('should create a round object with deck property', function () {

    expect(testRound.deck).to.deep.equal([testCard1, testCard2, testCard3]);
  });

  it('should create a currentCard property that has a default value of the first card in the deck', function () {

    expect(testRound.currentCard).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should create a turns property that starts at 0', function () {

    expect(testRound.turns).to.equal(0);

  });

  it('should create an incorrectGuesses property that starts as an empty array', function () {

    expect(testRound.incorrectGuesses).to.deep.equal([]);

  });
});

describe('take turn', function () {
  let testCard1, testCard2, testCard3, testDeck, testRound;
  beforeEach(function () {
    testCard1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    testCard2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    testCard3 = createCard(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()')

    testDeck = createDeck([testCard1, testCard2, testCard3]);

    testRound = createRound(testDeck);

  });

  it('should update the turns count when a guess is made', function () {

    const testGuess1 = 'guess';
    takeTurn(testGuess1, testRound);
    expect(testRound.turns).to.equal(1);

  });

  it('should update the current card to the next card in the deck', function () {

    const testGuess2 = 'guess2';
    const testGuess3 = 'guess3';
    takeTurn(testGuess2, testRound);
    takeTurn(testGuess3, testRound);

    expect(testRound.currentCard).to.deep.equal({
      "id": 11,
      "question": "Which iteration method returns a new array with all elements that match a given condition?",
      "answers": ["filter()", "find()", "map()"],
      "correctAnswer": "filter()"
    });
  });

  it('should evaluate whether a guess is correct and store incorrect guesses into an array', function () {

    const testGuess4 = 'guess4';
    const testGuess5 = 'guess5';
    const correctGuess = 'filter()';
    takeTurn(testGuess4, testRound);
    takeTurn(testGuess5, testRound);
    takeTurn(correctGuess, testRound);

    expect(testRound.incorrectGuesses).to.deep.equal([1, 3]);
  });

  it('should return feedback if guess is correct or incorrect', function () {
    const testGuess4 = 'guess4';
    const testGuess5 = 'guess5';
    const correctGuess = 'filter()';

    const testTurn1 = takeTurn(testGuess4, testRound);
    const testTurn2 = takeTurn(testGuess5, testRound);
    const testTurn3 = takeTurn(correctGuess, testRound);

    expect(testTurn1).to.equal('Incorrect');
    expect(testTurn2).to.equal('Incorrect');
    expect(testTurn3).to.equal('Correct');

  });

  describe('calculate percent correct', function () {
    let testCard1, testCard2, testCard3, testDeck, testRound;
    beforeEach(function () {
      testCard1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      testCard2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
      testCard3 = createCard(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()')

      testDeck = createDeck([testCard1, testCard2, testCard3]);

      testRound = createRound(testDeck);
    });
  });

  it('should calculate and return percentages of correct guesses', function () {
    const testGuess4 = 'guess4';
    const testGuess5 = 'guess5';
    const correctGuess = 'filter()';

    takeTurn(testGuess4, testRound);
    takeTurn(testGuess5, testRound);
    takeTurn(correctGuess, testRound);

    const percentCorrect = calculatePercentCorrect(testRound);

    expect(percentCorrect).to.equal(33.33);
  });
});

describe('end round', function () {
  let testCard1, testCard2, testCard3, testDeck, testRound;
  beforeEach(function () {
    testCard1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    testCard2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    testCard3 = createCard(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()')

    testDeck = createDeck([testCard1, testCard2, testCard3]);

    testRound = createRound(testDeck);

  });
  it('should signify end of round by printing a message to console', function () {

    const testGuess4 = 'guess4';
    const testGuess5 = 'guess5';
    const correctGuess = 'filter()';

    takeTurn(testGuess4, testRound);
    takeTurn(testGuess5, testRound);
    takeTurn(correctGuess, testRound);
    
    const endRoundMessage = endRound(testRound);
    expect(endRoundMessage).to.equal(`** Round over! ** You answered 33.33% of the questions correctly`)
  });
});