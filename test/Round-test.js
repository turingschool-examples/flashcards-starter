const chai = require('chai');
const expect = chai.expect;

const { createRound, createDeck, countCards, takeTurn, calculatePercentageCorrect, endRound} = require('../src/round');

const cards = require('../src/data')
const deck = createDeck(cards.prototypeData)

describe('createRound', function() {
  
  it('should create a round object', function () {
    const round = createRound(deck);
    expect(createRound(deck)).to.be.a('object');
  });


  it('should have a deck property that holds the deck object', function() {
    expect(round.deck).to.equal(cards.prototypeData)
  }) 
  
  it('should start turns at 0', function() {
    expect(round.turns).to.equal(0)
  })
  
  it('should start the round with no incorrect guesses', function() {
    expect(round.incorrectGuesses.length).to.equal(0)
  })
})

describe('createDeck', function() {
  it('should create a deck of cards and count them', function () {
    expect(countCards(deck)).to.deep.equal(30)
  })
})

describe('takeTurn', function() {
  const round = createRound(deck)
  it('should increment turns', function() {
      takeTurn('whale', round)
      expect(round.turns).to.equal(1)
    })  

    it('should push incorrect answer id\'s into incorrectGuesses array', function() {

      expect(round.incorrectGuesses).to.deep.equal([1])
      })
      
      it('should change the rounds currentCard to the next card in the deck', function () {
        expect(round.currentCard).to.equal(deck.cards[0]);
    })  
      it('should return feedback on in the answer is correct or incorrect', function() {
       const feedback = takeTurn('whale', round)
        expect(feedback).to.equal('Incorrect!')
    })
})

describe('calculatePercent', function() {
  
  it('should calculate the percentage of correct guesses', function() {
    const round = createRound(deck)
    takeTurn('object', round);
    takeTurn('array', round);
    takeTurn('mutator method', round)
    const percent = calculatePercentageCorrect(round)
    expect(percent).to.equal('100%')
  })
})

describe('endRound', function() {
  
  it('should print the end-game message', function () {
    const round = createRound(deck)
    takeTurn('object', round);
    takeTurn('array', round);
    takeTurn('mutator method', round)
    const gameOverMessage = endRound(round)
    expect(gameOverMessage).to.equal(console.log('** Round over! ** You answered 100% of the questions correctly!'));
  })
})