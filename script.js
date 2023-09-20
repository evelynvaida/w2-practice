/* let stringVariable = "text";
let numberVariable = 15;
let booleanVariable = true;

function myFunc(param1, param2) {
    return param1 + param2
}

console.log(stringVariable);
console.log(numberVariable, stringVariable); */

/* let array = ["alma", 12, false, undefined, null]

console.log(array)

let stringArray = ["alma", "korte", "barack"];

console.log(stringArray[4]); */
/* 
let myObj = {
    key1: "value1",
    key2: "value2",
    Key4: 15,
    key6: true,
    key7: ["alma", "korte", "barack"]
}

console.log(myObj.key7[1]); */

/* let myFacebook = {
    name: "Evelyn Vaida",
    age: 28,
    location: "Kolozsvar",
    friends: [
        "pelda peter",
        "pelda peter2"
    ],
    movies: [
        {
            title: "Harry Potter",
            year: 2001,
            casts: [
                "Harry Potter",
                "Hadvig"
            ]
        }, {
            title: "Ananasz Express",
            year: 2010,
        }
    ]
}

console.log(myFacebook.movies[0].casts[1])

let myArr = [
    ["alma", "korte"],
    ["szentkiralyi", "tesco gazd"]
]

console.log(myArr[1][0]) */

function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }
}

function logger(text) {
    console.log(text);
}

// logger(negativeOrPositive(0))

function decideIfBeerIsGood(beer) {
    /* beer = {name: "Dreher", price: 349, abv: 5} */      /* &&=AND , ||=OR */
    if(beer.price < 340 && beer.abv > 4.7) {
        return true
    } else {
        return false
    }
}

let dreher = {name: "Dreher", price: 349, abv: 5}
let sporoni = {name: "Soproni", price:329, abv: 4.5}
let borsodi = {name: "Borsodi", price:339, abv: 4.8}

logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(sporoni))
logger(decideIfBeerIsGood(borsodi))