const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', function () {
    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store a string for user\'s guess', function() {
        const turn = new Turn('guess'); 
        expect(turn.userGuess).to.equal('guess');
    });

    it('should store an object for current card', function() {
        const card = new Card(1, 'What?', ['Random answer 1', 'Random answer 2', 'Random answer 3'], 'Random answer 1');
        const turn = new Turn('Random answer 1', card);
        expect(turn.card).to.deep.equal(card);
    })

    it('should return user\'s guess', function () {
        const card = new Card(1,'Who?'['You', 'Me', 'Dupree'], 'You');
        const turn = new Turn('Dupree', card);
        expect(turn.returnGuess()).to.deep.equal('Dupree');
    });

    it('should return a card', function() { 
        const card = new Card(1,'When?',['Tomorrow', 'Yesterday', 'Next Friday'],'Yesterday');
        const turn = new Turn('Yesterday',card);
        expect(turn.returnCard()).to.deep.equal(card);
    })

    it('should evaluate if user\'s guess is correct', function() {
        const card = new Card(1,'When?',['Tomorrow', 'Yesterday', 'Next Friday'],'Yesterday');
        const turn = new Turn('Yesterday',card);
        expect(turn.evaluateGuess()).to.deep.equal(true);
    })

    it('should evaluate if user\'s guess is incorrect', function() {
        const card = new Card(1,'When?',['Tomorrow', 'Yesterday', 'Next Friday'],'Yesterday');
        const turn = new Turn('Tomorrow', card);
        expect(turn.evaluateGuess()).to.deep.equal(false);
    })

    it('should give feedback based on user\'s guess', function() {
        const card = new Card(2,'Where?',['Florida', 'Virginia', 'Boston'],'Boston');
        const turn = new Turn('Boston', card)
        expect(turn.giveFeedback()).to.deep.equal('correct!')
    })

    it('should give feedback based on user\'s guess', function() {
        const card = new Card(2,'Where?',['Florida', 'Virginia', 'Boston'],'Boston');
        const turn = new Turn('Florida', card)
        expect(turn.giveFeedback()).to.deep.equal('incorrect!')
    })

});