// Enumearting properties of an object:
// get all the properties of an object:
// check a property in an object:

const circle = {

    radius: 1,
    draw() {
        console.log('draw');
    }
}

// 1. for - in
for(let key in circle)
    console.log(key, circle[key]);

console.log('---------------------------');

// 2. for - of loop:
//circle is object, could not use in object
// for - of use in array to get the value
for(let key of Object.keys(circle))
    console.log(key);

console.log('---------------------------');

for(let entry of Object.entries(circle))
    console.log(entry);

// 3. in operator:
if('price' in circle){
    console.log('yes');
}

console.log('---------------------------');


if('draw' in circle){
    console.log('yes');
}
