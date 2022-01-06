let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(1200, 675);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {
  fill(0);
  line(0,0,0,675);
  line(0,0,1200,0);
  line(0,675,1200,675);
  line(1200,0,1200,675);
  //background(230);

  freq = constrain(map(mouseX, 0, width, 100, 800), 100, 800);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 40);
  text('amp: ' + amp, 20, 60);
  if (mouseIsPressed) {
    let c = color(Math.random() * 256, Math.random() * 256, Math.random() * 256);
    fill(c);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(255);
    ellipse(mouseX, mouseY, 80, 80);
  }
  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
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
}

function shuff(arr) {
    for (var i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * arr.length);
        let val = arr[index];
        arr[index] = arr[i];
        arr[i] = val;
    }
    document.getElementById("stuff").innerHTML = arr;
    console.log(arr);
    return arr;
}