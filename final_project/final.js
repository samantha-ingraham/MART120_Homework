var currentSeason = 1
function mouseClicked() {
  // Increment the current season when mouse is clicked
  currentSeason++;
  // If currentSeason exceeds 4, reset it to 1 to loop back to the first season
  if (currentSeason > 4) {
    currentSeason = 1;
  }
  // Call the function to draw the current season
  drawSeason(currentSeason);
}
function drawSeason(season) {
  // Clear the canvas
  clear();
  
  // Draw different seasons based on the currentSeason value
  switch(season) {
    case 1:
      season1();
      break;
    case 2:
      season2();
      break;
    case 3:
      season3();
      break;
    case 4:
      season4();
      break;
    default:
      break;
  }
}
function setup() {
    createCanvas(1000, 500);
    drawSeason(currentSeason)
  }
function drawFallLeaf(x, y, w, h, angle) {
  push(); // Save the current transformation matrix
  translate(x, y); // Move the origin to the drawing position
  rotate(angle);// Rotate by the specified angle
  stroke(0)
  leafColor=FallColors()
  fill(leafColor);
  ellipse(0, 0, w, h);
  line(0, -0.5 * h, 0, 0.5 * h); // Original line
  line(0, -0.5 * h, 0.5 * w, 0); // First offset line
  line(0, -0.25 * h, 0.5 * w, 0.25 * h); // Second offset
  line(0, 0.1 * h, 0.25 * w, 0.4 * h); // Third offset
  line(0, -0.5 * h, -0.5 * w, 0); // First offset line mirrored
  line(0, -0.25 * h, -0.5 * w, 0.25 * h); // Second offset mirrored
  line(0, 0.1 * h, -0.25 * w, 0.4 * h); // Third offset mirrored
  pop(); // Restore the original transformation matrix
}
function drawLeaf(x, y, w, h, angle) {
  push(); // Save the current transformation matrix
  translate(x, y); // Move the origin to the drawing position
  rotate(angle);// Rotate by the specified angle
  stroke(0)
  fill(0, 128, 0);
  ellipse(0, 0, w, h);
  line(0, -0.5 * h, 0, 0.5 * h); // Original line
  line(0, -0.5 * h, 0.5 * w, 0); // First offset line
  line(0, -0.25 * h, 0.5 * w, 0.25 * h); // Second offset
  line(0, 0.1 * h, 0.25 * w, 0.4 * h); // Third offset
  line(0, -0.5 * h, -0.5 * w, 0); // First offset line mirrored
  line(0, -0.25 * h, -0.5 * w, 0.25 * h); // Second offset mirrored
  line(0, 0.1 * h, -0.25 * w, 0.4 * h); // Third offset mirrored
  pop(); // Restore the original transformation matrix
}
function drawWithin(count, x, y, w, h, functw, functh, drawfunction) {for (let i = 0; i < count; i++) {
    let drawx = random(x, x + w);
    let drawy = random(y, y + h);
    let angle = random(TWO_PI); // Generate a random angle between 0 and 2*PI
    drawfunction(drawx, drawy, functw, functh, angle);}}
