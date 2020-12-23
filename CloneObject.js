const circle = {

    radius : 1,

    draw(){
        console.log('draw');
    }
}

// console.log(circle);

console.log('-----------------------');

// 1. cloning using for - in loop
const another = {};
console.log(another);

//old way of doing
for(let key in circle)
another[key] = circle[key];
console.log(another);

console.log('-----------------------');


// 2. using Object.assign method:
const another1 = Object.assign({}, circle);
console.log(another1);

const another2 = Object.assign({
    color: 'red'} , circle);
console.log(another2);
another2.draw();

// 3. third way
// spread ... operator
const another3 = {...circle};
console.log(another3);
another3.draw();