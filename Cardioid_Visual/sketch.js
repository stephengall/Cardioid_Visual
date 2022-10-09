var divisions = 0;
var times = 2;
var radius = 300;
var points = [];
var animating = false;
var up = true; // used to track position in animation
function setup() {
  createCanvas(1440, 810);
  slider = createSlider(0, 5, 0, 0.01);
  slider2 = createSlider(8, 250, 0, 1);
  checkbox = createCheckbox('Animate', false);
}
function myCheckedEvent(){
  if(checkbox.checked()) animating = true;
  else animating = false;
}
function draw() {
  push();
  translate(width / 2, height / 2);
  background(51);
  for(var i = 0; i < divisions; i++){
    var multiplier = i * times % divisions;
    //converting from polar to cartesian coordinates for current index
    var x1 = radius * cos(TWO_PI / divisions * i);
    var y1 = radius * sin(TWO_PI / divisions * i);
    //converting from polar to cartesian coordinates for result of multiplication
    var x2 = radius * cos(TWO_PI / divisions * multiplier);
    var y2 = radius * sin(TWO_PI / divisions * multiplier);
    noStroke()
    fill(255, 0, 100, 100);
    circle(x1, y1, 8)
    textSize(12);
    fill(255, 100);
    //hides point labels when num of divisions get too high
    if(divisions <= 120) text(i, (radius + 30) * cos(TWO_PI / divisions * i), (radius + 30) * sin(TWO_PI / divisions * i));
    stroke(255, 50);
    //drawing line from index to it's result after multiplication
    line(x1, y1, x2, y2)
  }
  pop();
  textSize(24);
  fill(255, 100);
  text("Multiplier", 20, 40);
  text(round(times, 2), 160, 40);
  fill(255, 100);
  text("Divisions", 20, 70);
  text(divisions, 160, 70);
  //increments times variable to create animation
  if(animating){
    if(up){
      times+=0.005;
      if(times >= 5)
        up = false;
    }else{
      times -= 0.005;
      if(times <= 0)
        up = true;
    }
  }else{
    times = slider.value();
  }
  divisions = slider2.value();
  myCheckedEvent();
}

