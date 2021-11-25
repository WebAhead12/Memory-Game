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
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
};

export const toggleSrc = (e) => {
  let target = e.target;
  let elm = document.getElementById(target.id);
  let imgSrc = elm.getAttribute("tempsrc");
  target.src = imgSrc;
  return;
};
