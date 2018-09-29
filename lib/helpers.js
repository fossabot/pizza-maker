const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports.new = () => {
  // TODO
  console.log('Cooked');  
  process.exit(1);
}
module.exports.get = () => {
  // TODO
  console.log('Menu');
  process.exit(1);
}
module.exports.exit = (showMenu) => {
  return inquirer.prompt([{
    type: 'confirm',
    name: 'exit',
    message: 'Are you sure want to exit?',
    default: true
  }]).then(answer => {
    if (answer.exit) {
      console.log(chalk`{bold.blue Till next time! :)}`);
      process.exit(1);
    }
    showMenu();
  })
}