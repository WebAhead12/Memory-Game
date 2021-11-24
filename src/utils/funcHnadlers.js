export const newShuffle = (arr) => {
  let newPosition, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    newPosition = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPosition];
    arr[newPosition] = temp;
  }
  return arr;
};

export const createArrayOfCards = (num) => {
  let array = []; // 1 - 24 -> 1 - 12
  for (let i = 1; i < num + 1; i++) {
    console.log(i);
    console.log("new", i % 12);
    if (i % 12 === 0) {
      array.push(12);
    } else {
      array.push(i % 12);
    }
  }
  return array;
};
