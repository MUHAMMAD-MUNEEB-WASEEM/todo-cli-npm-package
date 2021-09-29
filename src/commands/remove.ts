import {Command, flags} from '@oclif/command'
import chalk = require('chalk');
import todoApi from '../api/todoApi';

export default class Remove extends Command {
  static description = 'Remove todo'

  static args = [{name: 'index'}]

  async run() {
    const {args, flags} = this.parse(Remove)
    const index = args.index;
    
    if (index){
      const todo = todoApi.get(index).todo;
      todoApi.remove(index);
      this.log(`${chalk.green('[Success]')} Removed todo: ${todo}`)
    }else{
      this.error(chalk.red('please specify the todo\'s index'))
    }
  
  }
}
