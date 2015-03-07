void setup() {
    size(500,500);
    stroke(0);
    ellipseMode(CENTER);
}
void draw() {
    stroke(0);
    fill(255,128,0,64);
//同心圆
    background(#F0F0E0);
    ellipse(width/2,height/2,100,100);
    ellipse(width/2,height/2,200,200);
    ellipse(width/2,height/2,300,300);
    ellipse(width/2,height/2,400,400);
//直线
    line(width/2,height/2,width/2,0);
    line(width/2,height/2,width,height/2);
    line(width/2,height/2,width/2,height);
    line(width/2,height/2,0,height/2);
//字符
    fill(0);
    textFont(createFont("Arial",24));
    noLoop();
    text("A",width/2,50);
    text("B",width-50,height/2);
    text("C",width/2,height-25);
    text("D",25,height/2);
}
