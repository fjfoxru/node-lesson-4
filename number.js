const readline = require('readline');
const input = readline.createInterface(process.stdin);
const fs = require('fs');
let writeStream = fs.createWriteStream('output.txt');
let secretNumber;

function startNewGame() {
    function getRandom() {
        return Math.round(Math.random() + 1);
      }
    secretNumber = getRandom();
    console.log(secretNumber);
    console.log('Орел или решка?')
}
startNewGame();


input.on('line', (data) => {
    if (data == secretNumber) {
        console.log('Победа')
        writeStream.write('1');
        startNewGame()
    } else {
        console.log('Проиграли ')
        writeStream.write('0');
        startNewGame()
    }
    
});

