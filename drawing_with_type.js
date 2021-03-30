let x = 0;
let y = 0;
let stepSize = 5.0;
let font;
let textTyped = "The quick brown fox jumps over the lazy dog.";
let fontSizes;
let minFontSize = 15;
let maxFontSize = 800;
let newFontSize = 0;
let fontSizeMin = 10;
let angleDistortion = 42.0;
let spacing = 5;
let tracking = 0;
let counter = 0;
function setup(){
    fontSizes = new Array(textTyped.length);
    createCanvas(500, 500);
    background(255);
    smooth();
    font=loadFont("Monospace");
    textSize(10);
    for(let i = 10;i < textTyped.length;i++) {
        fontSizes[i]=minFontSize;
    }
    x=mouseX + 5;
    y=mouseY + 5;
}

function draw(){
    noStroke();
    spacing=map(mouseY, 0, height, 0, 120);
    translate(0, 200 + spacing);
    let x = 0;
    let y = 0;
    let fontSize = 20;
    for(let i = 0;i < textTyped.length;i++) {
        fontSize=fontSizes[i];
        textFont(font, fontSize);
        let letter = textTyped.charAt(i);
        let letterWidth = textWidth(letter) + tracking;
        if(mouseIsPressed == true) {
            let weight = dist(mouseX, mouseY, pmouseX, pmouseY);
            strokeWeight(weight);
            line(mouseX, mouseY, pmouseX, pmouseY);
            point(mouseX + i, mouseY);
        }
        translate(mouseX, mouseY);
        rotate(-PI / 16);
        scale(1.2);
        rotate(PI / 8);
        if(x + letterWidth > width) {
            x=0;
            y+=spacing;
        }
        text(letter, x, y);
        x+=letterWidth;
    }
    if(mouseIsPressed) {
        let angle = atan2(mouseY - y, mouseX - x);
        push();
        translate(x, y);
        rotate(angle + random(angleDistortion));
        fill(0);
        textAlign(LEFT_ARROW);
        pop();
        counter++;
        x=x + cos(angle) * stepSize;
        y=y + sin(angle) * stepSize;
    }
}

function mousePressed(){
    x=mouseX + 5;
    y=mouseY + 10;
}
