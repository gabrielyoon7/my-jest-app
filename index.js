/* eslint-disable no-unused-vars */
import cliSelect from 'cli-select';
import chalk from 'chalk';
import Console from './src/Console.js';

const play = async () => {
  const answer = await Console.read('무엇이든 입력해 보아요.');
  Console.print(`당신이 입력한 값은 : ${answer}`);
};

await cliSelect({
  values: ['Major', 'Minor', 'Patch'],
  valueRenderer: (value, selected) => {
    if (selected) {
      return chalk.underline(value);
    }

    return value;
  },
}).then((response) => {
  Console.print(response);
});
play();
