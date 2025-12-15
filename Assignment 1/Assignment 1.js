'use strict';
// the line below is for question 1
 console.log('I\'m printing to console!');
// the codes below are for question 2
let name = prompt("Enter your name");
console.log("Hello", name);
document.querySelector("#question_2").innerHTML = "Hello" + name;
//the code below are for question 3
let a = parseInt(prompt("Enter your number"));
let b = parseInt(prompt("Enter your number2"));
let c = parseInt(prompt("Enter your number3"));

let sum = a + b + c
let product = a * b * c
let average = sum / 3
console.log(product)
console.log(average)
console.log(product)
document.querySelector("#question_3").innerHTML = "The sum is " + sum;
document.querySelector("#question_3").innerHTML = "The product is " + product;
document.querySelector("#question_3").innerHTML = "The average is " + average;

// the code below are for question 4
let Hogward_name = prompt('Enter the student\'s name:');
let house = Math.round(Math.random()*4);
console.log(house);
if (house === 1) {
    document.querySelector('#question_4').innerText = Hogward_name + " is house Gryffindor";
}
else if (house === 2) {
    document.querySelector('#question_4').innerText = Hogward_name + " is house Slytherin" ;
}
else if (house === 3) {
    document.querySelector('#question_4').innerText = Hogward_name + " is house Hufflepuff";
}
else if (house === 4) {
    document.querySelector('#question_4').innerText = Hogward_name + " is house Ravenclaw";
}
// // the code below are for question 5
let year = parseInt(prompt('Please enter a year'));
if (year % 4 ===0 || year % 100 !== 0 && year % 400 === 0)  {
    document.querySelector('#question_5').innerText = "This is a leap year";
}
else {
    document.querySelector('#question_5').innerText = 'this is not a leap year';
}

// // the code below are for question 6
const answer = confirm("Should I calculate the square root?")
if (answer === true) {
    let square_number = parseInt(prompt("Enter a number"));
    if (square_number < 0) {
            document.querySelector('#question_6').innerText = 'The square root of a negative number is not defined';
    } else if (square_number >= 0) {
        let result = Math.sqrt(square_number);
        document.querySelector('#question_6').innerText = "The square root is: " + result;
     }
 }
else {
    document.querySelector('#question_6').innerText = 'Ending function';
}

// the code below are for question 7
let number_rol = parseInt(prompt("How many times you want to roll the dice? "))
let total = 0
for (let roll = 0; roll < number_rol; roll++){
    let result = Math.round(Math.random()*6 +1)
    total += result
        document.querySelector('#question_7').innerText = "The sum of the dices are " + total;
}

// the code below are for question 8
let beginning_year = parseInt(prompt('Please enter the starting year'));
let last_year = parseInt(prompt('Please enter the last year'));
let leap_year = ""
for (let year= beginning_year; year < last_year; year++) {
    if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
        leap_year += year + "";
    } else {
        document.querySelector('#question_8').innerText = 'this is not a leap year';
    }
}
document.querySelector('#question_8').innerText = leap_year;

// the code below are for question 9
let testing_number = parseInt(prompt("Enter your number"));
if (testing_number <= 0) {
    document.querySelector('#question_9').innerText = 'please re-enter a number';
}
else if (testing_number >= 1) {
    for (let i = 2; i <= testing_number; i++) {
        if (testing_number % i === 0) {
            document.querySelector('#question_9').innerText = 'this is not a prime number';
            break;
        }
        else if (testing_number % i !== 0) {
            document.querySelector('#question_9').innerText = 'this is a prime number';
        }
    }}
else
    {
        document.querySelector('#question_9').innerText = 'this is not a prime number';}
