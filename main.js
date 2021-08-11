
img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 240);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, gotResult) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


function draw() {
    image(img, 0, 0, 640, 420);
    
    if(status != "")
        {
            for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status : Object Detected";
    fill("#FF0000");
    precent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + precent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000")
    rect(objects.x, objects[i].y, objects[i].width, object[i].height);

            }
        }

}