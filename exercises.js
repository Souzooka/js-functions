/*
* A function is a block of code (a series of instructions) designed to execute a certain task. Functions allow you to reuse code.
 
* i.e. A function to generate a greeting to specific person you designate:*/

// Step One: Define the function.
function greeting(guest){ // takes in a parameter named 'guest' which acts like a local variable inside the function
 return "Good afternoon " + guest + ".";  // the output value after the function is invoked
}
greeting("Mr. Smith"); // invoking or calling the function to execute the code (instructions) inside the function.

// Step Two: Assign the function invocation to a variable.
var testGreeting = greeting("Mr. Smith"); // assigning the function call into a variable 

// Step Three: Console.log the variable to test function output!
console.log(testGreeting); // printing the output value of the function.

// From your terminal, try running this file with node in order to see the result of `console.log(testGreeting);`

/*Below are some specifications for Functions to be built. */
/*
 * #1
 * Declare two variables
 *   @variable Datatype: Number `bango1`
 *   @variable Datatype: Number `bango2`
 *
 * These two variables will be used to invoke the functions #2 - #5.
*/ 

var bango1 = 821;
var bango2 = 43;


/*
 * #2
 * Function - add
 * Create a function named `add` which will take two parameters: `num1` and `num2`.
 * 
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will add two numbers (the parameters, `num1` and `num2`) and 
 * return the sum of these two numbers.
 * Invoke the function and assign it to a variable named `sum`.
 * Console.log `sum` to test your code.
*/

function add(num1, num2) {
	if (((typeof num1) === "number") && ((typeof num2) === "number")) {
		return num1 + num2;
	}
	else {
		return "Please enter in 2 numbers. (function add())";
	}
}

sum = add(4,3);
console.log(sum);
console.log(add("q", 13));

/*
 * #3
 * Function - subtract
 * Create a function named `subtract` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will subtract two numbers and return the difference of these two numbers.
 * Invoke the function and assign it to a variable named `difference`.
 * Console.log `difference` to test your code.
*/ 

function subtract(num1, num2) {
	if (((typeof num1) === "number") && ((typeof num2) === "number")) {
		return num1 - num2;
	}
	else {
		return "Please enter in 2 numbers. (function subtract())";
	}
}

difference = subtract(17,8)
console.log(difference);

/*
 * #4
 * Function - multiply
 * Create a function named `multiply` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will multiply two numbers and return the product of these two numbers.
 * Invoke the function and assign it to a variable named `product`.
 * Console.log `product` to test your code.
*/

function multiply(num1, num2) {
	if (((typeof num1) === "number") && ((typeof num2) === "number")) {
		return num1 * num2;
	}
	else {
		return "Please enter in 2 numbers. (function multiply())";
	}
}

product = multiply(21,232);
console.log(product);

/*
 * #5
 * Function - divide
 * Create a function named `divide` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will divide two numbers and return the quotient of these two numbers.
 * Invoke the function and assign it to a variable named `quotient`.
 * Console.log `quotient` to test your code.
*/

function divide(num1,num2) {
	if (((typeof num1) === "number") && ((typeof num2) === "number")) {
		return num1 / num2;
	}
	else {
		return "Please enter in 2 numbers. (function divide())";
	}
}

quotient=divide(7,8);
console.log(quotient);

/*
 * #6
 * Function - checkSum
 * Create a function named `checkSum` which will take a parameter: `x`.
 *
 *   @param Datatype: Number `x`
 *   @return Datatype: String
 *
 * This function will return the string "Mariah Carey has been married `x` amount of times." Where `x` is the value when you invoke the function. Invoke this function using the variable `sum`. 
 * Console.log your result.
*/

function checkSum(x) {
	if ((typeof x) === "number") {
		return "Mariah Carey has been married " + x + " amount of times.";
	}
	else {
		return "Please enter in a number. (function checkSum())";
	}
}

console.log(checkSum(sum));
console.log(checkSum("e"));


/*
 * #7
 * Function - checkDifference
 * Create a function named `checkDifference` which will take a parameter `x`.
 *
 *    @param Datatype: Number `x`
 *    @return Datatype: String
 *
 * This function will return the string "Last night I dreamt that I ate `x` Taco Bell soft tacos."  Where `x` is the value when you invoke the function. Invoke this function using the variable `difference`.
 * Console.log your results.
*/ 

function checkDifference(x) {
	if ((typeof x) === "number") {
		return "Last night I dreamt that I ate " + x + " Taco Bell soft tacos.";
	}
	else {
		return "Please enter in a number. (function checkDifference())";
	}
}

console.log(checkDifference(difference));

/*
 * #8
 * Function - checkProduct
 * Create a function named `checkProduct` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the sum and product.
 * Console.log your result.  
*/

function checkProduct() {
	if (((typeof sum) === "number") && ((typeof product) === "number")) {
		return sum*product;
	}
	else {
		return "Please make sure that variables \"sum\" and \"product\" are numbers. (function checkProduct())";
	}
}

console.log(checkProduct());

/*
 * #9
 * Function - checkQuotient
 * Create a function named `checkQuotient` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the product and quotient.
 * Console.log your result.  
*/

function checkQuotient() {
	if (((typeof product) === "number") && ((typeof quotient) === "number")) {
		return product*quotient;
	}
	else {
		return "Please make sure that variables \"product\" and \"quotient\" are numbers. (function checkQuotient())";
	}
}

console.log(checkQuotient());

