const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', () => {

    it('should be able to pass an array of Card objects as an argument', () => {
        let card1 = new Card(1, 'What is my name?', ['Ryan', 'Michael', 'Bob'], 'Ryan');
        let card2 = new Card(2, 'What is my middle name?', ['Bryan', 'Adam', 'Matthew'], 'Matthew');
        let card3 = new Card(3, 'Who is the best dog?', ['Kya', 'Lou', 'Toby'], 'Lou');
        let cards = [card1, card2, card3];
        let deck = new Deck(cards);

        expect(deck.cards).to.deep.equal([
            {id: 1, question: 'What is my name?', answers: ['Ryan', 'Michael', 'Bob'], correctAnswer: 'Ryan'}, 
            {id: 2, question: 'What is my middle name?', answers: ['Bryan', 'Adam', 'Matthew'], correctAnswer: 'Matthew'}, 
            {id: 3, question: 'Who is the best dog?', answers: ['Kya', 'Lou', 'Toby'], correctAnswer: 'Lou'}
        ]);
    });

    it('should be able to count cards', () => {
        let card1 = new Card(1, 'What is my name?', ['Ryan', 'Michael', 'Bob'], 'Ryan');
        let card2 = new Card(2, 'What is my middle name?', ['Bryan', 'Adam', 'Matthew'], 'Matthew');
        let card3 = new Card(3, 'Who is the best dog?', ['Kya', 'Lou', 'Toby'], 'Lou');
        let cards = [card1, card2, card3];
        let deck = new Deck(cards);
        
        expect(deck.countCards()).to.equal(3);
    });
});