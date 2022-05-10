const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

    it('Should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      }); 

    it('Should store a user\'s guess', () => {
        const turn = new Turn('This is my answer');
        expect(turn.guess).to.equal('This is my answer');
    });

    it('Should store a card for the current card in play', () => {
        const card = new Card (1, 'Who was the drummer for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'Nick Mason');
        const turn = new Turn('Nick Mason', card);

        expect(turn.guess).to.equal('Nick Mason');
    });

    it('Should be able to return the user\'s guess', () => {
        const card = new Card (2, 'Who was the guitarist for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'David Gilmour');
        const turn = new Turn('David Gilmour', card);
        
        expect(turn.returnGuess()).to.equal('David Gilmour');
    });
    it('Should be able to return the current card in play', () => {
        const card = new Card (3, 'Who was the keyboardist for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'Richard Wright');
        const turn = new Turn('Richard Wright', card);

        expect(turn.returnCard()).to.equal(card);
    });

    it('Should be able to evaluate the user\'s guess', () => {
        const card = new Card (3, 'Who was the bassist for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'Roger Waters');
        const turn = new Turn('Richard Wright', card);
        const turn2 = new Turn ('Roger Waters', card);

        expect(turn.evaluateGuess()).to.equal(false);
        expect(turn2.evaluateGuess()).to.equal(true);
    });

    it('Should give feedback based on the user\'s answer', () => {
        const card = new Card (3, 'Who was the bassist for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'Roger Waters');
        const turn = new Turn('Richard Wright', card);
        const turn2 = new Turn ('Roger Waters', card);

        expect(turn.giveFeedback()).to.equal('incorrect!');
        expect(turn2.giveFeedback()).to.equal('correct!');
    });
});