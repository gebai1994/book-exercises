let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let evenOrOdd = [];

for (let i = 0; i < myArray; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    evenOrOdd.push('even');
  } else {
    evenOrOdd.push('odd');
  }
}