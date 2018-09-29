import inquirer from 'inquirer';
import chalk from 'chalk';
import { version } from '../package.json';

import helpers from './helpers';

function showMenu() {
  console.log(chalk`
    {bold.yellow
      $$$$$$$\\  $$\\                              
      $$  __$$\\ \\__|                             
      $$ |  $$ |$$\\ $$$$$$$$\\ $$$$$$$$\\ $$$$$$\\  
      $$$$$$$  |$$ |\\____$$  |\\____$$  |\\____$$\\ 
      $$  ____/ $$ |  $$$$ _/   $$$$ _/ $$$$$$$ |
      $$ |      $$ | $$  _/    $$  _/  $$  __$$ |
      $$ |      $$ |$$$$$$$$\\ $$$$$$$$\\$$$$$$$ |
      \\__|      \\__|\\________|\\________|\\_______|}
    {bold.yellow
      Welcom to Pizza Maker v${version}
    }
  `);
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Choose option:',
        choices: [
          {
            name: 'Cook a new pizza',
            value: 'new',
          },
          {
            name: 'Select from menu',
            value: 'get',
          },
          new inquirer.Separator(),
          {
            name: chalk`{bold.red Exit}`,
            value: 'exit',
          },
        ],
      },
    ])
    .then(answers => helpers[answers.option](showMenu));
}

export default showMenu().catch((err) => {
  console.log(chalk`{bold.red Something went wrong! :( \n ${err}}`);
  process.exit(1);
});
