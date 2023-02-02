const chai = require('chai');
const assert = chai.assert;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function() {
    let card;
    let turn;

     beforeEach(function() {
         turn = new Turn('pug', card);
         card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
     })

    it('should be a function', function() {
        assert.isFunction(Turn);
    });

    it('should take in a guess', function() {
        assert.equal(turn.guess, 'pug')
    })

    it('should have a card', function() {
         assert.equal(card.id, 1)
         assert.deepEqual(card.answers, ['sea otter', 'pug', 'capybara'])
    })

    it('should have a method that returns the guess', function() {
        assert.equal(turn.returnGuess(), 'pug');
    })

    it('should have a method that returns the card', function() {
        assert.equal(turn.returnCard(), turn.card)
    })

    it('should have a method that evaluates if guess is correct', function() {
        assert.equal(turn.evaluateGuess(), false)
    })

    it('should have a method that informs the player if their guess was correct', function() {
        assert.equal(turn.givesFeedback(), 'incorrect')
    })
});