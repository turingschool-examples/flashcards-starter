# FlashCards

I made a game using object oriented programming and test driven development to make classes for a Deck, Card, Round, Turn and Game class. The game is answering a round of 30 questions about coding and will give you the percent you answered correct at the end.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal:

```bash
Node server running on port 3000
```


## How Play the Game

In the terminal, run:

```bash
node index.js
```

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/SA69fGfkpkbwdEPm9P/giphy.gif)

---

## Test Files Organization

Test code needed to be put in a specific place for it to run successfully.

 As a convention, all test filenames end with `-test.js`. For instance: `Round-test.js`.

## TDD Used to Develop

Tests run using the command:

```bash
npm test
```

The test results were output to the terminal.

---
