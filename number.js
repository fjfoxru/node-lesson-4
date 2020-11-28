const readline = require('readline');
const input = readline.createInterface(process.stdin);
const fs = require('fs');
let writeStream = fs.createWriteStream('output.txt');
let secretNumber;

function Game() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    secretNumber = getRandomInt(0, 2);
    console.log('Орел или решка?')
}
Game();


input.on('line', (data) => {
    if (data === secretNumber) {
        console.log('Победа')
        writeStream.write('1');
        Game()
    } else {
        console.log('Проиграли ')
        writeStream.write('0');
        Game()
    }
    
});

