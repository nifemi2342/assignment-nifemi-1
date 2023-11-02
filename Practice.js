
//Example 1
function checkIfAvailable(color) {
	const colors = ["red", "green", "orange", "blue", "yellow"];
	//console.log(colors.includes(color));
	if (colors.includes(color)) {
		return "Yes, " + color + " is available";
	}
	return "No, " + color + " is NOT available";
}

let isColorAvailable = "";
isColorAvailable = checkIfAvailable("red");
console.log(isColorAvailable);
isColorAvailable = checkIfAvailable("brown");
console.log(isColorAvailable);

// Example 2 - Equality

function isEqualTo10(val) {
	if (val == 10) {
		return "Equal";
	}
	return "Not Equal";
}

let result = "";
result = isEqualTo10(10);
console.log(result);

result = isEqualTo10("10");
console.log(result); //-> Equal due to Type Coercion

// Example 3 - Strict Equality
function isStrictlyEqualTo10(val) {
	if (val === 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = isStrictlyEqualTo10("10");
console.log(result); //-> Not Equal because of an inequable data type

/* 
Assignment 
Demonstrate the comparison operators using a functions that return "Equal" if true or "Not Equal" if false
*/

/* 
Assignment 
Demonstrate the comparison operators using a functions that return "Equal" if true or "Not Equal" if false
*/
function isGreaterThan(val) {
	if (val < 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = isGreaterThan ("10");
console.log(result);

function isGreaterThanOrEqualTo(val) {
	if (val === 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = isGreaterThanOrEqualTo("10");
console.log(result);

function isLessThan(val) {
	if (val === 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = isLessThan("10");
console.log(result);

function isLessThanOrEqualTo(val) {
	if (val <= 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = isLessThanOrEqualTo("10");
console.log(result);
function LogicalAnd(val) {
	if (val && 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = LogicalAnd("10");
console.log(result);

function LogicalOr(val) {
	if (val || 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = LogicalOr("10");
console.log(result);

/* 
	Example 4 Logical AND Operator 
  
	Ok Sometimes you want to test more than one thing at a time. The logical AND operator returns true ONLY if the operands on the left and right of it evaluate to true.

	So if true && true //-> true however false && true //-> false

*/
let num = 5;
if (num > 2 && num < 8) {
	console.log("Yes");
}
/* console.log("No"); */

/* 
ClassWork - Replace the following nested if statements with a logical AND operator 

function testLogicalAND(val) {
	if (val >= 3) {
		if (val < 7) {
			return "Yes";
		}
	}
	return "No";
}

*/

function testLogicalAND(val) {
	if (val >= 3 && val < 7) {
		return "Yes";
	}
	return "No";
}

console.log(testLogicalAND(4));
console.log(testLogicalAND(2));

/* 
	Example 5 Logical OR Operator 
  
	Ok Sometimes you want to test more than one thing at a time. The logical OR operator returns true ONLY if either of the operands on the left and right of it evaluate to true.

	So if true && false //-> true however false && false //-> false
*/

num = 3;
if (num > 10 || num < 5) {
	console.log("No");
}
/* console.log("Yes"); */

/*ClassWork - Replace the following if statements with a logical OR operator 

function testLogicalOR(val) {
	if (val > 15) {
		return "Outside";
	}
	if (val <= 10) {
		return "Outside";
	}
	return "Inside";
}

*/

function testLogicalOR(val) {
	if (val > 15 || val <= 10) {
		return "Outside";
	}
	return "Inside";
}
console.log(testLogicalOR(15));
console.log(testLogicalOR(10));

/* 
Else Statement
	We know that when an if statement condition is true, the block of code following it is executed. However what happens if the condition is false? Normally nothing happens. However with an else statement we can execute an alternative block of code.
*/

if (num > 12) {
	console.log("Bigger than 12");
} else {
	console.log("12 or less");
}

/* 
Classwork - Combine the multiple if statements into a single if/else statement

function elseTest(val) {
	let r = "";
	if (val > 4) {
		r = "Bigger than 4";
	}
	if (val <= 4) {
		r = "4 or Smaller";
	}

	console.log(r);
}
*/
function elseTest(val) {
	let r = "";
	if (val > 4) {
		r = "Bigger than 4";
	} else {
		r = "4 or Smaller";
	}
	console.log(r);
}

elseTest(3);
elseTest(6);

/* 
 Else if Statement 

 If you need to evaluate multiple conditions, then you chain if statements together with the else if statement.

 Please note that the Order of evaluation in else if statements is important. Since the function is executed from top to bottom. So pay attention to what statement comes first.

*/

num = 2;
if (num > 20) {
	console.log("Bigger than 20");
} else if (num < 10) {
	console.log("smaller than 10");
} else {
	console.log("between 10 and 20");
}

/* 
	The Switch Statement 

	If you need to match a single value against multiple options you can use switch statement. 

	A switch statement compares the value to the "case" statement which define the various possible options.

	Any valid JavaScript statement can be used or executed within the case block. 

	JS will execute code in each case block until it encounters a "break" statement

*/

let flavour = "chocolate";

switch (flavour) {
	case "strawberry":
		console.log("I love Strawberry");
		break;
	case "vanilla":
		console.log("I love Vanilla");
		break;
	default:
		console.log("I don't like that flavour");
}

let r = "";

function myWinningNumber(num) {
	switch (num) {
		case 1:
		case 2:
		case 3:
			r = "1, or 2, or 3";
			break;
		case 4:
			r = "4 is lonely";
	}
}

myWinningNumber(1);
console.log(r);
myWinningNumber(4);
console.log(r);
myWinningNumber(3);
console.log(r);
myWinningNumber(2);
console.log(r);

/* 
Assignment 1 
Write a function called showRange takes a number as parameter. Use a switch statement to return the appropriate range the number belongs as a string based on the following conditions

1-3 //-> Low
4-6 //-> Mid
7-9 //-> High

Test cases
showRange(1) //-> Low;
showRange(2) //-> Low;
showRange(3) //-> Low;
showRange(4) //-> Mid;
showRange(5) //-> Mid;
showRange(6) //-> Mid;
showRange(7) //-> High;
showRange(8) //-> High;
showRange(9) //-> High;
*/ 

let num3 = ""
function showRange (val) {
	switch (val) {
		case 1:
		case 2:
		case 3:	
		    num3 ="Low";
			break;
	      
		case 4:
		case 5:
		case 6:
			num3 ="Mid";
			break;
		case 7:
		case 8:
		case 9:
			num3 ="High"
		 
		default:
			break;
	}
	
}

showRange(1);
console.log(num3)
showRange(2);
console.log(num3)
showRange(3);
console.log(num3)
showRange(4);
console.log(num3)
showRange(5);
console.log(num3)
showRange(6);
console.log(num3)
showRange(7);
console.log(num3)
showRange(8);
console.log(num3)
showRange(9)
console.log(num3)
/* 
	Assignment 2 
 Change the following if/else if statements to a switch statement.
 
	function changeToSwitch(arg) {
		let result = "";
		if (arg = "dupe") {
			result = "She is beautiful"
		} else if (arg <= 20) {
			result = "You're too young";
		} else if (arg === "address") {
			result = "I don't live here"
		} else if (arg > 20) {
			 result = "You're old enough "
		} else if (arg > 80) {
			result = "Sir, You're a distinguished elder statesman"
		} else {
			result = "I don't understand your request"
		}

		return result;
	}

	changeToSwitch(21);

*/

let resul = "";
function changeToSwitch(arg) {
	
	switch (arg) {
		case arg = "dupe":
			resul ="She is beautiful";
			break;
	    case arg <= 20:
		    resul = "You're too young";
		   break;
		case (arg === "address"):
			resul = "I don't live here";
			break;
		case (arg > 20):
			result = "You're old enough ";
			break;
		case (arg > 80):
			result = "Sir, You're a distinguished elder statesman";
			break;
		default:
			result = "I don't understand your request"
			break;
	}

}
		
	changeToSwitch(21);
   console.log(result)


const blogArticle = {
	title: "How to create Objects",
	link: "https://exapmle.com/how-to-create-object.html",
	author: "Nifemi odulaja",
	tags: ["anime", " javascript",]
}

const articleAuthor = blogArticle.author;
const articleLink = blogArticle["link"];

console.log(articleAuthor);
console.log(articleLink)

const val = "title"
const valLookup = blogArticle[val]
console.log(valLookup)

function colorLookup(color) {
	let hexCode = "";

	const lookupColor = {
		white: "#ffffff",
		black: "#000000",
		blue: "#0000FF",
		red: "#FF0000",
		green: "#008000",
	};

	hexCode = lookupColor[color];
	if (hexCode === undefined) {
		hexCode = "Unavailable";
	}

	//Only change code above this line
	return hexCode;
}

console.log(colorLookup("blue"));
console.log(colorLookup("black"));
console.log(colorLookup("Yellow"));


/* 
	Assignment(compulsory) - CD Collection 

	Create a function that helps in the maintenance of a music CD Collection. Organize the collection as an object that contains multiple CDs which are also objects. Each CD must have a unique id as property name to identify it.Within each CD there are various properties describing information about the CD. Not all CDs have complete information.

	DATA
	--------------------------------------------------
	|id	 | cdTitle     | artist  | tracks 			   
	--------------------------------------------------
	|234 | Unruly      | Olamide | 'Gaza','Jinja'  
	--------------------------------------------------
	--------------------------------------------------
	|254 | Savage      | Rema    | 'DND','Red potion' 
	--------------------------------------------------
	--------------------------------------------------
	|264 | Work Of Art | Asake   | ['2:30']               
	--------------------------------------------------
	--------------------------------------------------
	|284 | I Told Them |         |
	--------------------------------------------------

	A) Based on the Data above create and complete the CD Collection Object. It will be used for the tests
	*/
	const cdCollection = {
		234: {
			cdTitle: "Unruly",
			artist: "Olamide",
			tracks: ["Gaza", "Jinja"],
		},
		254: {
			cdTitle: "Ravage",
			artist: "Rema",
			tracks: ["DND", "Red potion"],
		},
		
			264: {
				cdTitle: "Work of art",
				artist: "Asake",
				tracks: ["2:30"],
	
			},
		
	
		//-> Add the other CD objects here
	
		284: {
			cdTitle: "I Told Them",
			artist: "Burnaboy",
			tracks: ["City boys"],
		},
	};
	/*
		B) Create an updateCollection function which 
		takes 4 arguments represented by the following 
		parameters:
	
		CDs - an object containing several individual CD
		id - a unique number representing a specific CD object
		prop - a string representing the name of the CD property 
		to update
		value - the string containing information used to update 
		the CD's property
	
		Complete the function using the following rules to update the object passed to the object
	
		1. Your function must always return the entire CD collection
		2. if value is an empty string, delete the given prop property 
		from the album  
		3. If prop isn't tracks and value isn't an empty string, 
		assign the value to that CD's prop
		4. If the prop is tracks and value isn't an empty string,
		then update the CD tracks array. 
		5. If the CD does not have a tracks property,
		assign it an empty array, then add the value as the last 
		item in the CD's tracks array.
	
	*/
	function updateCollection(collection, id, prop, value) {
		// Add your code here

		/*const CDs = {
			CD1: "Unruly",
			CD2: "Ravage",
			CD3: "Work of art",
			CD4: "I Told Them"
		},
		id = {

		},
		prop = {

		},
		value = {

		}*/

		
	
		
		return collection;
	}
	
	/* 
		 Tests 
		- DO NOT modify the cdCollections Object used for the tests.
		- After calling the updateCollection with the following 
		parameters the following is the expected outputs
	 */
	console.log(updateCollection(cdCollection, 284, "artist", "Burna Boy")); //-> artist should be the string Burna Boy
	console.log(updateCollection(cdCollection, 284, "tracks", "City Boys")); //-> tracks should have the string City Boys as the last and only element of the tracks array.
	console.log(updateCollection(cdCollection, 234, "artist", "")); //-> artist should not be set
	console.log(updateCollection(cdCollection, 264, "tracks", "Sunshine")); //-> tracks should have the string Sunshine as the last element of the tracks array.
	console.log(updateCollection(cdCollection, 254, "tracks", "Trouble Maker")); //-> tracks should have a length of 3 and string DND as the first element of the tracks array.
	console.log(updateCollection(cdCollection, 234, "tracks", "")); //-> tracks should not be set
	console.log(updateCollection(cdCollection, 254, "cdTitle", "Ravage")); //-> cdTitle should be the string Ravage
	
	/* JavaScript Loops */