// factory function : it produce objects 
// define templete of factory
// and call it

function createCircle(paramRadius){

    const circle = {

        radius : paramRadius,
        draw () {
            console.log('draw');
        }
    }
    return circle;
}

const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2.radius);