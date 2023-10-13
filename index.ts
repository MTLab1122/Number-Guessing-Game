import inquirer from 'inquirer';
import chalk from 'chalk';


const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

async function guessNumber() {
  const answer = await inquirer.prompt([
    {
      name: 'guess',
      type: 'input',
      message: chalk.blue('Guess the number (between 1 and 100): '),
      validate: (input) => {
        const number = parseInt(input);
        return !isNaN(number) && number >= 1 && number <= 100;
      }
    }
  ]);

  const guess = parseInt(answer.guess);
  attempts++;

  if (guess === randomNumber) {
    console.log(chalk.green(`Congratulations! You guessed the number in ${attempts} attempts.`));
  } else if (guess < randomNumber) {
    console.log(chalk.yellow('Too low! Try again.'));
    guessNumber();
  } else {
    console.log(chalk.yellow('Too high! Try again.'));
    guessNumber();
  }
}

// Displaying a colorful banner
console.log(chalk.bgCyan.white.bold(' Number Guessing Game '));
console.log(chalk.cyan('Try to guess the correct number between 1 and 100.'));

guessNumber();


