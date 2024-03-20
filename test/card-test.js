const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  })
  it('should return correct when guess is correct', function() {
    const guess = "array"
    const correctAnswer = "array"
    const result = evaluateGuess(guess, correctAnswer)
    expect(result).to.equal('Correct!')
  })
  it('should return incorrect if the guess is not the correct answer', function() {
    const guess = "object"
    const correctAnswer = "array"
    const result = evaluateGuess(guess, correctAnswer)
    expect(result).to.equal("Incorrect :(")
  })
})

describe('deck', function() {
  it('should be a function', function(){
    expect(createDeck).to.be.a('function')
  })
  it('should return an object', function(){
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const cards = [card1, card2, card3]
    const result = createDeck(cards)
    expect(result).to.be.an('object')
  })
  it('should count cards in the deck', function() {
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const deck = [card1, card2, card3]
    const numCards = countCards(deck)
    expect(numCards).to.equal(3)
  })
})

describe('rounds', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function')
  })
  it('should create an object', function() {
    const round = createRound(deck, 3, 0, [])
    expect(round).to.be.an('object')
  })
})

describe('takeTurn', function(){
  let round;
  beforeEach(function() {
    round = {
      turns: 0,
      incorrectGuesses: [],
      deck: {
        id: 1,
        correctAnswer: 5
      }
    };
  });
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });
  it('should update turn count', function(){
    takeTurn(3, round);
    expect(round.turns).to.equal(1);
  });
  it('should add deck id to incorrectGuesses if guess is incorrect', function(){
    takeTurn(3, round);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
  it('should not add deck id to incorrectGuesses if guess is correct', function(){
    takeTurn(5, round);
    expect(round.incorrectGuesses).to.be.empty;
  });
  it('should return "correct" if the guess is correct', function() {
    const result = takeTurn(5, round);
    expect(result).to.equal("Correct!");
  });
  it('should return "incorrect" if the guess is incorrect', function() {
    const result = takeTurn(3, round);
    expect(result).to.equal("Incorrect :(");
  });
});

describe('calculatePercentCorrect', function() {
  it('should return 100% when all guesses are correct', function() {
      const round = {
          turns: 10,
          incorrectGuesses: []
      };
      expect(calculatePercentCorrect(round)).to.equal(100);
  });
  it('should return 0% when all guesses are incorrect', function() {
      const round = {
          turns: 10,
          incorrectGuesses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      };
      expect(calculatePercentCorrect(round)).to.equal(0);
  });
  it('should return the correct percentage when there are some incorrect guesses', () => {
      const round = {
          turns: 10,
          incorrectGuesses: [3, 5, 7]
      };
      expect(calculatePercentCorrect(round)).to.equal(70); // 7 out of 10 turns are correct
  });
  it('should return 0% when no turns are made', function() {
      const round = {
          turns: 0,
          incorrectGuesses: []
      };
      expect(calculatePercentCorrect(round)).to.equal(0);
  });
});

describe('end round', function() {
  it('should be a function', function() {
    expect(endRound).to.be.a('function')
  })
  it('should return the percentage correct', function() {
    const round = {
      turns: 10,
      incorrectGuesses: [3, 5, 7]
    }
    expect(endRound(round)).to.equal('**ROUND OVER** You answered 70% of the questions correctly!')
  })
})