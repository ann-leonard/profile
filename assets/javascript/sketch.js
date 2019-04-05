var canvas;
var x = 0;
var xSpeed = 0;
//var xOffset = 0;
var inc = 0.01
var start = 0;
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
    canvas.position(0,0);
    canvas.style('z-index','-1');
}

function draw(){
    background(60);
    stroke(255);
    noFill();
    beginShape();
    var xOff = start;
    for (var x = 0; x<windowWidth;x++){
        stroke(255);
       
        var y = noise(xOff)*windowHeight
        vertex(x,y)
        xOff += inc
    }
    endShape();
    start += inc;
  //  noLoop();
 /*   var x = map(noise(xSpeed),0,1,0,windowWidth)
    var y = map(noise(xOffset),0,1,0,windowHeight)
    xSpeed += 0.01;
    xOffset += 0.02;
    ellipse(x,y,50,50)
*/}