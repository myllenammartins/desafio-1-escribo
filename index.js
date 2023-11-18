const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumAll(value) {
  const inputValue = parseInt(value);
  let sum = 0;

  for (let i = 0; i < inputValue; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;

  return sum;
}

rl.question('Digite um valor: ', (answer) => {
  const result = sumAll(answer);
  console.log(`A soma dos números menores que ${answer} e divisíveis por 3 ou 5 é: ${result}`);
  rl.close();
});
