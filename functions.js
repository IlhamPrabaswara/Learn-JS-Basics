/**************************************
 * Write Reusable Code with Functions *
 **************************************/
function reusableFunction() {
    console.log("Hey, World");
}

reusableFunction();

/**********************************************
 * Passing Values to Functions with Arguments *
 **********************************************/
function functionWithArgs(a, b) {
    console.log(a - b);
}
functionWithArgs(10, 5);

/******************************
 * Global Scope and Functions *
 ******************************/
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5; // Global scope
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

/*****************************
 * Local Scope and Functions *
 *****************************/
function localScope() {
    var myVar = 5;
    console.log(myVar);
}
localScope();

/***************************************
 * Global vs. Local Scope in Functions *
 ***************************************/
var outerWear = "T-shirt";

function myOutfit() {
    var outerWear = "Sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

/**********************************************
 * Return a Value from a Function with Return *
 **********************************************/
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

/**********************************************************
 * Understanding Undefined Value Returned from a Function *
 **********************************************************/
var sum = 0;
function addThree() {
    sum = sum + 3;
}

/************************************
 * Assignment with a Returned Value *
 ************************************/
var changed = 0;
function change(num) {
    return (num + 5) /3;
}
changed = change(10);
console.log(changed);

/*****************
 * Stand in Line *
 *****************/
function nextInLine(arr, item) {
    return item;
}

var testArr = [1, 2, 3, 4, 5];

