float x = 0, y = 0;
float stepSize = 5.0;

PFont font;
String textTyped = "The quick brown fox jumps over the lazy dog.";
float[] fontSizes = new float[textTyped.length()];
float minFontSize = 15;
float maxFontSize = 800;
float newFontSize = 0;
int fontSizeMin = 10;
float angleDistortion = 42.0;

float spacing = 5;
float tracking = 0;

int counter = 0;

void setup() {
  size(500, 500);
  background(255);
  smooth();
  
  font = createFont("Monospace", 10);
  
  for (int i = 10; i < textTyped.length(); i++) {
    fontSizes[i] = minFontSize;
  }
  
  x = mouseX+5;
  y = mouseY+5;
}

void draw() {
  noStroke();

  spacing = map(mouseY, 0, height, 0, 120);
  translate(0, 200+spacing);
  
  float x = 0, y = 0, fontSize = 20;
  
  for (int i = 0; i < textTyped.length(); i++) {
    fontSize = fontSizes[i];
    textFont(font, fontSize);
    char letter = textTyped.charAt(i);
    float letterWidth = textWidth(letter) + tracking;
    
    if (mousePressed == true) {
      float weight = dist(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(weight);
      line(mouseX, mouseY, pmouseX, pmouseY);
      point(mouseX+i, mouseY);
    }
    
    translate(mouseX, mouseY);
    rotate(-PI/16);
    scale(1.2);
    rotate(PI/8);

    if (x+letterWidth > width) {
      x = 0;
      y += spacing;
    }
    
    text(letter, x, y);
    x += letterWidth;
  }
  
  if (mousePressed) {
    
      float angle = atan2(mouseY-y, mouseX-x); 

      pushMatrix();
      translate(x, y);
      rotate(angle + random(angleDistortion));

      fill(0);
      textAlign(LEFT);
      popMatrix();

      counter++;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }


void mousePressed() {
  x = mouseX+5;
  y = mouseY+10;
}
