const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
    it('should be a function', function(){
    expect(createRound).to.be.a('function')
    })
    it('should create a round and its properties', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck)
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([])
    })  
})

describe('beforeEach', () => {
    var card1; 
    var card2; 
    var card3; 
    var deck; 
    var round; 

    beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
    });

describe('turn', function(){
    it('should be a function', function() {
    expect(takeTurn).to.be.a('function')
    })

    it('should return correct if guess is correct', function() {
    expect(takeTurn('sea otter', round)).to.equal('correct!')
    })

    it('should return incorrect if guess is incorrect', function() {
    expect(takeTurn('sea otter', round) ).to.equal('correct!')  
     expect(takeTurn('spleen', round) ).to.equal('incorrect!')
    })

    it('should track incorrect guesses', function() {
    expect(takeTurn('sea otter', round)).to.equal('correct!')
    expect(takeTurn('spleen', round) ).to.equal('incorrect!')
    expect(round.incorrectGuesses).to.deep.equal([14])
    })

    it('should increase number of turns with each question', function() {
    expect(takeTurn('sea otter', round)).to.equal('correct!')
    expect(takeTurn('spleen', round) ).to.equal('incorrect!')
    expect(round.turns).to.equal(2)
    })
});

describe('percentCorrect', function() {
    it('should be a function', function(){
    expect(calculatePercentCorrect).to.be.a('function')
    })

    it('should calculate the percentage correct', function() {
    takeTurn('sea otter', round)  
    takeTurn('spleen', round)  
    const percentCorrect = calculatePercentCorrect(round);
    expect(percentCorrect).to.equal(50)
    })
})
});

describe('endRound', function() {
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    })
    
}) 