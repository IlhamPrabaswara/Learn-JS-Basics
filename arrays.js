/*************************************
 * Store Multiple Values with Arrays *
 *************************************/
var myArray = ["John", 42];

/****************
 * Nested Array *
 ****************/
var nestedArray = [["Bulls", 23], ["White Sox", 46]];

/**********************************
 * Access Array Data with Indexes *
 **********************************/
var myData = myArray[0];
console.log(myData);

/**********************************
 * Modify Array Data With Indexes *
 **********************************/
myArray[0] = "Mayer";
console.log(myArray);

/***********************************************
 * Access Multi-Dimesional Arrays With Indexes *
 ***********************************************/
var multiNestArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var multiNestData = multiNestArray[2][1];
console.log(multiNestData);

/*********************************
 * Manipulate Arrays with push() *
 *********************************/
var pushArray = ["Stimpson", "J", "cat"];
pushArray.push(["happy", "joy"]);

/********************************
 * Manipulate Arrays with pop() *
 ********************************/
var popArray = [["John", 42], ["Cat", 2]];
var removedEndOurArray = popArray.pop();
console.log(popArray);

/**********************************
 * Manipulate Arrays with shift() *
 **********************************/
var shiftArray = [["John", 42], ["Dog", 3]];
var removeFirstOurArray = shiftArray.shift();
console.log(shiftArray);

/************************************
 * Manipulate Arrays with unshift() *
 ************************************/
var unshiftArray = [["John", 46], ["Dog", 3]];
unshiftArray.shift();
unshiftArray.unshift(["Paul", 60]);

/*****************
 * Shopping List *
 *****************/
var myList = [["Cereal", 3], ["Milk", 2], ["Bananas", 6]];