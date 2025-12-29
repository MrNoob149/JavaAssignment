const items = ['first', 'second', 'third', 'fourth', 'fifth'];
let result = ""
for (let item of items) {
    result += (`${item} items\n`);
}
document.querySelector("#target").innerHTML = result;

