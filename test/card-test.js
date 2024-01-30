const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurns, changeCard, incorrectGuess } = require('../src/card');


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

describe('response', function() {
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return incorrect if guess is not correct', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const response = evaluateGuess('array', card);

    expect(response).to.equal('incorrect!')
  })

  it('should return correct if guess is correct', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const response = evaluateGuess('object', card);

    expect(response).to.equal('correct!')

  })
})

  describe('deck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    })

    it('should create a deck of cards', function() {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array') 
        var allCards = [card1, card2]
        const deck = createDeck(allCards);

        expect(deck[0]).to.deep.equal(card1);
        expect(deck[1]).to.deep.equal(card2)

    })
    it('should count the number of cards in a deck', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array') 
      var allCards = [card1, card2]
      const deck = createDeck(allCards);

      const numOfCards = countCards(deck);
      expect(numOfCards).to.equal(2)
    })
})

describe('round', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function')
  })
  it('should create a round and its propertes', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array') 
    var allCards = [card1, card2]
    const deck = createDeck(allCards);
    const round = createRound(deck, card1, 0)

    expect(round.deck).to.deep.equal([card1, card2]);
    expect(round.card).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([])
  })  
})

describe('turn', function() {
  it('should be a function', function() {
    expect(takeTurns).to.be.a('function')
  })
  it('should increase the turn count with each guess', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array') 
    var allCards = [card1, card2]
    const deck = createDeck(allCards);
    const round = createRound(deck, card1, 0)

    var numOfTurns = takeTurns(round);
    expect(numOfTurns.turns).to.equal(1)
  })
  })

  describe('changeCard', function() {
    it('should be a function', function(){
      expect(changeCard).to.be.a('function')
    })

  it('should move on to the next card', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array') 
    var allCards = [card1, card2]
    const deck = createDeck(allCards);
    const round = createRound(deck, card1, 0)
    var numOfTurns = takeTurns(round);
    
    var nextCard = changeCard(round)
    expect(nextCard.card.id).to.equal(2)
  })
  })

  describe('incorrectGuess', function() {
    it('should be a function', function() {
      expect(incorrectGuess).to.be.a('function')
    })
    it('should add card id of wrong guess to incorrectGuesses', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array') 
    var allCards = [card1, card2]
    const deck = createDeck(allCards);
      const round = createRound(deck, card1, 0)
      const storeGuess = incorrectGuess('object', round)
      expect(storeGuess.incorrectGuesses).to.deep.equal([1])
    })
  })