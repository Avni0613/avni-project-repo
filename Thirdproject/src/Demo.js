{
    console.log("Welcome")
}

function execute(fn) {
    fn()
}
execute(greet());
//Map 
const number = [1, 2, 3];

const newnumber = number.map(function (n) {
    return n * 2;
})

