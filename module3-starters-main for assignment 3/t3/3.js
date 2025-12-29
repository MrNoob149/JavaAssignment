'use strict';
const names = ['John', 'Paul', 'Jones'];
const length = names.length;
let result = []
for (let i = 0; i < length; i++) {
  result += "<li>" + names[i] + "</li>\n";
}
console.log(result);
document.querySelector("#target").innerHTML = result;