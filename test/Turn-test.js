const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe ('Turn', function() {

    it('should be a function', function () {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function () {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should have a guess', function() {
        const turn = new Turn('array');
        expect(typeof(turn.guess)).to.equal('string');
        expect(turn.guess).to.equal('array');
    }); // *** should word "have a guess" better *** 
    
    it('should have a card', function() {
        const card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const turn = new Turn('array', card);
        expect(typeof(turn.card)).to.equal('object'); // useful or unnecessary?
        expect(turn.card).to.equal(card);
    }); // *** should word "have a card" better *** 

    it('should return the guess', function() {
        const card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const turn = new Turn('object', card);
        expect(turn.returnGuess()).to.equal('object');
    });

    it('should return the card', function() {
        const card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const turn = new Turn('object', card);
        expect(turn.returnCard()).to.equal(card);
    });

    it('should return a boolean value reflecting if the guess is correct', function() {
        const card = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        const turn = new Turn('sort()', card);
        const turn1 = new Turn('join()', card);
        const turn2 = new Turn('map()', card);
        
        expect(turn.evaluateGuess()).to.equal(true);
        expect(turn1.evaluateGuess()).to.equal(false);
        expect(turn2.evaluateGuess()).to.equal(false);
        //expect(evaluateGuess(guess)).to.deeplyEqual(turn.correctAnswer);
        
    });


});