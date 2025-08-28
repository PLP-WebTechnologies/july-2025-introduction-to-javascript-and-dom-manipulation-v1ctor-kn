// declaration of variables
let name = 'Victor'
let num = 10

let user = {
    name: 'Victor',
    age: 22,
    country: "Kenya"
};
console.log(user);
console.log(user.name);

let fruits = ['mangoes', 'bananas', 'oranges'];
for (let i = 0; i < fruits.length; i++) {
    console.log((i + 1) + ". " + fruits[i]);
}
let i = 0;
while (i < fruits.length) {
    console.log((i + 1) + ". " + fruits[i]);
    i++;
    if (i === 2) {
    break;
    }
}
const pi = 3.14;
function areaofcicrcle (r){
    return pi*(r**2);
}
console.log(areaofcicrcle(5));

const add = (a, b) => {
    return a + b;
};

let result = add(5, 3);
console.log(result);
function manipulate(){
let heading = document.getElementById('heading');
let btn = document.getElementById('btn');
let para = document.getElementById('para');

heading.style.color = 'blue';
heading.textdecoration = 'underline', "bold";
para.style.fontSize = '20px';
para.style.color = 'green';
btn.style.backgroundColor = 'yellow';
btn.bordercolor = 'black';
}