var ball={
 x:20,
 y:40,
 r:25,
 xspeed:0,
 yspeed:0,
 color:["blue","red","purple"]
  
  
}
  function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[2])
  ball.xspeed=2
  ball.x=ball.x+ball.xspeed
}