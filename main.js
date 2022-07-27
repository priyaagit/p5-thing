function preload(){

}

function setup(){
    camera = createCapture(VIDEO);
    camera.hide();
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw(){
    fill("blue");
    stroke("green");
    rect(20, 10, 360, 20);
    rect(20, 370, 360, 20);
    rect(10, 20, 20, 360);
    rect(370, 20, 20, 360);
    //down = y increase
    //right = x increases
    fill("red");
    stroke("red");
    circle(20, 20, 40);
    circle(380, 20, 40);
    circle(20, 380, 40);
    circle(380, 380, 40);
    
    image(camera, 40, 40, 320, 320);
}

function snapshot(){
    save("picture.png");
}
