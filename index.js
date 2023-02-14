import Console from './src/Console';

const play = async () => {
  const answer = await Console.read('무엇이든 입력해 보아요.');
  Console.print(`당신이 입력한 값은 : ${answer}`);
};

play();
