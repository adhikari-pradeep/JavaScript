const mesg = 'this is my first javascript code';
const mesg1 = 'this is my\n first javascript code';
const mesg2 = 'this is my\n' + 
                '\'first\' javascript code';

// lietrals:
// Object = {}
// Boolean = true, false
// String = ' ', " "
// ES6: Template Literals ---> Back Tick chars ---> ``

let product = function(){
    return 'Apple';
}

let fName = 'Naveen';

const mailBody = `
Hi ${fName} ${2+4} ${product()},
This is Pradeep here.
Thanks for adding me in your 'mailing' list

Have a good day !

Regards
Pradeep
`
console.log(mailBody);