/*
 * #10
 * Function - addThenSubtract
 * Declare three variables
 *
 *   @variable Datatype: Number `bango3`
 *   @variable Datatype: Number `bango4`
 *   @variable Datatype: Number `bango5`
 *   
 * Next, create a function named addThenSubtract which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will add the first two parameters together. Then with the sum of that operation, subtract it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 

var bango3 = 2131;
var bango4 = 7;
var bango5 = 32;

function addThenSubtract(num1,num2,num3) {
	if ((typeof num1 === "number") && (typeof num3 === "number") && (typeof num3 === "number")) {
		var sum = add(num1, num2);
		return subtract(sum, num3);
	}
	else {
		return "Please enter in 3 numbers. (function addThenSubtract())";
	}
}


/*
function addThenSubtract(num1, num2, num3) {
	return (subtract(add(num1,num2),num3));
}
*/

console.log(addThenSubtract(bango3,bango4,bango5));

/*
 * #11
 * Function - multiplyThenDivide
 * Create a function named multiplyThenDivide which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will multiply the first two parameters together. Then with the product of that operation, divide it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 

function multiplyThenDivide(num1,num2,num3) {
	if ((typeof num1 === "number") && (typeof num3 === "number") && (typeof num3 === "number")) {
		var product = multiply(num1,num2);
		return divide(num3,product);
	}
	else {
		return "Please enter in 3 numbers. (function multiplyThenDivide())";
	}
}

console.log(multiplyThenDivide(bango3,bango4,bango5));

/*
 * #12
 * Function - createFullName
 * Create a function named createFullName which takes two parameters: `firstName`, `lastName`.
 *
 *   @param Datatype: String `firstName`
 *   @param Datatype: String `lastName`
 *   @return Datatype: String
 *
 *  This function `returns` back a string which represents someone's full name. Invoke this function by passing in your first  and last name into the function. Store the return value into a variable named `myFullName` and console.log this variable to show your result.
*/

function createFullName(firstName, lastName) {
	if ((typeof firstName === "string") && (typeof lastName === "string")) {
		return firstName + " " + lastName;
	}
	else {
		return "Please enter in 2 strings. (function createFullName())";
	}
}

console.log(createFullName("Jayden","Smith"));

/*
 * #13 
 * Function - eatFood
 * Create a function named eatFood which takes three parameters: `firstName`, `lastName`, `food`.
 *
 *   @param Datatype: String `firstName`
 *   @param Datatype: String `lastName`
 *   @param Datatype: String `food`
 *   @return Datatype: String
 *
 * This function will use the previous `createFullName` function above to create a message. For example, if you invoked the function like this: eatFood("Biggie", "Smalls", "Won Ton Soup"); it will display the message "Biggie Smalls eats Won Ton Soup everyday for breakfast."
 * Console.log your result.
 */

function eatFood(firstName,lastName,food) {
	var fullName = createFullName(firstName,lastName);
	return fullName + " eats " + food + " everyday for breakfest.";
}

console.log(eatFood("Barack","Obama","cereal"));

/************** ENGAGE HYPERDRIVE **************/
/* No more training wheels! For the exercises #14-18, use the experience you've
*  gained figure out how to build the necessary functions. Use your google-fu to 
*  figure out anything you don't know! Ganbatte (good luck)! */
/************** FIRE ALL CANNONS ***************/

/*
 * #14
 * Function shoeSize
 * Create a function that will take in a parameter named `inches`. This function will convert inches to centimeters(cm).
 * Console.log your result. 
*/

function shoeSize(inches) {
	if (typeof inches === "number") {
		return "This shoe size is " + (inches*2.54) + " in centimeters(cm).";
	}
	else {
		return "Please enter in a number."
	}
}

console.log(shoeSize(9));

/*
 * #15
 * Function allCaps
 * Create a function that will take in a parameter named `str`. 
 * This function will capitalize all the letters in the string. 
 * Console.log your result.
 * Example input: "believe you can and you're halfway there."
 * Example output: "BELIEVE YOU CAN AND YOU'RE HALFWAY THERE."
*/
 
function allCaps(str) {
	return str.toUpperCase();
}

var phrase = "believe you can and you're halfway there.";
console.log(allCaps(phrase))

/*
 * #16
 * Function oneCap
 * Create a function that will take in a parameter named `str`. 
 * This function will capitalize only the first letter in the variable phase above. 
 * Console.log your result.
*/

function oneCap(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(oneCap(phrase));


/*
 * #17
 * Function - verifyDrinkingAge
 * Create a function named verifyDrinkingAge which takes a parameter named `age`. 
 * This function returns a Boolean value, `true` or `false`, depending on 
 * whether `age` is above or below the legal drinking age in the state of Hawaii.
 *
 * Call this function and pass in a number value.
 * Store the return value to a variable named `canDrink`. Console.log your result.
 */

var drinkingThreshold = 21;

function verifyDrinkingAge(age) {
	if (age >= drinkingThreshold) {
		return true;
	}
	else {
		return false;
	}
}

var canDrink = verifyDrinkingAge(16);
console.log(canDrink);

/**
 * #18
 * Function - throwParty
 * Create a function named throwParty. This function will check the value stored in the `canDrink` variable in the previous exercise. If the value is true, it will return the message "Cheee Hoo! We going to da party!" If false, then it will return the message "Meh, see you at Starbucks." Store the return value to a variable named `canParty`. Console.log your result.
 */

function throwParty() {
	if (canDrink) {
		return "Cheee Hoo! We going to da party!";
	}
	else {
		return "Meh, see you at Starbucks.";
	}
}

var canParty = throwParty();
console.log(canParty);



