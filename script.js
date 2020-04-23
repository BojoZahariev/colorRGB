//hex
var randomColor = (Math.random().toString(16) + '000000').slice(2, 8);

//rgb
colorRGB = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  //return 'rgb(' + r + ',' + g + ',' + b + ')';
  console.log('ding');
  let rgbArray = [r, g, b];
  return rgbArray;
};

//display hex
var display = document.getElementById('display');
randomColor = randomColor.toUpperCase();
display.textContent = randomColor;
display.style.backgroundColor = '#' + randomColor;

for (let i = 0; i < 3; i++) {
  let item = document.createElement('p');
  item.classList.add('item');
  display.appendChild(item);
}

let child = display.getElementsByClassName('item');
child[0].textContent = randomColor.slice(0, 2);
child[1].textContent = randomColor.slice(2, 4);
child[2].textContent = randomColor.slice(4, 6);

//FOR REACT
const colorHex = () => {
  var randomColor = (Math.random().toString(16) + '000000').slice(2, 8);
  let a = randomColor.slice(0, 2);
  let b = randomColor.slice(2, 4);
  let c = randomColor.slice(4, 6);

  let hexArray = [a, b, c];

  return hexArray;
};

const shuffleColors = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

let currentHex = colorHex();
console.log('TCL: currentHex', currentHex);
let shuffledHex = [...currentHex];
let shuffledHex2 = shuffleColors(shuffledHex);
console.log('TCL: shuffledHex2', shuffledHex2);
var display3 = document.getElementById('display3');

display3.style.backgroundColor = `#${shuffledHex2.join('')}`;
console.log(shuffledHex2[0].toUpperCase());
console.log(shuffledHex2[1].toUpperCase());
console.log(shuffledHex2[2].toUpperCase());
