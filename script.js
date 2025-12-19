
// Mild Challenges 

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.
let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

// 1. If divided evenly, how much would each sibling get for the week?
let eachShare = weeklyAllowance / 3; 
console.log(" Each sibling gets: $" + eachShare);

// 2. How many games can Jordan buy with their cut?
let jordanGames = Math.floor(eachShare / game); 
console.log(" Jordan can buy " + jordanGames + " games.");

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% off. Change the variables to their new prices.
var game2 = game + 1;       
var shoes2 = shoes / 2;       
console.log(" New game price: $" + game2, "New shoe price: $" + shoes2);

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let quinnShare = eachShare;
let ricardoShare = eachShare;
let monthTotal = (quinnShare + ricardoShare) * 4;
let shoesInMonth = Math.floor(monthTotal / shoes);
console.log(" Shoes Quinn & Ricardo can buy in 4 weeks: " + shoesInMonth);

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let totalCombined = (quinnShare + ricardoShare);
let gamesTogether = Math.floor(totalCombined / game);
let gamesAlone = Math.floor(quinnShare / game) + Math.floor(ricardoShare / game);
let moreGames = gamesTogether - gamesAlone;
console.log(" They can buy " + moreGames + " more games together.");

// 6. Print out the three siblings' names."The three siblings are __, __, and ___."
console.log(" The three siblings are " + sibling1 + ", " + sibling2 + ", and " + sibling3 + ".");

// 7. Use console.log() and a built‑in method to count how many characters are in Ricardo's name.
console.log(" Characters in Ricardo's name: " + sibling3.length);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase());
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"

console.log( sibling3.toLowerCase());
// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.

function keepChar(c) {
  return c.toLowerCase() !== 'a';
}
const result = sibling3.split('').filter(keepChar).join('');
console.log(result); 





// 11. Use console.log() and a built-in method to print out "De La Rosa"

let part = sibling3.slice(8, 16); 
console.log(part);


// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

function getRandomNum() {
    return Math.floor(Math.random() * 100);
}
const random = () => Math.floor(Math.random() * 100);
console.log(random());

function greeting(name) {
    return `Hello ${name}, I'm glad you can make it!`;
}
const hello = (name) => `Hello ${name}, I'm glad you can make it!`;
console.log(hello());

function perfectRoot2(x) {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}
const perfectRoot = x => {
    const root = Math.sqrt(x);
    return (Math.floor(root) === root) ? root : "No perfect root";
};    

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    return x + y;
}
// uncomment the line below, to call the function, and add one more function call
 console.log( addNums(4, 6) );
 console.log( addNums(5, 7) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if( name === "Beyonce") { 
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works
console.log(isBeyonce("Beyonce"));
console.log(isBeyonce("Tenzing"));



/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if( x/2 ){
        return "the number " + x + " is even";
    } else {
        return "not even, " +  x;
    }
}
//Write your own function calls
console.log(reduceEvens(2));
console.log(reduceEvens(3));

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = string => string.length > 10 ? string.substring(0, 10) : string;

// Test cases
console.log(shortenString("HelloWorld"));        
console.log(shortenString("ThisIsALongString")); 
console.log(shortenString("Short"));             




// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    const numBurgers = Math.floor(budget / burger); 
    return numBurgers > 0 ? numBurgers : "Sorry, no burgers for you.";
};

// Test cases
console.log(buyBurgers(20)); 
console.log(buyBurgers(5));  
console.log(buyBurgers(18)); 
console.log(buyBurgers(5.99)); 


// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.


const buyMeals = (budget) => {
    const mealCost = burger + fries + soda; 
    const numMeals = Math.floor(budget / mealCost); 
    const leftover = +(budget - (numMeals * mealCost)).toFixed(2); 

    return numMeals > 0 
        ? `You can buy ${numMeals} meal(s) and will have $${leftover} left over.` 
        : "Sorry, you can't buy any meals.";
};

console.log(buyMeals(45)); 
console.log(buyMeals(6)); 
console.log(buyMeals(17));  
console.log(buyMeals(20)); 



// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
/// The larger side should be the hypotenuse  



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.