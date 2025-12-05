//ask user for two numbers which one is greater

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Give me a first number: ", (number1) => {
    rl.question("Give me a second number: ", (number2) => {

        number1 = Number(number1);
        number2 = Number(number2);

        if (number1 > number2) {
            console.log("Greater number is: " + number1);
        } else if (number2 > number1) {
            console.log("Greater number is: " + number2);
        } else {
            console.log("They are equal");
        }
//ask user for a word and check if it is a palindrome
rl.question("Give me a word: ", (word) => {
    const reversed = word.split("").reverse().join("");
    
    if (word === reversed) {
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
        rl.close();
        });
    });
});


