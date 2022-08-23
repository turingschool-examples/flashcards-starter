const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Turn.js')

describe('Turn', function() {

    it.skip('Should be a function', function() {
        let turn = new Turn;
        
        expect(turn).to.be.a('function')
    });

    it.skip('Should be an instance of Turn', function() {
        let turn = new Turn;

        expect(turn).to.be.an.instanceOf(Turn)
    });

    it.skip('Should have a property for the card currently in play', function() {
        let turn = new Turn(card);
        let card = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne') 

        expect(turn.card).to.deepEqual(card)
    });

    it.skip('Should be able to reference a different card', function() {
        let turn = new Turn(card);
        let card = new Card(2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker') 
    
        expect(turn.card).to.deepEqual(card)
    })

    it.skip('Should have a property for player\'s guess', function() {
        let turn = new Turn(card, 'Bruce Wayne');
        let card = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne') 

        expect(turn.answer).to.equal('Bruce Wayne')
    });

    it.skip('Should be able to accept a different guess', function() {
        let turn = new Turn(card, 'Clark Kent')
        let card = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne') 
    
        expect(turn.answer).to.equal('Clark Kent')
    });

    it.skip('Should return the player\'s guess', function() {
        let turn = new Turn(card, 'Bruce Wayne')
        let card = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne') 
        
        let guess = turn.returnGuess();

        expect(guess).to.equal('Bruce Wayne')
    });

    it.skip('Should return the current card in play', function() {
        let turn = new Turn(card, 'Bruce Wayne')
        let card = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne') 

        let currentCard = turn.returnCard();

        expect(currentCard).to.equal(card)
    });

    it.skip('Should return a boolean value indicating if the player\'s guess matches the answer on the card', function() {
        let turn1 = new Turn(card1, 'Bruce Wayne');
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne'); 
        let turn2 = new Turn(card2, 'Poison Ivy');
        let card2 = new Card (2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker') 
       
        let guess1 = turn.evaluateGuess();
        let guess2 = turn.evaluateGuess();

        expect(guess1).to.equal(true);
        expect(guess2).to.equal(false)
    });

    it.skip('Should provide the player with feedback based on their answer', function() {
        let turn1 = new Turn(card1, 'Bruce Wayne');
        let card1 = new Card(1, 'Who is Batman\'s alter ego?', ['Bruce Wayne', 'Clark Kent', 'Diana Prince'], 'Bruce Wayne'); 
        let turn2 = new Turn(card2, 'Poison Ivy');
        let card2 = new Card (2, 'Who is Batman\'s arch nemesis?', ['Cat Woman', 'Poison Ivy', 'The Joker'], 'The Joker') 

        let feedback1 = turn.giveFeedback();

        expect(feedback1).to.equal('Correct!');
        expect(feedback2).to.equal('Incorrect!')
    });
})