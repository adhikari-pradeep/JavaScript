//  for / while /do-while /for...in / for...of
// infinite loop

// for(i=1; i<=10; i++){
//     console.log(i);
//         if(i%2 === 0)
//             console.log('hi this is javascript');
// }

console.log('--------------------------------------')

//while:
let i = 7;
while(i<=10){
    console.log(i);
    i++;
}

console.log('-------------------------------------')

//do while
// execute at least once
let p = 1;
    do{
        console.log(p);
        p++;
    }
    while(p<=5);

console.log('-------------------------------------');

//for...in loop
//similar to for...each loop in java

const persons = {
    name: 'Pradeep',
    age: 25 ,
    job: 'Automation Engineer'
}

for(let key in persons){
    console.log(key, persons[key]);
}

console.log('-------------------------------------');

//Array:
const colors = ['red', 'green', 'blue']

for(let index in colors){
    console.log(index, colors[index]);
}

console.log('-------------------------------------');

//for...of :
//is used to get the value from Array:
for(let col of colors){
    console.log(col);
}

console.log('-------------------------------------');

//break and continue

let k = 0;
while(k<=10){

    if(k === 5){
        break;
    }
console.log(k);
k++;
}

console.log('-------------------------------------');

for(let c=0; c<=10; c++){
    if(c === 3){
        continue;
        // skip when c equal 3 qnd continue printing rest
    }
    console.log(c);
}