// dynamic nature of object in JavaScript
const circle = {
    radius: 1,
    color: 'red',
    log () { //inside objects no need to write function keyword
        console.log('log', this.radius);
    }
}

// add more properties in circle onjects
circle.price = 100;
circle.isPresent = true;
circle.draw = function(){} //outside of the objects need to write function keyword
console.log(circle);

// delete properties from circle objects
delete circle.price;
console.log(circle);

delete circle.draw;
console.log(circle);

circle.log();



