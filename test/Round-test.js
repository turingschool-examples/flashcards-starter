const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Round', function() {
  
  let card1, card2, card3, deck, round

  beforeEach('assign values to global variables', function () {
    card1 = new Card (6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
    card2 = new Card (7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
    card3 = new Card (8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
   //do i need to instantiate a new Turn(userGuess, currentCard)?

  })

  it('should be a function', function() {
    
    expect(Round).to.be.a('function')
  })

  it('should be an instance of a Round', function() {
   
    expect(round).to.be.an.instanceof(Round)
  })

  it('should take a new set of cards', function() {

    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('should show the current card at play from deck', function() {
    //set var to execute class method. .returnCurrentCard()
    const currentCard = round.returnCurrentCard()

    expect(currentCard).to.deep.equal({ 
      "id": 6,
      "question": "What is an example of a mutator method?",
      "answers": ["sort()", "map()", "join()"],
      "correctAnswer": "sort()"
    })
  })

  it('should start user\'s turn at 0', function() {
    
    expect(round.turns).to.equal(0) //increment
  }) 

  it('should have a place to store data of incorrect guesses', function() {
    
    expect(round.incorrectGuesses).to.deep.equal([]) //push into array incorrectGuess(turn.attempt/turn.currentCard)
  })

  it('should show if the guess is correct', function() {
    let turnFeedback = round.takeTurn('sort()') //turn goes up and card should change
    
    expect(turnFeedback).to.equal('correct!') 
  })
  
  it('should show if the guess is incorrect', function() {
    
    turnFeedback = round.takeTurn('slice()') //turn goes up and card should change
    
    expect(turnFeedback).to.equal('incorrect!') //push into array incorrectGuess(turn.attempt/turn.currentCard)
  })

  it('should track how many questions are answered', function() {
    //this.turns ++
    
    expect(round.currentCard).to.equal(card1)

    round.takeTurn('sort()')

    expect(round.currentCard).to.equal(card2) //change this.currentCard

    round.takeTurn('slice()')

    expect(round.turns).to.equal(2)
  })

  it('should record the card of the incorrect guess', function() {
    expect(round.incorrectGuesses).to.deep.equal([7])

    round.takeTurn('sort()')
    round.takeTurn('slice()')

    expect(round.incorrectGuesses).to.deep.equal([7]) //deck[i].card.id
  })

  it.skip('should give next card from the deck after answer attempts', function() {
    
    expect(round.returnCurrentCard).to.deep.equal({
      "id": 8,
      "question": "What do iterator methods take in as their first argument?",
      "answers": ["callback function", "current element", "an array"],
      "correctAnswer": "callback function"
    })
  })

  it.skip('should calculate overall correct answers', function() {
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

})