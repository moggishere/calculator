const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a*b;
}

const divide = function(a, b) {
    return a/b;
}

const invert = function(a) {
    return a*(-1);
}

const remainder = function(a, b) {
    return a % b;
}

const operate = function(operation , a, b) {
    return operation(a, b);
}