/****************************
 * Declare String Variables *
 ****************************/
var firstName = "Ilham";
var lastName = "Prabaswara";

/**************************************
 * Escaping Literal Quotes in Strings *
 **************************************/
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

/**************************************
 * Quoting Strings with Single Quotes *
 **************************************/
var myLink = '<a href = "http://ilham.xyz/?i=1"> My Site </a>';

/*******************************
 * Escape Sequences in Strings *
 *******************************/

/***********************
Code    Output
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
***********************/

var escStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(escStr);

/*********************************************
 * Concatenating Strings with Plus Operators *
 *********************************************/
var conStr = "John " + "Mayer";
console.log(conStr);

/****************************************************
 * Concatenating Strings with Plus Equals Operators *
 ****************************************************/
var ourStr = "I come first. ";
ourStr += "I come second";
console.log(ourStr);

/***************************************
 * Constructing Strings with Variables *
 ***************************************/
var conVar = "Clayton";
var ourVar = "John " + conVar + " Mayer";
console.log(ourVar);

/**********************************
 * Appending Variables to Strings *
 **********************************/
var anAdjective = "awesome!";
var adjStr = "JavaScript is ";
adjStr += anAdjective;

/*************************
 * Find Length of String *
 *************************/
var firstNameLength;

firstNameLength = firstName.length;
console.log(firstNameLength);

/******************************************************
 * Bracket Notation to Find First Character in String *
 ******************************************************/
var firstLetterOfFirstName = "";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

/***********************
 * String Immutability *
 ***********************/
var myHello = "Hello World";
myHello = "Hey World";

/****************************************************
 * Bracket Notation to Find Nth Character in String *
 ****************************************************/
var secondLetterOfFirstName = firstName[1]
console.log(secondLetterOfFirstName);

/*****************************************************
 * Bracket Notation to Find Last Character in String *
 *****************************************************/
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

/************************************************************
 * Bracket Notation to Find Nth-to-Last Character in String *
 ************************************************************/
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName);

/***************
 * Word Blanks *
 ***************/
function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
    var result = "";

    return result;
}
console.log(wordBlanks("dog", "small", "run", "quickly"));
