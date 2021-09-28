let spotsDug = [];
let spotsDugCol = [];
let spotsDugRow = [];

//! Number 1
function decode(code) {
  let top = 0;
  let bottom = 127;
  let left = 0;
  let right = 7;
  code.split("").forEach((letter) => {
    switch (letter) {
      case "F":
        bottom = Math.floor((bottom + top) / 2);
        break;
      case "B":
        top = Math.ceil((bottom + top) / 2);
        break;
      case "R":
        left = Math.ceil((right + left) / 2);
        break;
      case "L":
        right = Math.floor((right + left) / 2);
    }
  });

  // console.log(top, bottom);
  // console.log(left, right);
  if (top == bottom && left == right) {
    spotsDugCol.push(top);
    spotsDugRow.push(left);
    return top * 8 + left;
  } else {
    console.error("This went wrong");
  }
}

let small = Infinity;
let large = 0;

input.forEach((code) => {
  let decodedNum = decode(code);
  spotsDug.push(decodedNum);
  if (decodedNum > large) {
    large = decodedNum;
  } else if (decodedNum < small) {
    small = decodedNum;
  }
});
console.log(spotsDug);

console.log(`Smallest: ${small} \nLargest: ${large}`);

//! Number 2
for (let i = 51; i <= 832; i++) {
  if (!spotsDug.some((num) => num == i)) {
    console.log(`Missing: ${i}`);
    break;
  }
}


//! Number 3
function encode(number) {
  let top = 0;
  let bottom = 127;
  let left = 0;
  let right = 7;

  let col = number % 8;
  let row = (number - col) / 8;
  let colString = "";

  console.log(col, row);

  for (let i = 1; i <= 7; i++) {
    if (row < (top + bottom) / 2) {
      colString += "F";
      bottom = Math.floor((bottom + top) / 2);
    } else if (row > (top + bottom) / 2) {
      colString += "B";
      top = Math.ceil((bottom + top) / 2);
    }
  }

  for (let i = 1; i <= 3; i++) {
    if (col < (left + right) / 2) {
      colString += "L";
      right = Math.floor((right + left) / 2);
    } else if (col > (left + right) / 2) {
      colString += "R";
      left = Math.ceil((right + left) / 2);
    }
  }

  return colString;
}

console.log(encode(517));


//! Number 4

let colTotal = spotsDugCol.reduce((total, current) => {
  return total + current;
}, 0);

let rowTotal = spotsDugRow.reduce((total, current) => {
  return total + current;
}, 0);

let answer = String(colTotal * rowTotal).split("0").join("")
console.log(answer);