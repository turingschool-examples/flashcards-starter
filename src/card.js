
function createCard(id, question, answers = [], correctAnswer = ' ') {
    return {
        id,
        question,
        answers,
        correctAnswer
    };
}

function evaluateGuess(guess, card) {
    return guess === card.correctAnswer ? 'Correct!' : 'Incorrect!'
}

function createDeck(cards) {
    return cards.map((cardData, index) => createCard(index + 1, ...cardData))
}

const cardData = [
    ['Which French river sounds amusing?', ['Seine', 'Meuse', 'Marne'], 'Meuse'],
    ['What is the southernmost French mountain range?', ['Champagne', 'Jura', 'Pyrenees'], 'Pyrenees'],
    ['William the Conqueror conquered Britain from which French region?', ['Normandy', 'Burgundy', 'Brittany'], 'Normandy'],
    ['Which country does France share their longest border?', ['Germany', 'Spain', 'Brazil'], 'Brazil'],
    ['Which French city shares its name with a U.S. state?', ['Detroit', 'Montpellier', 'Strasbourg'], 'Montpellier']
]

const deck = createDeck(cardData)

function createRound(deck) {
    let currentCard = deck[0]
    let turns = 0
    const incorrectGuesses = []

    function takeTurn(guess) {
        turns++;
        currentCard = deck[turns];
        const result = evaluateGuess(guess, currentCard)
        if (result === 'Incorrect!') {
            incorrectGuesses.push(currentCard.id);
        }
        return result
    }

    function calculatePercentCorrect() {
        const totalCards = deck.length;
        const correctGuesses = turns - incorrectGuesses.length
        const percentCorrect = (correctGuesses / totalCards) * 100
        return percentCorrect
    }

    function endRound() {
        const percentCorrect = calculatePercentCorrect()
        return `The round has ended with ${percentCorrect}% questioned answered correctly.`
    }

    return {
        takeTurn,
        calculatePercentCorrect,
        endRound
    };
}
