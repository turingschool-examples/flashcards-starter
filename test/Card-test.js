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
  });

  it('should help evaluate a turn, by evaluating if a guess is correct or not', function() {
    var turn = evaluateGuess('object', 'object');
    expect(turn).to.equal('correct!')

    var turn2 = evaluateGuess('object', 'array')
    expect(turn2).to.equal('incorrect!')
  })
})

describe('deck', function() {
  it('should create a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should be created with an array of card objects', function() {
    var card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    var card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    var card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')

    var deck = createDeck([card1, card2, card3])
    expect(deck).to.equal(deck)
  });

  it('should know how many cards are in the deck', function() {
    var card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    var card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    var card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')

    var cardCount = countCards([card1, card2, card3])
    expect(cardCount).to.equal(3)
  });
})

describe('round', function() {
  var card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    var card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    var card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')

  it('should create a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round object and its properties', function() {
    var deck = createDeck([card1, card2, card3])
    var round = createRound(deck)
    
    expect(round.deck).to.equal(deck)
    expect(round.currentCard).to.equal(card1)
    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should update the turns count, evaluate guesses, give feedback, and store ids of incorrect guesses', function() {
    var deck = createDeck([card1, card2, card3])
    var round = createRound(deck)
    var turn1 = takeTurn('guess', round)

    expect(round.turns).to.equal(1)
    expect(round.currentCard).to.equal(card2)

    var turn2 = takeTurn('eggplant', round)
    expect(round.turns).to.equal(2)
    expect(round.currentCard).to.equal(card3)

  });

  it('should store the id of cards with incorrect guesses', function() {
    var deck = createDeck([card1, card2, card3])
    var round = createRound(deck)
    var round1 = takeTurn('airplane', round)
    expect(round1.incorrectGuesses.length).to.equal(1)

    var round2 = takeTurn('Fitzgerald', round)
    expect(round.incorrectGuesses.length).to.equal(1)
  })

  it('should create a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  })

  it('should calculate and return the percentage of correct guesses', function() {
    var deck = createDeck([card1, card2, card3])
    var round = createRound(deck)

    var turn1 = takeTurn('eggplant', round)
    var percent = calculatePercentCorrect(round)
    expect(percent).to.equal(0)
    
    var turn1 = takeTurn('Fitzgerald', round)
    var percent = calculatePercentCorrect(round)
    expect(percent).to.equal(50)
  })

  it('should create a function', function() {
    expect(endRound).to.be.a('function');
  })

  it('should print ** Round over! ** You answered <>% of the questions correctly!', function() {
    var deck = createDeck([card1, card2, card3])
    var round = createRound(deck)

    var turn1 = takeTurn('eggplant', round)
    var percent = calculatePercentCorrect(round)
    var endOfRoundInfo = endRound(round)
    expect(endOfRoundInfo).to.equal('** Round over! ** You answered 0% of the questions correctly!')

    var turn2 = takeTurn('Fitzgerald', round)
    var percent = calculatePercentCorrect(round)
    var endOfRoundInfo = endRound(round)
    expect(endOfRoundInfo).to.equal('** Round over! ** You answered 50% of the questions correctly!') 
  })
})