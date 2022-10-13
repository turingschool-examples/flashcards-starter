const chai = require('chai');
const Card = require('../src/Card.js');
const expect = chai.expect;
const data = require('../src/data.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');

describe('Round', function () {
    
    it('Should be a function', function () {
       
        expect(Round).to.be.a('function')
    });

    it('Should initialize with a new deck', function() {
        
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        expect(round1.deck).to.equal(deck)

    });

    it('Should be able to show the current card being played', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        const turn = new Turn('sea otter', card1)
        round1.returnCurrentCard()
        
        expect(round1.returnCurrentCard()).to.equal(card1)
    });
    
    it('Should be able to create a new instance of turn and count how many turns have been taken', function() {

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        const deck = new Deck([card1])
        const round1 = new Round(deck)
        const turn = new Turn('sea otter', card1)

        round1.takeTurn(turn)
        expect(round1.turns).to.equal(1)   
    })

    it('Should be able to evaluate the guess and update the turns regardless', function() {

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        const turn = new Turn('sea otter', card1)
        const turn2 = new Turn('gallbladder', card1)

        expect(round1.takeTurn(turn)).to.equal('That is correct!')
        expect(round1.takeTurn(turn2)).to.equal('That is incorrect!')
        expect(round1.turns).to.equal(2)
    });

    it('Should go to the next card after a turn is done', function(){

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        const turn = new Turn('sea otter', card1)
        round1.takeTurn(turn)

       

        expect(round1.currentCard).to.deep.equal(card2)
    });

    it('Should store the incorrect guesses in a new array', function() {

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        const turn = new Turn('gallbladder', card1)
        round1.takeTurn(turn)
        
        expect(round1.incorrectGuesses).to.deep.equal([card1.id])

    });
    
    it('Should have calculate the percent of correct guesses', function() {

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        const turn = new Turn('gallbladder', card1)
        round1.takeTurn(turn)

        round1.calculatePercentCorrect()

        expect(round1.calculatePercentCorrect()).to.equal(33)
    });

    it('Should have a method to end the round and display the percentage correct', function() {

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        
        const card3 = (12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')

        const deck = new Deck([card1, card2, card3])
        const round1 = new Round(deck)
        const turn = new Turn('gallbladder', card1)
        round1.takeTurn(turn)

        expect(round1.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
    });
});