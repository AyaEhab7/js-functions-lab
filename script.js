//Exercise 1:  
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//Exercise 2:  
function isAdult (age){ 
    return age >= 18 ? 'Adult' : 'Minor';
}
console.log('Exercise 2 Result:', isAdult(21));


//Exercise 3:
// 'aeiou
function isCharAVowel(char) {
    if (char === 'a') {
        return true;
    } else if (char === 'e') {
        return true;
    } else if (char === 'i') {
        return true;
    } else if (char === 'o') {
        return true;
    } else if (char === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

 //Exercise 4:
 function generateEmail(name, domain) {
    return `${name}@${domain}`;    
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



 //Exercise 5:
 function greetUser(name, timeOfDay) {
    let greeting;

    if (timeOfDay === 'morning') {
        greeting = 'Good morning';
    } else if (timeOfDay === 'afternoon') {
        greeting = 'Good afternoon';
    } else if (timeOfDay === 'evening') {
        greeting = 'Good evening';
    } else {
        greeting = 'Hello';
    }

    return `${greeting},${name}!`;
}
console.log('Exercise 5 Result:', greetUser("aya", "morning"));


//Exercise 6:
function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


//Exercise 7:
function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


//Exercise 8:
function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        // Convert Celsius to Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        return (temperature - 32) * 5/9;
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//Exercise 9:
function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            return num1 / num2;
    }
}}   
    
  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


