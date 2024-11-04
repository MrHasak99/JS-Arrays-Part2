let odd = [1, 2, 3, 4, 5];
let notOdd = [1, 2, 3, 4];
function isArrayLengthOdd(numbers) {
  let answerOdd;
  if (numbers.length % 2) {
    answerOdd = "This Array is Odd";
  } else {
    answerOdd = "This Array is Not Odd";
  }
  return answerOdd;
}
console.log(isArrayLengthOdd(odd));
console.log(isArrayLengthOdd(notOdd));

let even = [1, 2, 3, 4, 5, 6];
let notEven = [1, 2, 3];
function isArrayLengthEven(numbers) {
  let answerEven;
  if (numbers.length % 2) {
    answerEven = "This Array is Not Even";
  } else {
    answerEven = "This Array is Even";
  }
  return answerEven;
}
console.log(isArrayLengthEven(even));
console.log(isArrayLengthEven(notEven));

let array = ["Moudhi", "Meshary", "Fahad", "Anwar", "Salman", "Ayah", "Aziz"];
function addLailatoArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
console.log(addLailatoArray(array));

let teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(team) {
  team.pop();
  return team;
}
console.log(eliminateTeam(teams));

let evenFruits = ["apple", "orange", "banana", "kiwi"];
let oddFruits = ["apple", "orange", "banana", "kiwi", "blueberry"];
function secondHalfOfArrayIfItIsEven(fruits) {
  const half = fruits.length / 2;
  if (fruits.length % 2) {
    while (fruits.length > 0) {
      fruits.pop();
    }
  } else {
    fruits = fruits.slice(half, fruits.length);
  }
  return fruits;
}
console.log(secondHalfOfArrayIfItIsEven(evenFruits));
console.log(secondHalfOfArrayIfItIsEven(oddFruits));

let hi = "HI!!!!!!!!!!";
let taylor = "Taylor Schwift!!!!!!!!!!!";
let hello = "Hellooooo";
function youGottaCalmDown(shout) {
  exclamation = shout.indexOf("!");
  if (exclamation > 0) {
    shout = shout.slice(0, exclamation + 1);
  } else {
    shout;
  }
  return shout;
}
console.log(youGottaCalmDown(hi));
console.log(youGottaCalmDown(taylor));
console.log(youGottaCalmDown(hello));
