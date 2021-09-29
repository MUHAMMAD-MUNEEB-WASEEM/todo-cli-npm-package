import {expect, test} from '@oclif/test'

describe('interact-inquirer.ts', () => {
  test
  .stdout()
  .command(['interact-inquirer.ts'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['interact-inquirer.ts', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
