import {Command} from '@oclif/command'
import chalk = require('chalk');
import todoApi from '../api/todoApi';

export default class Add extends Command {
  static description = 'Add new todo'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add);
    const todo = args.todo

    if (todo) {
      todoApi.add(todo);
      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    } else {
      this.error(`${chalk.red('Enter new todo')}`)
    }
  }
}
