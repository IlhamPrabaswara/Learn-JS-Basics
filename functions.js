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