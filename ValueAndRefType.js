// value type:
// number, string, boolean, symbol, undefined, null

// Reference Type:
// Object, Fuunction, Array

let x = 10;
y = x; //copy of value type
x = 20;

console.log(x);
console.log(y);

console.log('-----------------------------');

//reference type
let p = {value: 10};
let q = p;
p.value = 20;

console.log(p.value);
console.log(q.value);
//in object p is changing the value so q also refelected
// 