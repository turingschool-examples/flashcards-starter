const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js')
const Round = require('../src/Round.js');

describe('Round', function() {

  it('should have a method that returns the current card being played', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    expect(newRound.returnCurrentCard()).to.equal(newCard)
  })

  it('takeTurn method that updates turns count ', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    newRound.takeTurn(newTurn)
    expect(newRound.turns).to.equal(1)
    newRound.takeTurn(newTurn)
    expect(newRound.turns).to.equal(2)
  })
  
  it('takeTurn should evaluate guesses', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    
    newRound.takeTurn(newTurn)
    expect(newTurn.evaluateGuess()).to.equal(false)
      
    const newTurn2 = new Turn('Master Blaster', newCard)
    newRound.takeTurn(newTurn2)
    expect(newTurn2.evaluateGuess()).to.equal(true)
  })

  it('takeTurn should give feedback', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    expect(newRound.takeTurn(newTurn)).to.equal('Incorrect!')
    const newTurn2 = new Turn('Master Blaster', newCard)
    expect(newRound.takeTurn(newTurn2)).to.equal('Correct!')
  })
  
  it('takeTurn stores the IDs of incorrect guesses', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)

    newRound.takeTurn(newTurn)
    expect(newRound.incorrectGuesses[0]).to.equal(001)
  })

  it('The turns count is updated, regardless of whether the guess is correct or incorrect', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    expect(newRound.takeTurn(newTurn)).to.equal('Incorrect!')
    expect(newRound.turns).to.equal(1)
    const newTurn2 = new Turn('Master Blaster', newCard)
    expect(newRound.takeTurn(newTurn2)).to.equal('Correct!')
    expect(newRound.turns).to.equal(2)
  })

  it('on takeTurn() the next card becomes current card', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newerCard = new Card(
      {id:002, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard, newerCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)

    expect(newRound.returnCurrentCard()).to.equal(newCard)
    newRound.takeTurn(newTurn)
    expect(newRound.returnCurrentCard()).to.equal(newerCard)
  })

  it('Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newerCard = new Card(
      {id:002, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard, newerCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)

    newRound.takeTurn(newTurn)
    expect(newTurn.evaluateGuess()).to.equal(false)
    expect(newRound.incorrectGuesses[0]).to.equal(newCard.id)
  })

  it('Feedback is returned regarding whether the guess is incorrect or correct', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newerCard = new Card(
      {id:002, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard, newerCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)

    expect(newTurn.giveFeedback()).to.equal('Incorrect!')
    const newerTurn = new Turn('Master Blaster', newCard)
    newRound.takeTurn(newerTurn)
    expect(newerTurn.giveFeedback()).to.equal('Correct!')
  })

  it('should contain a method that calculates and returns the percentage of correct guesses', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newerCard = new Card(
      {id:002, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard, newerCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    
    newRound.takeTurn(newTurn)
    expect(newRound.calculatePercentCorrect()).to.equal(0);
    
    const newerTurn = new Turn('Master Blaster', newCard)
    newRound.takeTurn(newerTurn)
    expect(newRound.calculatePercentCorrect()).to.equal(50);

    const newestTurn = new Turn('Master Blaster', newCard)
    newRound.takeTurn(newestTurn)
    expect(newRound.calculatePercentCorrect()).to.equal(67);

  })

  it('should have a method that prints the following to the console: "** Round over! ** You answered <>% of the questions correctly!"', function() {
    const newCard = new Card(
      {id:001, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newerCard = new Card(
      {id:002, question:'Who run Barter Town?', answers:['Aunty Entity', 'Master Blaster', 'Mad Max'], correctAnswer:'Master Blaster'})
    const newDeck = new Deck([newCard, newerCard])
    const newTurn = new Turn('Mad Max', newCard)
    const newRound = new Round(newDeck)
    
    newRound.takeTurn(newTurn)
    expect(newRound.calculatePercentCorrect()).to.equal(0);
    
    const newerTurn = new Turn('Master Blaster', newCard)
    newRound.takeTurn(newerTurn)
    expect(newRound.calculatePercentCorrect()).to.equal(50);

    const newestTurn = new Turn('Master Blaster', newCard)
    newRound.takeTurn(newestTurn)
    expect(newRound.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!`);
  })

})