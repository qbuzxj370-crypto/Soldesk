function returnBak() {
    return 100;
}

function returnEBak() {
    return 200;
}

function add(a, b) {
    return a + b;
}

let result = add(returnBak(), returnEBak());
document.write(result);