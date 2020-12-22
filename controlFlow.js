// if else
// switch case

// 6 am to 12 pm -- good morning
// 12 pm to 6 pm -- good afternoon
// else -- good evening

//no need {} for single statement if single line of code in if else block

let hour = 10;
if(hour >= 6 && hour<12){
    console.log('good morning')
    console.log('good morning Pradeep');
}
else if(hour>=12 && hour<=18)
    console.log('good afternoon');
else
    console.log('good evening')

console.log('-----------------------------------')
// find out the maximum number
let a = 100;
let b = 200;
let c = 300;

if(a>b && a>c) console.log('a is the greatest..')
else if(b>c) console.log('b is the greatest..')
else console.log('c is the greatest..')

console.log('-----------------------------------')

//switch case:
let role = 'admin';

switch(role){
    case 'guest':
        console.log('guest user');
    break;
    case 'admin':
        console.log('admin user');
    break;
    case 'vendor':
        console.log('vendor user');
    break;
    default:
        console.log('no user');
    break;

}

console.log('-----------------------------------')


// role with if else
if(role === 'guest') console.log('guest user');
else if(role === 'admin') console.log('admin user');
else if(role === 'vendor') console.log('vendor user');
else console.log('no user');


