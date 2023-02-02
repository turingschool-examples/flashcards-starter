const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn');
const Round = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck')

describe('Round', function() {
    let deck;
    let round;
    

    beforeEach(function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = new Deck([card1, card2, card3]);
        
    })

    it('should have a method that returns the current card being played', function() {
        assert.deepEqual(deck.cards[0].id, 1)

    })

    it('should have a method that instantiates a new Turn', function() {
        const turn = new Turn();
        assert.instanceOf(turn, Turn)
    })

    it('should have a method that updates the turns count each time', function() {
        round = new Round();

        round.takeTurn('purple');
        round.takeTurn('blue');
        round.takeTurn('yellow');
        assert.equal(round.turns, 3)
    })

    
}) 