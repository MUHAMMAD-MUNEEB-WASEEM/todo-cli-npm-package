import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import todoAPI from '../api/todoAPI'

export default class InteractInquirer extends Command {
  static description = 'Enter the Interacting mode on CMD'

  async run() {
    const {args, flags} = this.parse(InteractInquirer)

    const source = todoAPI.list()
    const choices = source

    const prompt : any = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Update todo',
        name: 'todos',
        choices: choices.map(todo => {
          // the default checked value is determined by the status of todo
          return { name: todo.todo, checked: todo.done }
        })
      }
    ])

    const finishedTodo = prompt.todos // list of todos selected by user from cmd

    source.forEach((todo, index) => {
      if (finishedTodo.indexOf(todo.todo) !== -1) {
        // the todo is in the select list
        todoAPI.done(index)
      } else {
        // the todo is not in the select list
        todoAPI.unDone(index)
      }
    })
  }
}
