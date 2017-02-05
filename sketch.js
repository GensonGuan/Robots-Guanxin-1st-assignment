function setup() {
  createCanvas(800,800)
}

function draw() {
  background(200,200,200)
  
  //Neck
  stroke(0)
  strokeWeight(3)
  line(440,200,440,600);
  line(420,200,420,600);
  line(400,200,400,600);
  
  //Hair
  line(380,130,350,90);
  line(480,130,550,20);
  line(480,230,560,250);
  
  
  //Body
  noStroke();
  fill(150);
  ellipse(400,700,150,150)
  
  noStroke();
  fill(0);
  rect(300,400,200,300) 
  
  noStroke();
  fill(150);
  rect(300,430,200,20) 
  
  //Head
  noStroke()
  fill(0)
  ellipse(420,200,200,200)
  
  //Big eye
  noStroke()
  fill(256)
  ellipse(450,190,90,90)
  
  noStroke()
  fill(0)
  ellipse(450,190,16,16)
  
  //Three eyes
  noStroke()
  fill(100)
  ellipse(380,180,20,20)
  
  noStroke()
  fill(100)
  ellipse(490,240,13,13)
  
  noStroke()
  fill(100)
  ellipse(466,133,18,18)
  
  
  
 
}