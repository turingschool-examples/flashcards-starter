const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
    let card;
    beforeEach(() => {
        card = new Card(1, 'What color is the sky?', ['orange', 'green', 'blue'], 'blue');
    });

    it('should be a function', function() {
        expect(Card).to.be.a('function');
    });

    it('should be an instance of Card', function() {
        expect(card).to.be.an.instanceof(Card);
    });

    it('should have an id', function() {
        expect(card.id).to.equal(1)
    })

    it('should store a question', function() {
        expect(card.question).to.equal('What color is the sky?');
    });

    it('should store a list of possible answers', function() {
        expect(card.answers).to.deep.equal(['orange', 'green', 'blue']);
    });

    it('should have three possible answers', function() {
        expect(card.answers.length).to.equal(3)
    })

    it('should store the correct answer', function() {
        expect(card.correctAnswer).to.equal('blue');
    });
});