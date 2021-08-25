const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const prototypeData = require('../src/data.js');




describe('Turn', function() {
    
    beforeEach(function() {
        
    })

    it('should be a instance of Turn', function() {

        var card = new Card(1, "Sample Question", ["Option1", "Option2", "Option3"], "Option1")
        var turn = new Turn(2, card);
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should be able to return the users guess', function() {
        var card = new Card(1, "Sample Question", ["Option1", "Option2","Option3"], "Option3")
        var turn = new Turn(2, card);
        expect(turn.returnGuess()).to.deep.equal("Option3")

        var card = new Card(1, "Sample Question", ["Option1", "Option2","Option3"], "Option1")
        var turn = new Turn(1, card);
        expect(turn.returnGuess()).to.deep.equal("Option2")
        
    });

    it('Should compare the card with the user selected answer (1-9)', function() {
        
        var card = new Card(1, "Sample Question", ["Option1", "Option2", "Option3"], "Option1")
        var turn = new Turn(2, card);
        var testRun = turn.giveFeedback;
        
        expect(testRun).to.deep.equal('Correct!')
    });
})




