const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');


describe('Deck', function() {
    beforeEach(function() {
        testCard11 = new Card(11, "Sample Question1", ["Option1", "Option2", "Option3"], "Option1")
        testCard12 = new Card(22, "Sample Question2", ["Option4", "Option5", "Option6"], "Option5")
        testCard13 = new Card(33, "Sample Question3", ["Option7", "Option8", "Option9"], "Option9")
        testDeck1 = new Deck([testCard11,testCard12,testCard13])
        testCard21 = new Card(44, "Sample Question4", ["Option1", "Option2", "Option3"], "Option3")
        testCard22 = new Card(55, "Sample Question5", ["Option4", "Option5", "Option6"], "Option4")
        testCard23 = new Card(66, "Sample Question6", ["Option7", "Option8", "Option9"], "Option7")
        testDeck2 = new Deck([testCard21,testCard22,testCard23])
        testDeck3 = new Deck([testCard11,testCard12,testCard13,testCard21,testCard22,testCard23])
    })
    it('Should be an instance of Deck class', function() {
        expect(testDeck1).to.be.an.instanceOf(Deck);
        expect(testDeck2).to.be.an.instanceOf(Deck);
        expect(testDeck3).to.be.an.instanceOf(Deck);
    })
    it('Should store an array of instances of Card class', function() {
        expect(testDeck2.deck[0]).to.be.an.instanceOf(Card)
        expect(testDeck2.deck[1]).to.be.an.instanceOf(Card)
        expect(testDeck2.deck[02]).to.be.an.instanceOf(Card)
    })
    it('Should be able to return the values stored in the card instance', function(){
    
        expect(testDeck2.deck[1].question).to.deep.equal(testCard22.question)
        expect(testDeck2.deck[1].answers).to.deep.equal(testCard22.answers)
        expect(testDeck2.deck[1].correctAnswer).to.deep.equal(testCard22.correctAnswer)
    })
})

