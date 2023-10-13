

function createCard(id, question, answers = [], correctAnswer){
   let card = {
        id,
        question,
        answers,
        correctAnswer
    }
    return card
}

function evaluateGuess(guess, card){
        if(guess === card.correctAnswer){
            return 'Correct!'
        } else {
            return 'Incorrect!'
        }
}

function createDeck(){

const card1 = createCard(1, 'Which french river sounds amusing?', ['Seine', 'Meuse', 'Marne'], 'Meuse');
const card2 = createCard(2, 'What is the southern most french mountain range?', ['Champagne', 'Jura', 'Pyrenees'], 'Pyrenees');
const card3 = createCard(3, 'William the Conqueror conquered Britain from which french region?', ['Normady', 'Burgundy', 'Brittany'], 'Normandy');
const card4 = createCard(4, 'Which country does France share their longest border?', ['Germany', 'Spain', 'Brazil'], 'Brazil')
const card5 = createCard(5, 'Which french city shares its name with a U.S. state?', ['Detriot', 'Montpellier', 'Strasbourg'], 'Montpellier')

const deck = [card1, card2, card3, card4, card5]
return deck
}

const createRound = (deck) => {
    const round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    round.takeTurn = takeTurn.bind(null, round)
    round.calculatePercentCorrect = calculatePercentCorrect.bind(null, round)
    round.endRound = endRound.bind(null, round)

    return round
}

function takeTurn(round, guess) {
    round.turn++
    round.currentCard = round.deck[round.turns]
    const result = evaluateGuess(guess, round.currentCard)
    if(result === 'Incorrect') {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    return result
}

function calculatePercentCorrect(round) {
    const totalCards = round.deck.length
    const correctGuesses = round.turns - round.incorrectGuesses.length
    const percentCorrect = (correctGuesses / totalCards) * 100
    return percentCorrect
}

function endRound(round){
    const percentCorrect = round.calculatePercentCorrect()
    return `The round has ended with ${percentCorrect}% questioned answered correctly.`
}

module.exports = {
    createCard,
    evaluateGuess,
    takeTurn,
    calculatePercentCorrect,
    endRound,
    createRound
  };