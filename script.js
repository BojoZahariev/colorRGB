//var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);

/*
function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
*/

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

const colorHex = () => {
  var randomColor = (Math.random().toString(16) + '000000').slice(2, 8);
  let a = randomColor.slice(0, 2);
  let b = randomColor.slice(2, 4);
  let c = randomColor.slice(4, 6);

  let hexArray = [a, b, c];
  console.log('TCL: colorHex -> hexArray', hexArray);
  return hexArray;
};

shuffleColors = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  console.log(a);
  return a;
};

let currentHex = colorHex();

shuffleColors(currentHex);

/*
//display rgb
var display2 = document.getElementById('display2');
var currentRGB = colorRGB();
display2.textContent = currentRGB;
display2.style.backgroundColor = 'rgb(' + currentRGB[0] + ',' + currentRGB[1] + ',' + currentRGB[2] + ')';

for (let i = 0; i < 3; i++) {
  let item = document.createElement('p');
  item.classList.add('item');
  display2.appendChild(item);
}

let child2 = display2.getElementsByClassName('item');
child2[0].textContent = currentRGB[0];
//needs checking the color
child2[0].style.backgroundColor = 'rgb(' + currentRGB[0] + ',' + 0 + ',' + 0 + ')';
child2[1].textContent = currentRGB[1];
child2[1].style.backgroundColor = 'rgb(' + 0 + ',' + currentRGB[1] + ',' + 0 + ')';
child2[2].textContent = currentRGB[2];
child2[2].style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + currentRGB[2] + ')';
*/
