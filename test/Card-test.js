const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess, createDeck, countDeck, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/card');
const { sampleData } = require('../src/sub-data');


// describe("Tests with beforeEach", function () {
//   let testRan = 0;
//    let round = null
//   beforeEach(function () {
//     testRan++;
//    let round = round function 
//     console.log("Intialising...Test" + testRan);
//   });
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

describe('evaluateGuess', function(){
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate if correct is true', function(){
    const newCard = createCard(1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object" )
    const answer = evaluateGuess('object', newCard.correctAnswer)
    expect(answer).to.equal('Correct!')
  });

  it('should evaluate if answer is incorrect', function(){
    const newCard = createCard(1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object" );
    const answer = evaluateGuess('array', newCard.correctAnswer);
    expect(answer).to.equal('Incorrect!');
  })
});

describe('createDeck', function(){
  it('should be a function', function(){
    expect(createDeck).to.be.a('function');
  });

  it('should be able to tell you which cards are in the deck', function(){
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object" );
    const card2 = createCard(2,"What is a comma-separated list of related values?",["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method");
    
    const deck = createDeck([card1, card2, card3]);
    
    expect(deck[0].id).to.equal(1);
    expect(deck[1].id).to.equal(2);
    expect(deck[2].id).to.equal(3);
  });
});

describe('countDeck', function(){
  it('should be a function', function(){
    expect(countDeck).to.be.a('function');
  });

  it('should count how many cards are in the deck', function(){
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object" );
    const card2 = createCard(2,"What is a comma-separated list of related values?",["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method");
    const deck = createDeck([card1, card2, card3]);
  
    let countCards = countDeck(deck)
  
    expect(countCards).to.equal(3);
  })
});

describe('createRound', function(){
  it('should be a function', function(){
    expect(createRound).to.be.a('function');
  });

  it('should create a round with properties', function(){
    var round = createRound(sampleData)
    expect(round.deck).to.equal(sampleData);
    expect(round.currentCard).to.equal(sampleData[0]);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe('takeTurn', function(){
  it('should be a function', function(){
    expect(takeTurn).to.be.a('function');
  });
  it('should be able to take a turn and return the result', function(){
    const round = createRound(sampleData)

    const turn1 = takeTurn('object', round)
    expect(turn1).to.equal('Correct!')

    const turn2 = takeTurn('function', round)
    expect(turn2).to.equal('Incorrect!')

  });

  it('should evaluate what turn it is on', function(){
    const round = createRound(sampleData) 
    
    const turn1 = takeTurn('object', round)
    expect(round.turns).to.equal(1)
    const turn2 = takeTurn('object', round)
    expect(round.turns).to.equal(2)
  })
});
describe('calculatePercentCorrect', function(){
  it('should be a function', function(){
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate the percentage of correct answers', function(){
    const round = createRound(sampleData)
    const turn1 = takeTurn('object', round)
    const turn2 = takeTurn('object', round)
    const percentageCorrect = calculatePercentCorrect(round);

    expect(percentageCorrect).to.equal(50)
  });
});

describe('endRound', function(){
  it('should be a function', function(){
    expect(endRound).to.be.a('function');
  });

  it('should print when the game is over', function(){
    const round = createRound(sampleData);
    const percentageCorrect = calculatePercentCorrect(round);
    const turn1 = takeTurn('object', round);
    const turn2 = takeTurn('object', round);
    const roundDone = endRound(round);
    expect(roundDone).to.equal('** Round over! ** You answered 50% of the questions correctly!');
});
  });

// });
