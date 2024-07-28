one();

function one() {
    console.log("Normal function")
}
let two = function () {
    console.log("Two")
}

two();

function three(callBack) {
    callBack();
}