import { Command } from 'commander';
import registerCreateCommand from './commands/create';

const program = new Command();

registerCreateCommand(program);

program.addHelpText('after', `
Example call:
  $ sdp-cli --help
  $ sdp-cli create demo-project
`);

program.parse(process.argv);