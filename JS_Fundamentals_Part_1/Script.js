/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "Matilda"

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann'
console.log(lastName);
*/
/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = 25 * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

///////////////////////////////////
// Coding Challenge #1
/*
//Test data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
console.log(markBMI);

let johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Test data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markWeight2 / (markHeight2 ** 2);
console.log(markBMI2)

let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
console.log(johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
const age = 15;


if (age >= 18) {
    console.log('Sarah can start driving license 👌');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
} 


const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

*/
/*
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
console.log(markBMI);

let johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const bmiDifferenceIf = (markBMI - johnBMI)
const bmiDifferenceElse = (johnBMI - markBMI)
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) by ${bmiDifferenceIf}!`)
} else {
    console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI}) by ${bmiDifferenceElse}`)
}*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old') //both the same
console.log('23' + '10' - 3);
console.log('23' * '2');


//falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));

const money = 1000;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job!')
}

let height;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED!')
}

*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)')
if (age == 18) console.log('You just became an adult (loose)')


const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 69) {
    console.log('Nice')
} else if (favorite === 420) {
    console.log('Ayyyyyeee')
} else if (favorite === 11) {
    console.log('Welp...')
} else {
    console.log('Nerd')
}

if (favorite !== 69) console.log('Why?')
*/

/*
const hasDriversLicense = true; // variable A
const hasGoodVision = true; //variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah can drive!')
// } else {
//     console.log('Someone else should drive');
// }
const isTired = false; // variable C
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log('Sarah can drive!')
} else {
    console.log('Someone else should drive');
}*/
/*
//Bonus 1
//////////////////////////////////////////////////////
let dolphinScore1 = 97
let dolphinScore2 = 112
let dolphinScore3 = 101
if (dolphinScore1 < 100) {
    dolphinScore1 = 0
}
if (dolphinScore2 < 100) {
    dolphinScore2 = 0
}
if (dolphinScore3 < 100) {
    dolphinScore3 = 0
}
console.log(`${dolphinScore1}`);
console.log(`${dolphinScore2}`);
console.log(`${dolphinScore3}`);

let koalaScore1 = 109
let koalaScore2 = 95
let koalaScore3 = 123
if (koalaScore1 < 100) {
    koalaScore1 = 0
}
if (koalaScore2 < 100) {
    koalaScore2 = 0
}
if (koalaScore3 < 100) {
    koalaScore3 = 0
}
console.log(`${koalaScore1}`);
console.log(`${koalaScore2}`);
console.log(`${koalaScore3}`);

const dolphinAverageScore = (Number(`${dolphinScore1}`) + Number(`${dolphinScore2}`) + Number(`${dolphinScore3}`)) / 3
console.log(dolphinAverageScore);
const koalaAverageScore = (Number(`${koalaScore1}`) + Number(`${koalaScore2}`) + Number(`${koalaScore3}`)) / 3;
console.log(koalaAverageScore);

//Main challenge #1
//////////////////////////////////////////////////////////////
const mainDolphinScore1 = 96
const mainDolphinScore2 = 108
const mainDolphinScore3 = 89

const mainKoalaScore1 = 88
const mainKoalaScore2 = 91
const mainKoalaScore3 = 110

const mainDolphinAverage = (Number(`${mainDolphinScore1}`) + Number(`${mainDolphinScore2}`) + Number(`${mainDolphinScore3}`)) / 3
console.log(mainDolphinAverage);

const mainKoalaAverage = (Number(`${mainKoalaScore1}`) + Number(`${mainKoalaScore2}`) + Number(`${mainKoalaScore3}`)) / 3
console.log(mainKoalaAverage);

if (mainDolphinAverage > mainKoalaAverage) {
    console.log('Dolphins win!');
} else if (mainDolphinAverage === mainKoalaAverage) {
    console.log("It's a tie!")
} else {
    console.log("Koalas win!");
}

//Bonus 2
/////////////////////////////////////////////////////////////////
let dolphinScore1Bonus2 = 97
let dolphinScore2Bonus2 = 112
let dolphinScore3Bonus2 = 101

if (dolphinScore1Bonus2 < 100) {
    dolphinScore1Bonus2 = 0
}
if (dolphinScore2Bonus2 < 100) {
    dolphinScore2Bonus2 = 0
}
if (dolphinScore3Bonus2 < 100) {
    dolphinScore3Bonus2 = 0
}

let dolphinAverageB2 = (Number(`${dolphinScore1Bonus2}`) + Number(`${dolphinScore2Bonus2}`) + Number(`${dolphinScore3Bonus2}`)) / 3
if (dolphinAverageB2 < 100) {
    dolphinAverageB2 = 0
}

let koalaScore1Bonus2 = 109
let koalaScore2Bonus2 = 95
let koalaScore3Bonus2 = 106

let koalaAverageB2 = (Number(`${koalaScore1Bonus2}`) + Number(`${koalaScore2Bonus2}`) + Number(`${koalaScore3Bonus2}`)) / 3

if (koalaAverageB2 < 100) {
    koalaAverageB2 = 0
}

if (dolphinAverageB2 > koalaAverageB2 && dolphinAverageB2 >= 100) {
    console.log("Dolphins win!")
} else if (dolphinAverageB2 < koalaAverageB2 && koalaAverageB2 >= 100) {
    console.log("Koalas win!")
} else {
    console.log("Nobody wins...")
}
*/
/*
const day = 'thursday';

switch (day) {
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos')
} else if (day === 'saturday' || 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day!');
}
*/
/*
const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
let drink2
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
let bill = 430
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${Number(bill + tip)}`)