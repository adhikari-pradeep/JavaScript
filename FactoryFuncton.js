// factory function : it produce objects 
// define templete of factory
// and call it
// Name: camel case: oneTwoThreeFour

function createCircle(radius){

    return {

        radius,
        draw () {
            console.log('draw');
        }
    }
}

const c1 = createCircle(1);
console.log(c1);

const c2 = createCircle(5);
console.log(c2);

//constructor Function: also used to create objects 
// or produce objects
//Name: pascal notation: OneTwoThreeFour

function Circle(radius) {

    this.radius = radius;

    this.draw = function() {
        console.log('draw', radius);
    }
}

console.log('--------------------------------------')

//how to call construction function: use new keyword
const a = new Circle(1);
console.log(a);
console.log(a.radius);
a.draw();