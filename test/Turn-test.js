const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turns', function(){

    it('returnGuess shouuld return the guess', function(){
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug',card);
        expect(turn.returnGuess()).to.equal('pug');
    })
    it('returnCard should return the card',function(){
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.returnCard()).to.equal(card)
    })
    it('should return a boolean indicating if the user\'s guess matches the correct answer', function(){
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        const turn2 = new Turn('sea otter', card);
        expect(turn.evaluateGuess()).to.equal(false);
        expect(turn2.evaluateGuess()).to.equal(true);
    })
    it('should return either \'incorrect\' or \'correct\' based on whether the guess is correct or not', function(){
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        var turn = new Turn('pug', card);
        var turn2 = new Turn('sea otter', card);
        expect(turn.giveFeedback()).to.equal('incorrect!')
        expect(turn2.giveFeedback()).to.equal('correct!')
    })
});