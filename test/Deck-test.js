const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

var card1 = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]
var card2 = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]
var card3 = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]


const array = [card1, card2, card3]
const myDeck = new Deck(array);

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Card', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should be able to count cards', function() {
        const deck = new Deck(array);
        expect(deck.countCards()).to.deep.equal(3);
    });

});