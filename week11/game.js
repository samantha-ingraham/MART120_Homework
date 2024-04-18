var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var charx = 230;
var chary = 375;
var mousex;
var mousey;
var xspeed;
var yspeed;
var enemyx=220
var enemyy=220
function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}
function drawmaze(){
  fill(0)
  textSize(18);
  text('Exit',210,15);
  text('Start',210,360);
  // maze walls
  rect(250,300,10,100);
  rect(200,290,60,10);
  rect(100,240,100,10);
  rect(190,250,10,50);
  rect(100,200,10,50);
  rect(100,190,140,10);
  rect(240,190,10,50);
  rect(150,150,10,50);
  rect(300,320,10,75);
  rect(340,280,10,75);
  rect(310,280,80,10);
  rect(310,200,40,10);
  rect(310,200,10,90);
  rect(350,200,10,50);
  rect(300,140,500,10);
  rect(190,340,10,100);
  rect(150,340,50,10);
  rect(150,300,10,50);
  rect(10,300,100,10);
  rect(200,0,10,100);
  rect(210,90,80,10);
  rect(280,50,10,50);
  rect(250,50,30,10);
  rect(340,0,10,100);
  rect(250,100,10,60);
  rect(190,130,70,10);
  rect(40,0,10,100);
  rect(0,200,50,10);
  rect(40,200,10,70);
  rect(100,300,10,70);
  rect(50,330,10,70);
  rect(0,150,100,10);
  rect(90,50,10,100);
  rect(130,0,10,100);
  rect(130,100,30,10);
}
function borders(thick){
  fill(0)
  // right border
  rect(0,0,width-200,thick);
  rect(250,0,width,thick)
  // left border
  rect(0,0,thick,height);
  // bottom border
  rect(0, height-thick,width, thick);
  // right upper border
  rect(width-thick,0,thick,height);
}
function drawchar(){
  fill(102, 0, 0);
  circle(charx,chary,20);
}
function enemy(x, y){
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
function setup(){
  createCanvas(400, 400);
  xspeed=random()*1
  yspeed=xspeed*2
  }
function move(){
  if(keyIsDown(w))
  {chary -= 5;}
  if(keyIsDown(s))
  {chary += 5;}
  if(keyIsDown(a))
  {charx -= 5;}
  if(keyIsDown(d))
  {charx += 5;}
}
function draw(){
  background(0,128,128);
  borders(10);
  drawmaze();
  drawchar();
  enemy(enemyx,enemyy);
  fill(0)
  circle(mousex,mousey,30)
  move()
  if (200 <= charx && charx <= 250 && chary <= 0)
  {
    fill(255,255,255);
    textSize(26);
    text("You Win!", 200, 200);
  }
  // Move enemy
  enemyx += xspeed;
  enemyy += yspeed;
  if (enemyx > width) 
  {enemyx = 0;}
  if (enemyx < 0) 
  {enemyx = width;}
  if (enemyy > height) 
  {enemyy = 0;}
  if (enemyy < 0) 
  {enemyy = height;}
}