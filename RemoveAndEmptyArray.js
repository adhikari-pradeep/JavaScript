let num = [1,2,3,4,5,6,7];
let num2 = num;

console.log(num);
console.log(num2);

// End
const last = num.pop();
console.log(num);
console.log(last);

// beginning
const first = num.shift();
console.log(num);
console.log(first);

// middle
// const mid = num.splice(2, 1);
const mid = num.splice(2);
console.log(num);
console.log(mid);

console.log('---------------------------')

//emplty array
// 1. blank array
// num = [];
console.log(num);
// this approach will another num2 reference still store the array
// will not remove for other reference 

// 2. using length
num.length = 0;
console.log(num);

// 3. using splice
// num.splice(0, num.length);
// console.log(num);

// 4. using pop method:
// quite lengthy
// while(num.length>0){
//     num.pop();
// }
// console.log(num);

console.log(num2);