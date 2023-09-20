/* function logger(text) {
    console.log(text)
} */

/* logger('hello')
logger('szia') */

/* function logTheSumTwoNumbers(a, b) {
    console.log(a + b);
} */

/* logTheSumTwoNumbers(5, 10) */

/* function sumTwoNumbers(a, b) {
    let sum = 0;
    sum = a + b;

    return sum;
}

logger (sumTwoNumbers(5, 10)) */

function calculateAge(birthYear, currentYear) {
    var age = (currentYear - birthYear)-1;

    return age
}

function yourAge (text) {
    console.log("You are " + text + " years old")
}

yourAge (calculateAge(1993,2023))