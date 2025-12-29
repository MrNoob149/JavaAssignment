const items = ['first', 'second', 'third'];

const target = document.querySelector("#target");

for (let item of items) {
    const li = document.createElement("li");
    li.innerText = item + " item";
    target.appendChild(li);
}