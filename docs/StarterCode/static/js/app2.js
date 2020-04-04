function add1(a, b) {
    var result = a+b
    return multiply(result)
}

function multiply(c) {
    return c*c;
}

var result = add1(1, 2)
console.log(result);