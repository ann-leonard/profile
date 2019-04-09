var canvas;
var inc = 0.01
var start = 0;
function windowResized(){
    console.log("new size")
    resizeCanvas(windowWidth,windowHeight)
    centerCanvas()
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
 }