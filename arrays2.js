function isArrayLengthOdd(numbers) {
  let i = 0;
  while (i < numbers.length) {
    i++;
  }
  if (i % 2) {
    console.log("This Array is Odd");
  } else {
    console.log("This Array is Not Odd");
  }
}
isArrayLengthOdd([1, 2, 3, 4, 5]);
isArrayLengthOdd([1, 2, 3, 4]);

function isArrayLengthEven(numbers) {
  let i = 0;
  while (i < numbers.length) {
    i++;
  }
  if (i % 2) {
    console.log("This Array is Not Even");
  } else {
    console.log("This Array is Even");
  }
}
isArrayLengthEven([1, 2, 3, 4, 5, 6]);
isArrayLengthEven([1, 2, 3]);

function addLailatoArray(instructors) {
  console.log(instructors);
  instructors.push("Laila");
  console.log("Laila added successfully, printing new array now:");
  console.log(instructors);
}
addLailatoArray([
  "Moudhi",
  "Meshary",
  "Fahad",
  "Anwar",
  "Salman",
  "Ayah",
  "Aziz",
]);

function eliminateTeam(teams) {
  console.log(teams);
  teams.pop();
  console.log("Team eliminated successfully, printing new array now:");
  console.log(teams);
}
eliminateTeam(["Brazil", "Germany", "Italy"]);

function secondHalfOfArrayIfItIsEven(fruits) {
  let i = 0;
  while (i < fruits.length) {
    i++;
  }
  half = i / 2;
  if (i % 2) {
    while (fruits.length > 0) {
      fruits.pop();
    }
    console.log(fruits);
  } else {
    console.log(fruits.slice(half, i));
  }
}
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]);

function youGottaCalmDown(shout) {
  exclamation = shout.indexOf("!");
  if (exclamation > 0) {
    console.log(shout.slice(0, exclamation + 1));
  } else {
    console.log(shout);
  }
}
youGottaCalmDown("HI!!!!!!!!!!");
youGottaCalmDown("Taylor Schwift!!!!!!!!!!!");
youGottaCalmDown("Hellooooo");
