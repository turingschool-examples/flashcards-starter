const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');
const { createRound, takeTurn, trackGuess, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
    it('should be a function', function(){
        expect(createRound).to.be.a('function')
    })
    it('should create a round and its properties', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        var deck = createDeck([card1, card2, card3])
        var round = createRound(deck)
        expect(round.deck).to.deep.equal([card1, card2, card3]);
        expect(round.currentCard).to.equal(card1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.deep.equal([])
      })  
    })

describe('turn', function(){
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function')
    })
it('should increase the number of turns when a guess is taken', function() {
const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
const deck = createDeck([card1, card2, card3]);
const round = createRound(deck);
expect(round.turns).to.equal(0)
expect(round.currentCard).to.equal(card1)
var turn = takeTurn('sea otter', round)
expect(turn.turns).to.equal(1)
expect(turn.currentCard).to.equal(card2)
var turn2 = takeTurn('spleen', round)
expect(turn2.turns).to.equal(2)
var turn3 = takeTurn('playing with bubble wrap', round)
expect(turn3.turns).to.equal(3)
})
it('should move on to the next card when a guess is taken', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    expect(round.currentCard).to.equal(card1)
    expect(round.turns).to.equal(0)
    var turn = takeTurn('sea otter', round)   
    expect(turn.currentCard).to.equal(card2)
    expect(turn.turns).to.equal(1)
    var turn2 = takeTurn('spleen', round)
    expect(turn2.currentCard).to.equal(card3)
    expect(turn2.turns).to.equal(2)
})
it('should give message', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        
        var deck = createDeck([card1, card2, card3]);
        var round = createRound(deck);
        var turn = takeTurn('sea otter', round)  
        var message = trackGuess('sea otter', round)
        expect(message).to.equal('correct!')
        
    })
    it('should return incorrect if guess is incorrect', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        var turn = takeTurn('spleen', round)  
        var message = trackGuess('spleen', round)
        expect(message).to.equal('incorrect!')
       
})
it('should track incorrect guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    var turn = takeTurn('spleen', round)  
    var message = trackGuess('spleen', round)
    expect(message).to.equal('incorrect!')
    expect(round.incorrectGuesses).to.deep.equal([14])
})
});

describe('round', function() {
    it('should be a function', function(){
        expect(calculatePercentCorrect).to.be.a('function')
    })
    it('should calculate the percentage correct', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        var turn = takeTurn('sea otter', round)  
        var message = trackGuess('sea otter', round)
        var turn = takeTurn('spleen', round)  
        var message = trackGuess('spleen', round)
        var percentCorrect = calculatePercentCorrect(round);
        expect(percentCorrect.correctPercent).to.equal(50)
    })

})
describe('round', function() {
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    })
    
}) 