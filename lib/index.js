const inquirer = require('inquirer');
const chalk = require('chalk');
const package = require('./package.json');

// Show menu
module.exports = () => {
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




