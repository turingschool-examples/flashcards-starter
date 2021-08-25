const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const prototypeData = require('../src/data.js');

let testCard1;
let testTurn1;

let testCard2;
let testTurn2;

let testCard3;
let testTurn3;


describe('Turn', function() {
    
    beforeEach(function() {//                           0           1          2       correct
        //USERWIN CORRECT ANSWER 0 ; USER 0
        testCard1 = new Card(111, "Sample Question1", ["Option1", "Option2", "Option3"], "Option1")
        testTurn1 = new Turn(0, testCard1);

        //USERLOSS CORRECT ANSWER : 1; USER INCORRECT ANSWER : 2
        testCard2 = new Card(222, "Sample Question2", ["Option4", "Option5", "Option6"], "Option5")
        testTurn2 = new Turn(2, testCard2);

        //USERWIN CORRECT ANSWER 2; USER 2
        testCard3 = new Card(333, "Sample Question3", ["Option7", "Option8", "Option9"], "Option9")
        testTurn3 = new Turn(2, testCard3); 
    });

    it('should be a instance of Turn', function() {
        
        expect(testTurn1).to.be.an.instanceOf(Turn);
    });

    it('should be able to return the users guess based on the card', function() {

        expect(testTurn1.returnGuess()).to.deep.equal("Option1")
        expect(testTurn2.returnGuess()).to.deep.equal("Option6")
        
    });


    it('Should be able to return the instance of the card', function() {
    
        expect(testTurn1.card).to.be.an.instanceOf(Card)
        expect(testTurn2.returnCard()).to.deep.equal(testCard2)

    });

    it('Should be able to return the answers/options as strings in an array', function() {
    
        expect(testTurn1.card.answers).to.deep.equal(["Option1", "Option2", "Option3"])
        expect(testTurn2.card.answers).to.deep.equal(["Option4", "Option5", "Option6"])
        expect(testTurn3.card.answers).to.deep.equal(["Option7", "Option8", "Option9"])

    });

    it('Should be able to return the question as a string', function() {
    
        

    });

    it('Should compare the card with the user selected answer (1-9)', function() {
        
        expect(testTurn1.giveFeedback()).to.deep.equal('Correct!')
        expect(testTurn2.giveFeedback()).to.deep.equal('Incorrect!')

    });


})




