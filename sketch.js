let osc, playing, freq, amp;
let colorArr = [];
let x  = 0;
let sorted = 0;
function setup() {
  let cnv = createCanvas(1200, 675);
  //cnv.mousePressed(playOscillator);
  //osc = new p5.Oscillator('sine');
  //noLoop();
  //frameRate(10);
  noLoop();
}

function draw() {
  fill(0);
  line(0,0,0,675);
  line(0,0,1200,0);
  line(0,675,1200,675);
  line(1200,0,1200,675);
  //background(230);

  //freq = constrain(map(mouseX, 0, width, 100, 800), 100, 800);
  //amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  //text('tap to play', 20, 20);
  //text('freq: ' + freq, 20, 40);
  //text('amp: ' + amp, 20, 60);
  /*if (mouseIsPressed) {
    let c = color(Math.random() * 256, Math.random() * 256, Math.random() * 256);
    fill(c);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(255);
    ellipse(mouseX, mouseY, 80, 80);
  }
  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    //osc.freq(freq, 0.1);
    //osc.amp(amp, 0.1);
  }*/
  background(204);
  line(x, 0, x, height);

  if (colorArr.length > 0) {
    for (let i = 0; i < colorArr.length; i++) {
      let cur = colorArr[i];
      let curColor = color(2 * cur[0], 2 * cur[1], 2 * cur[2]);
      fill(curColor);
      //square(50 + (50*i), 200, 45);
      rect(50 + (50 * i), 350 - (2 * cur[0]), 45, 50 + (2 * cur[0]));
    }
  }

  if (sorted == 1) {
    text('Sorted!', 100, 100);
  }
}

function makeArr(length) {
  let arr = [];
  for (var i = 0; i < length; i++) {
      let r = Math.floor(Math.random() * 128);
      let g = Math.floor(Math.random() * 128);
      let b = Math.floor(Math.random() * 128);
      let num = (1000000 * r) + (1000 * g) + b;
      arr.push(num);
      colorArr.push([r, g, b]);
  }
  sorted = 0;
  return arr;
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  //osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  //osc.amp(0, 0.5);
  playing = false;
}

function getFreq(mag) {
    return ((1800 * mag)/255255255) + 200;
}

function reset() {
    document.getElementById("stuff").innerHTML = "";
    redraw();
    showButtons();
}

function shuff(arr) {
    document.getElementById("header").innerHTML = "Choose Your Sort";
    showButtons();
    //myFunction();
    for (var i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * arr.length);
        let val = arr[index];
        let cVal = colorArr[index];
        arr[index] = arr[i];
        arr[i] = val;
        colorArr[index] = colorArr[i];
        colorArr[i] = cVal;
        clear();
    }
    sorted = 0;
    document.getElementById("stuff").innerHTML = arr;
    console.log(arr);
    redraw();
    return arr;
}

//let comparisons = 0;

function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  console.log("sleeping...");
  while (new Date().getTime() <= e) {}
}

/*function mousePressed() {
  x += 10;
  redraw();
}*/


function hideButtons(exempt) {
  let x = [];
  x.push(document.getElementById("bubble"));
  x.push(document.getElementById("insertion"));
  x.push(document.getElementById("quick"));
  x.push(document.getElementById("merge"));
  x.push(document.getElementById("radix"));
  for (var i = 0; i < x.length; i++) {
    if (x[i].id != exempt) {
      x[i].style.display = "none";
    }
  }
}

function showButtons() {
  let x = [];
  x.push(document.getElementById("bubble"));
  x.push(document.getElementById("insertion"));
  x.push(document.getElementById("quick"));
  x.push(document.getElementById("merge"));
  x.push(document.getElementById("radix"));
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "initial";
    }
  }
}