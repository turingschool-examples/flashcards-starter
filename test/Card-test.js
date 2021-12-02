const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
    const card = new Card(1, 'What is my favorite web language?', ['JavaScript', 'Python', 'TypeScript'], 'JavaScript');

    it('should be a function', function() {
        expect(Card).to.be.a('function');
    });

    it('should be an instance of Card', function() {
        expect(card).to.be.an.instanceof(Card);
    }); 

    it('should store a question', function() {
        expect(card.question).to.equal('What is my favorite web language?');
    });  

    it('should store a list of possible answers', function() {
        expect(card.answers).to.deep.equal(['JavaScript', 'Python', 'TypeScript']);
    });  

    it('should store the correct answer', function() {
        expect(card.correctAnswer).to.equal('JavaScript');
    });
});