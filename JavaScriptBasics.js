// Data types:
let firstName = 'Pradeep';
let age = 25;
console.log(firstName + '   ' + age);

// Objects

let user = {
    name: "Tom",
    age: "30"
};

console.log(user)

// dot notation
console.log(user.name);
console.log(user.age);
user.age = 35;
console.log(user.age);
console.log(user.name + '   ' + user.age);

//  using bracket notation:

user['name'] = 'Mary';
console.log(user.name);

//Arrays
//list of objects
let language = ['Java','JavaScript'];
console.log(language);
console.log(language.length);

language[2] = 'Ruby';
console.log(language);

console.log(language[3]); //not error gives you undefined

//functions
//dont write ; in function
function getName(){ //zero param function
    console.log('this is my function')
}

// call the functions
getName();

//parameter based function
function greet(name, age){
    console.log('hello '+ name + '   ' + age);
}

//call again
greet('Pradeep', 25);
greet('Tom');
greet();

// return from function:
function add(num1, num2){
    return num1+num2;
}

let sum = add(10,20)
console.log(sum)

console.log(add(40,50));

function square(number){
    let root = number*number;
    return root;
}

console.log(square(7));
console.log(square(3));

//Ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//logical:
let highIncome = true;
let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//NOT (!)
let isActive = true;

console.log(!isActive);

//logical operator with non boolean
//falsy (false):
//null
//0
//false
//' '
//not a number
//truly values: not a falsy value

console.log(false || 'Pradeep');
console.log(false || 0);
console.log(false || 1 || 2);
console.log(true || 1 || 2); //immediately give true
console.log(false || undefined);
console.log(false || null);
console.log(true || null);

//real time example:
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //falsey condition

//bitwise operator
//1 = 00000001
//2 = 00000010
//3 = 00000011 -- |
//0 = 00000000 -- &

console.log(1 | 2); //3
console.log(1 & 2); //0

//operater precendence:
console.log(2+3*4); //multiplication is calculate first

//swap two values with third variable
let a = 10;
let b = 20;
let c = a;
    a = b;
    b = c;
console.log('a is ' + a);
console.log('b is ' + b);
//lets swap a = 20 and b = 20


