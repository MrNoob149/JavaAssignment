// the codes below are for question 1
const numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt("Enter number " + (i + 1))));
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
// the codes below are for question 2
let count = parseInt(prompt("Enter number of participants"));
let names = [];

for (let i = 0; i < count; i++) {
    names.push(prompt("Enter name of participant " + (i + 1)));
}

names.sort();

let output = "";

for (let name of names) {
    output += names[name] ;
}

document.querySelector("#question_1").innerHTML = output;
console.log(output);
// the codes below are for question 3
let dogs = []
for (let i = 0; i < 6; i++) {
    dogs.push(prompt("Enter dog name " + (i + 1)));
}
dogs.sort().reverse();
let output2 = "";

for (let dog in dogs) {
    output2 += dogs[dog]
}
document.querySelector("#question_2").innerHTML = output2;
// the codes below are for question 4
let nums = [];
while (true) {
    let n = Number(prompt("Enter a number (0 to stop):"));
    if (n === 0)
        break;
    nums.push(n);
}
nums.sort((a,b) => b-a);
document.querySelector("#question_4").innerHTML = nums;
// the codes below are for question 5
let nums2 = [];
while (true) {
    let n = Number(prompt("Enter a number:"));
    if (nums2.includes(n)) {
        alert("Number has already been given!");
        break;
    }
    nums2.push(n);
}
nums2.sort((a,b) => a-b);
console.log(nums2);
document.querySelector("#question_5").innerHTML = nums2;
// the codes below are for question 8
function concat(list) {
    let result = "";
    for (let str of list) {
        result += str;
    }
    return result;
}

let names2 = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#question_8").innerHTML = concat(names2);
// the codes below are for question 9
function even(arr) {
    let evens = [];
    for (let num of arr) {
        if (num % 2 === 0) evens.push(num);
    }
    return evens;
}

let numbers3 = [2, 7, 4, 9, 12];
let evens = even(numbers3);
console.log("Original numbers:", numbers3);
console.log("Even numbers:", evens);
document.querySelector("#question_9").innerHTML = "The Original numbers are" + numbers3 + "Even numbers:" + evens;



