#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Welcome message
console.log(chalk.bold.greenBright(`
******************************************************
*                                                    *
*     Welcome to the Rock-Paper-Scissors Game        *
*                                                    *
*       Get ready to challenge the Computer!         *
*                                                    *
******************************************************
`));
// Function to get a random move for the computer
function getRandomMove() {
    const moves = ["Rock", "Scissors", "Paper"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}
// Prompt for Player 1's move
let answer1 = await inquirer.prompt({
    name: "player1",
    type: "list",
    message: chalk.blueBright("Player 1, Choose Your Move: "),
    choices: ["Rock", "Scissors", "Paper",],
});
// Generate Player 2's move (Computer)
let computerMove = getRandomMove();
console.log(chalk.bold.whiteBright(`\nComputer chose: ${chalk.bold.magentaBright(computerMove)}`));
// Determine the winner
if (answer1.player1 === computerMove) {
    console.log(chalk.bold.cyanBright.bgBlack("\n⚖️ It's a tie!⚖️"));
}
else if ((answer1.player1 === "Rock" && computerMove === "Scissors") ||
    (answer1.player1 === "Scissors" && computerMove === "Paper") ||
    (answer1.player1 === "Paper" && computerMove === "Rock")) {
    console.log(chalk.bold.cyanBright("\n 🎉 Player 1 Wins! 🎉"));
}
else {
    console.log(chalk.bold.cyanBright.bgBlack("\n 💻 🎉 Computer Wins! 🎉 💻"));
}
