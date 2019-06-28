# FlashCards

Flashcards is the initial project for the second module of 1904 Front End Engineering Cohort at the Turing School of Software and Design, with a dual focus on Object Oriented Programming and Test Driven Development. The testing framework used for this project is Mocha, using the Chai assertion library. 

Played entirely through the command line interface (CLI), alternately referred to as the terminal or the command prompt, it prompts the player to answer a series of 30 questions about foundational javascript objects and prototype methods, and displays the percent of questions answered correctly upon completion. Players who score less than 90% are given the opportunity to play through the set of questions again. 

## Play Example

Here is what a typical run-through of the game will look like (with slight differences, depending on how your command line is displayed!): 

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

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
