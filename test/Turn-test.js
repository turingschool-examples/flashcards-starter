const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

    it.skip('Should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      }); 

    it.skip('Should store a user\'s guess', () => {
        const turn = new Turn('This is my answer');
        expect(turn.guess).to.equal('This is my answer');
    });

    it.skip('Should store a card for the current card in play', () => {
        const card = new Card (1, 'Who was the drummer for Pink Floyd?', ['Roger Waters', 'David Gilmour', 'Richard Wright', 'Nick Mason'], 'Nick Mason');
        const turn = new Turn('Nick Mason', card);

        expect(turn.guess).to.equal('Nick Mason');
    });

});