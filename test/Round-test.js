const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

// What is this app actually supposed to do? Then I would walk through doing all of those things and test them. Like, see the home page with all the stuff on it, click on button, see a new thing
// What are the ways this could get screwed up? Like user clicks at wrong time, or user enters bad data, or the server is dead, etc.

// we will need card1, card2, card3, deck(cards), round

// tests
// should be a function
// should be able to count turns taken
// should start with an empty array for incorrect guesses 

// returnCurrentCard()
// can return the current card being played in deck

// takeTurn()
// should create a new turn instance each time a guess is made
// should be able to add one to the turn counter each turn
// should be able to shuffle to next card in deck
// should be able to evaluate correct
// should be able to evaluate incorrect 
// should be able to shovel incorrect guesses into array
// should be able to return feedback - turn.giveFeedback()

// calculatePercentCorrect()
// should be able to calculate total number of correct guesses
// should be able to return percentage of correct guesses

// endRound()
// should be able to return 'Round over! You answered 25% of the questions correctly!'
