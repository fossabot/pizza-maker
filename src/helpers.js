import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

export default {
  new() {
    // TODO
    console.log('Cooked');
    process.exit(1);
  },
  get(showMenu) {
    const data = JSON.parse(fs.readFileSync('bin/data.json', 'utf8'));
    const choises = [];

    data.pizzas.forEach(pizza => {
      choises.push({
        name: `Pizza ${pizza.name} (${pizza.components})`,
        value: pizza
      });
    });

    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'option',
          message: 'Choose pizza:',
          choices: choises
        }
      ])
      .then(answer => {
        this.action(answer.option, showMenu);
      });
  },
  action(pizza, showMenu) {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'option',
          message: 'Choose action:',
          choices: [
            {
              name: 'Order',
              value: 'order'
            },
            {
              name: 'Delete',
              value: 'delete'
            },
            new inquirer.Separator(),
            {
              name: chalk`{bold.red Cancel}`,
              value: 'cancel'
            }
          ]
        }
      ])
      .then(answer => {
        console.log(pizza);
        if (answer.option === 'order') {
          this.order(pizza);
        } else if (answer.option === 'delete') {
          this.delete(pizza);
        } else showMenu();
      });
  },
  order() {
    // TODO
    console.log('Ordered!');
    process.exit(1);
  },
  async delete() {
    // TODO
    console.log('Deleted!');
    process.exit(1);
  },
  exit(showMenu) {
    return inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'exit',
          message: 'Are you sure want to exit?',
          default: false
        }
      ])
      .then(answer => {
        if (answer.exit) {
          console.log(chalk`{bold.blue Till next time! :)}`);
          process.exit(1);
        }
        showMenu();
      });
  }
};
