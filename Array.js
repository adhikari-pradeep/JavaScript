const num = [3, 4];

console.log(num.length);
console.log(num);

console.log(num[0]);
console.log(num[2]); //return undefined

// add an element at the end of the array:
num.push(5,6);
console.log(num);

// add an element at the beginning of the array:
num.unshift(1,2);
console.log(num);

// add an element at the middle of the array:
num.splice(2, 0,'a, b,');
console.log(num);

// hoe to print all the values from an array:
//for-in loop
for(const key in num){
    console.log(num[key]);

}

console.log('----------------------------');

// find the elements in array: for primitive data
// six primitive data type
//1.null
// 2.undefined
// 3.boolean
// 4.number
// 5.string
// 6.symbol – available only from ES6

// and one complex data type called object.

const s = [1,2,3,1,4,'a'];

console.log(s.indexOf(1)); //0 : 1st occurance of 1
console.log(s.indexOf(5));
console.log(s.indexOf('a'));
console.log(s.indexOf('1'));

console.log(s.indexOf(1, s.indexOf(1)+1)); //2nd occurence of 1

console.log(s.indexOf(3) !==-1); // true : old way

console.log(s.includes(3));

console.log('----------------------------')


// find elements in array: (ref type means Objects)
// Array can have Objects...

const courses = [
    
    {id: 1, fName: 'a'},
    {id: 2, fName: 'b'}

];

// console.log(courses.includes({id: 1, fName: 'a'})); // false : wrong way

//lambda function
const c3 = courses.find(course => course.fName === 'a');

const c1 = courses.find(function(course){
    return course.fName == 'a';
});


console.log(c1);
console.log(c1.fName);
console.log(c1.id);

const c2 = courses.findIndex(function(course){
    return course.fName == 'a';
});

console.log(c2);

