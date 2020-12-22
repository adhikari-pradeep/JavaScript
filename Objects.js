// vars and functions should be defined in an objects
// key:value pair format

const circle = {
    
    radius: 1,
    isVisible: true,

    location : {

        x : 1,
        y : 1
    },


    draw : function() {
        console.log('draw');
    }

}

console.log(circle.radius);
console.log(circle);

// lets suppose we need 100 different radius 
// we need to create 100 different circle 
//to resolve this issue we need factory function
