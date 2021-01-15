const myAge = 27
/*I created the variable myAge and set the variable equal to the value of 27. I used the const variable because my age is constant for purpose of this calucation.*/
console.log(myAge)
//I checked the code.
let earlyYears = 2
/*I created the variable earlyYears. I used the let variable because the value will change. I set the variable equal to 2.*/
earlyYears *= 10.5
/*Multiplied the value stored in earlyYears by 10.5 and, in the same line, reassigned it to earlyYears; the value stored in the variable changed.*/
let laterYears = myAge - 2
/*Subtracted 2 from myAge variable and set the result equal to laterYears. I used let variable because the value will change.*/
laterYears *= 4
/*I used the multiplication assignment *= to multiply laterYears variable by 4).*/
console.log(earlyYears, laterYears)
/*Printed earlyYears, laterYears to the console to check code.*/
let myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears)
/*Added earlyYears and laterYears and stored resulting value to the variable myAgeInDogYears. Result is 109 (21 + 88 = 109).*/
myName = 'Emily'
console.log(myName)
console.log(myName.toLowerCase())
/*I printed myName to the console and it produced Emily, and I then used the .toLowerCase method and it produced emily.*/
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears}`)
/*I used string interpolation `${}' to print the sentence to the console.*/