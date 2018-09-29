const inquirer = require('inquirer');
const chalk = require('chalk');
const package = require('./package.json');

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
      Welcom to Pizza Maker v${package.version}
    }
  `);
}

module.exports = showMenu().catch(err => {
  console.log(chalk`{bold.red Something went wrong! :( \n ${err}}`);
  process.exit(1);
})




