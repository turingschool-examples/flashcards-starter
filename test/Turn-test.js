const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    let card;
    let turn;

    beforeEach(function() {
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        turn = new Turn('pug', card);
    })

    // let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // let turn = new Turn('pug', card);

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn)
    })
   
    it('should return a user\'s guess', function() {
        expect(turn.guess).to.be.a('string');
        expect(turn.guess).to.equal('pug');
    })

    it('should return the current card', function() {
        expect(turn.card).to.be.an.instanceOf(Card);
    })

    it('should evaluate the user\'s guess', function() {
        expect(turn.evaluateGuess()).to.equal(false);
    })

    it('should be give user feedback on their guess', function() {
        expect(turn.giveFeedback()).to.equal('incorrect!');
    }) 
});