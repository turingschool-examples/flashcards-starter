const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe("Deck", function(){

    it('should be a function', function(){
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });
    it('should be able to count the amount of cards in a deck', function(){
const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
const card4 = new Card(27, 'Which NBA player win the 2000s NBA Dunk Contest?', ['Lebron James', 'Michael Jordan', 'Vince Carter'], 'Vince Carter');
const card5 = new Card(17, 'Which player is left handed?', ['Michael Jordan', 'Dwight Howard', 'Chris Mullin'], 'Chris Mullin');
const deck = new Deck([card1, card2, card3, card4, card5]);
expect(deck.countCards()).to.equal(5)
    });
});