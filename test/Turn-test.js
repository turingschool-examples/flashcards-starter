const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
    let turn;
    let guess;
    let card;

    beforeEach(() => {
        guess = 'array';
        card = {
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
          };
        turn = new Turn(guess, card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('should store the user\'s guess and the current card', () => {
          expect(turn.guess).to.equal("array");
          expect(turn.card).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
          });
    });

    it('should have a string guess', () => {
        expect(guess).to.be.a('string');
    })

    it('should have an object card', () => {
        expect(card).to.be.an('object');
    })

    it('should return the user\'s guess', () => {
        expect(turn.returnGuess()).to.equal("array");
    });

    it('should return the current card', () => {
        expect(turn.returnCard()).to.equal(card);
    });

    it('should return true if the user\'s guess matches the correct answer', () => {
        turn = new Turn("object", card);
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should return false if the user\'s guess doesn\'t match the correct answer', () => {
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should return correct if the guess was correct', () => {
        turn = new Turn("object", card);
        expect(turn.giveFeedback()).to.equal('correct!');
    });

    it('should return incorrect if the guess was not correct', () => {
        expect(turn.giveFeedback()).to.equal('incorrect!');
    });

    it('should return incorrect if the guess was not one of the possible answers', () => {
        turn = new Turn('💩', card);
        expect(turn.giveFeedback()).to.equal('incorrect!');

        turn = new Turn(8, card);
        expect(turn.giveFeedback()).to.equal('incorrect!');

    })

});

//what if user inputs an emoji for their guess?