function gradient(color1,color2){
  for (var y =0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var gradientColor = lerpColor(color1, color2, inter);
    stroke(gradientColor);
    line(0, y, width, y);
  }
}
function drawBee(x, y) {
  stroke(0)
  // Draw bee wings
  fill(200, 200, 200, 150); // Semi-transparent white color for wings
  ellipse(x - 2, y - 10, 15, 20); // Left wing
  ellipse(x + 3, y - 10, 15, 20); // Right wing
  // Draw bee body
  fill(255, 255, 0); // Yellow color for bee body
  ellipse(x, y, 35, 25); // Main body ellipse
  // Draw bee stripes
  fill(0); // Black color for stripes
  ellipse(x - 5, y, 5, 25);
  ellipse(x + 5, y, 5, 25); 
  ellipse(x + 15, y, 5, 11);
  // Draw bee eye
  ellipse(x - 12, y - 3, 2, 2);
}
function drawFlower(x, y, flowerWidth, flowerHeight) {
  stroke(0)
  // Draw petals
  fill(255); // White color for petals
  circle(x - 10, y - 20, flowerWidth);
  circle(x + 10, y + 20, flowerWidth); 
  circle(x + 10, y - 20, flowerWidth); 
  circle(x - 10, y + 20, flowerWidth); 
  circle(x - 20, y - 10, flowerWidth); 
  circle(x + 20, y + 10, flowerWidth); 
  circle(x + 20, y - 10, flowerWidth); 
  circle(x - 20, y + 10, flowerWidth); 
  circle(x - 13, y - 12, flowerWidth * 0.67); 
  circle(x + 13, y + 12, flowerWidth * 0.67); 
  circle(x + 12, y - 11, flowerWidth * 0.67); 
  circle(x - 12, y + 11, flowerWidth * 0.67); 
  circle(x - 15, y, flowerWidth * 0.67); 
  circle(x + 15, y, flowerWidth * 0.67); 
  circle(x, y - 15, flowerWidth * 0.67); 
  circle(x, y + 15, flowerWidth * 0.67); 

  // Draw center
  fill(255, 255, 0); // Yellow color for center
  circle(x, y, flowerHeight); 
}
function drawFlowerTree(x, y, flowerWidth, flowerHeight) {
  stroke(0);
  // Draw petals
  fill(255, 192, 203); // Pink color for petals
  circle(x - 2.5, y - 5, flowerWidth);
  circle(x + 2.5, y + 5, flowerWidth); 
  circle(x + 2.5, y - 5, flowerWidth); 
  circle(x - 2.5, y + 5, flowerWidth); 
  circle(x - 5, y - 2.5, flowerWidth); 
  circle(x + 5, y + 2.5, flowerWidth); 
  circle(x + 5, y - 2.5, flowerWidth); 
  circle(x - 5, y + 2.5, flowerWidth); 
  circle(x - 3, y - 3, flowerWidth * 0.67); 
  circle(x + 3, y + 3, flowerWidth * 0.67); 
  circle(x + 3, y - 2.5, flowerWidth * 0.67); 
  circle(x - 3, y + 2.5, flowerWidth * 0.67); 
  circle(x - 3.5, y, flowerWidth * 0.67); 
  circle(x + 3.5, y, flowerWidth * 0.67); 
  circle(x, y - 3.5, flowerWidth * 0.67); 
  circle(x, y + 3.5, flowerWidth * 0.67); 

  // Draw center
  fill(255,255,255)
  circle(x, y, flowerHeight); 
}
function pinkdots(x,y,w,h){
  fill(255, 192, 203)
  circle(x,y,w)
}
function greendots(x,y,w,h){
  fill(0, 128, 0)
  circle(x,y,w)
}
function falldots(x,y,w,h){
  fill(FallColors())
  circle(x,y,w)
}
function whitedots(x,y,w,h){
  fill(255)
  circle(x,y,w)
}
function FallColors() {
  // Array of colors
  var fallColorsHex = [
  "#CC5500",
  "#FFCC00",
  "#993300",
  "#996633",
  "#8B0000"  
];
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * fallColorsHex.length);

  // Return the randomly selected color
  return fallColorsHex[randomIndex];
}
function drawTree2(){
  strokeWeight(12)
  stroke(101, 67, 33)
  line(970,400,970,300)
  strokeWeight(7)
  line(970,300,880,275)
  line(970,300,900,200)
  line(970,350,900,300)
  line(970,350,980,250)
}
function drawBranch(x,y,x1,y1){
  stroke(0)
  fill(101, 67, 33)
  quad(x,y,x,y-100,x+20,y-100,x+20,y);
  quad(x+10,y-100,x+20,y-200,x+30,y-200,x+20,y-100);
  quad(x,y-100,x,y-200,x+10,y-200,x+10,y-100);
  quad(x+5,y-200,x+15,y-300,x+20,y-300,x+10,y-200);
  quad(x+25,y-200,x+20,y-200,x,y-300,x+5,y-300);
  quad(x+25,y-200,x+30,y-200,x+40,y-300,x+35,y-300);
  quad(x1,y1,x1+10,y1-100,x1+40,y1-100,x1+30,y1);
  quad(x1+10,y1-100,x1+10,y1-200,x1+20,y1-200,x1+30,y1-100);
  quad(x1+25,y1-100,x1+45,y1-200,x1+60,y1-200,x1+40,y1-100);
  quad(x1+15,y1-200,x1+35,y1-300,x1+40,y1-300,x1+20,y1-200);
  quad(x1+15,y1-200,x1+15,y1-300,x1+10,y1-300,x1+10,y1-200);
  quad(x1+45,y1-200,x1+40,y1-300,x1+45,y1-300,x1+50,y1-200);
  quad(x1+50,y1-200,x1+70,y1-300,x1+75,y1-300,x1+60,y1-200);
  quad(x1+10,y1+100,x1+10,y1+200,x1+100,y1-200,x1+60,y1-100);
  quad(x1+60,y1-75,x1+60,y1-90,x1+150,y1-185,x1+110,y1-125);
  quad(x1+35,y1+55,x1+30,y1+70,x1+300,y1-60,x1+130,y1);
  quad(x1+65,y1+50,x1+50,y1+55,x1+90,y1-50,x1+90,y1-30);
  quad(x1+90,y1-30,x1+90,y1-40,x1+100,y1-50,x1+90,y1-200);
  quad(x1+85,y1-30,x1+90,y1-50,x1+210,y1-90,x1+250,y1-100);
  quad(x1+150,y1-70,x1+140,y1-60,x1+110,y1-250,x1+120,y1-220);
  quad(x1+130,y1-140,x1+130,y1-160,x1+170,y1-250,x1+160,y1-220);
  quad(x1+145,y1-80,x1+140,y1-100,x1+220,y1-230,x1+220,y1-220);
}
function drawTree(x,y,w,h){
  stroke(0)
  fill(101, 67, 33)
  rect(x,y,w,h)
}
function season1(){
  var color1=color(135, 206, 235)
  var color2=color(255, 255, 204)
  gradient(color1,color2)
  drawTree(0,300,60,400)
  drawTree2()
  strokeWeight(0.5)
  stroke(0)
  drawWithin(450,850,200,150,150,7.5,7.5,pinkdots)
  drawBranch(0,300,30,300)
  fill(0,128,0)
  ellipse(1000,500,1500,200)
  ellipse(750,500,1500,40)
  drawWithin(650,0,0,350,350,5,5,drawFlowerTree)
  drawWithin(20,20,450,1500,50,20,20,drawFlower)
  drawBee(300, 450);
}
function season2(){
  var color1=color(0, 0, 139);
  var color2=color(173, 216, 230);
  gradient(color1,color2)
  drawTree(0,300,60,400)
  drawTree2()
  strokeWeight(0.5)
  stroke(0)
  drawWithin(450,850,200,150,150,7.5,7.5,greendots)
  drawBranch(0,300,30,300)
  fill(0,128,0)
  ellipse(1000,500,1500,200)
  ellipse(750,500,1500,40)
  drawWithin(650,0,0,350,350,15,25,drawLeaf)
  drawWithin(20,20,450,1500,50,20,20,drawFlower)
  drawBee(300, 450);
}
function season3(){
  var color1=color(0, 51, 102);
  var color2=color(255, 165, 0);
  gradient(color1,color2)
  drawTree(0,300,60,400)
  drawTree2()
  strokeWeight(0.5)
  stroke(0)
  drawWithin(450,850,200,150,150,7.5,7.5,falldots)
  drawBranch(0,300,30,300)
  fill(0,128,0)
  ellipse(1000,500,1500,200)
  ellipse(750,500,1500,40)
  drawWithin(650,0,0,350,350,15,25,drawFallLeaf)
  drawWithin(140,20,475,950,20,15,25,drawFallLeaf)
}
function season4(){
  var color1=color(176, 196, 222);
  var color2=color(230, 230, 250);
  gradient(color1,color2)
  drawTree(0,300,60,400)
  drawTree2()
  strokeWeight(0.5)
  stroke(0)
  drawBranch(0,300,30,300)
  fill(255,255,255)
  ellipse(1000,500,1500,200)
  ellipse(750,500,1500,40)
  drawWithin(1450,0,0,1500,1500,7.5,7.5,whitedots)
}
function draw() {
}