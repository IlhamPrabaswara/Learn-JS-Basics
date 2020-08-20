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
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/******************
 * Boolean Values *
 ******************/
function welcomeToBooleans() {
    return false;
}

/********************************************
 * Use Conditional Logic with If Statements *
 ********************************************/
function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "It's True";
    }
    return "It's False";
}

console.log(trueOrFalse(true));

/*****************************************
 * Comparison with the Equality Operator *
 *****************************************/
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

/************************************************
 * Comparison with the Strict Equality Operator *
 ************************************************/
function testStrict(val) {
    if (val === 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));

/***************************************
 * Practice Comparing Different Values *
 ***************************************/
function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

/*******************************************
 * Comparison with the Inequality Operator *
 *******************************************/
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

/**************************************************
 * Comparison with the Strict Inequality Operator *
 **************************************************/
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual("17"));

/*********************************************
 * Comparisons with the Logical And Operator *
 *********************************************/
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or under";
}
console.log(testGreaterThan(10));

/*********************************************************
 * Comparison with the Greater Than Or Equal To Operator *
 *********************************************************/
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterThanOrEqual(10));

/******************************************
 * Comparison with the Less Than Operator *
 ******************************************/
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(10));

/******************************************************
 * Comparison with the Less Than Or Equal To Operator *
 ******************************************************/
function testLessThanOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessThanOrEqual(10));

/*********************************************
 * Comparisons with the Logical And Operator *
 *********************************************/
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No"
}
testLogicalAnd(10);