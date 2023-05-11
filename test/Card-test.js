const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countDeck, createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/card');

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
    expect(evaluateGuess).to.be.a('function')
  });

  it('should return correct if the guess is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = 'object'
    let evaluate = evaluateGuess(guess,card.correctAnswer)
    expect(evaluate).to.deep.equal('correct!')
  });

  it('should return incorrect if the guess is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = 'array'
    let evaluate = evaluateGuess(guess,card.correctAnswer)
    expect(evaluate).to.deep.equal('incorrect!')
  });

});

describe('deck', function() {
  it('should create an array of card objects', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-seperated list of related values?', ['array','object','function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let cards = [card1,card2,card3];
    let deck = createDeck(cards)
  expect(createDeck([card1,card2,card3])).to.deep.equal([card1,card2,card3])
  });
});

describe('countDeck', function() {
  it('should count the number of cards in the deck object', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-seperated list of related values?', ['array','object','function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let cards = [card1,card2,card3];
    let deck = createDeck(cards)
    countDeck(deck)
    expect(countDeck(deck)).to.deep.equal(3)
  });
});

describe('create round', function() {
  it('should return a round object', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-seperated list of related values?', ['array','object','function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let cards = [card1,card2,card3];
    let deck = createDeck(cards)
    const round = createRound(deck)
    expect(round.deck).to.deep.equal(deck)
    expect(round.currentCard).to.deep.equal(deck[0])
    expect(round.turns).to.deep.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
   
  })
})

describe('take turn', function() {
  it('update turn counts, evaluate guesses, give feedback, and store id of incorrect guesses', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-seperated list of related values?', ['array','object','function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let cards = [card1,card2,card3];
    let deck = createDeck(cards)
    const round = createRound(deck)
    takeTurn('array', round)
    expect(round.turns).to.deep.equal(1)
    expect(round.incorrectGuesses).to.deep.equal([1])
    expect(round.currentCard).to.deep.equal({id: 2, question:'What is a comma-seperated list of related values?', answers:['array','object','function'], correctAnswer:'array'})
    
  })
})

describe('calculatePercentage', function() {
  it('should calculate percentage of correct guesses', function() {
   
    var round = {
      turns: 2,
      incorrectGuesses: [1]
  }

    var totalCorrect = calculatePercentCorrect(round)
    expect(totalCorrect).to.deep.equal(50)
  })
})

describe('endRound', function() {
  it('prints round over and shows percent andswered correct after each round', function() {
    var round = {
      turns: 2,
      incorrectGuesses: [1]
  }
    // var totalCorrect = calculatePercentCorrect(round)
    let endMessage = endRound(round)
    expect(endMessage).to.equal('**Round over!** You answered 50% of the questions correctly!')
  })
})