function setup() {
  createCanvas(700, 700);
}
let tmovey = 50
let tspeedy = 2



let paint1y = 450
let ps1y = 2
let paint2y = 450 + (100)
let ps2y = 2
let paint3y = 450 + (100*2)
let ps3y = 2
let paint4y = 450 + (100*3)
let ps4y = 2
let paint5y = 450 + (100*4)
let ps5y = 2
let endp = 750

let trn = 0
let strn = 1
let suny = 60
let suns = 2 
let moony = -300
let moons = 2
shows = true
hides = false
function draw() {
  background(220);
  let coords = `X: ${mouseX}, Y: ${mouseY}`;
  
  fill(54,181,228,)
  square(0,0,700)
  fill(0,0,0,trn)
  square(0,0,700)
  fill(246,195,75)
  circle(70,suny,80)
  fill(255)
  circle(630,moony,80)
  suny = suny + suns
  moony = moony + moons

  trn = trn + strn
  if(trn > 200){
  strn = -strn
  suns = -suns
  moons = -moons
  //tint = -tint
  }
   if(trn < 0){
  strn = -strn
  suns = -suns
  moons = -moons
  //tint = -tint
  }

  //mountain
  fill(190)
  quad(195,200,    130,365,    480,365,         300,290)
  
  quad(120,160,    30,365,    250,365,         150,190)
  quad(490,140,    290,365,    680,365,         520,180)
  quad(290,140,    130,365,    480,365,         310,120)
  
  
  fill(0)
  textSize(13)
  text(coords,20,20)

  //road
  fill(30,152,38)
  square(0,350,700)
  fill(100)
  quad(280,350,200,700,500,700,420,350 )
  //road paint
  fill(240)
  rect(345,paint1y,10,20)  
  paint1y = paint1y + ps1y
  rect(345,paint2y,10,20) 
  paint2y = paint2y + ps2y
  rect(345,paint3y,10,20) 
  paint3y = paint3y + ps3y
  rect(345,paint4y,10,20) 
 paint4y = paint4y + ps4y
  rect(345,paint5y,10,20) 
  paint5y = paint5y + ps5y
  if(paint1y >endp) {
    paint1y = 350
  }
  if(paint2y >endp) {
    paint2y = 350
  }
  if(paint3y >endp) {
    paint3y = 350
  }
  if(paint4y >endp) {
    paint4y = 350
  }
  if(paint5y > endp) {
    paint5y = 350
  }
  //speed change
  ps1y = ps1y+.01
  ps2y = ps2y +.01
  ps3y = ps3y+.01
  ps4y = ps4y+.01
  ps5y = ps5y+.01

  if (200 > mouseX){
    fill(200,10,10)
    textSize(85)
    text("Crash imminent !",30,350)
    textSize(40)
    text("get back on the road...",160,410)
  }
  if (500 < mouseX){
    fill(200,10,10)
    textSize(85)
    text("Crash imminent !",30,350)
    textSize(40)
    text("get back on the road...",160,410)
  }
  //line(350,0,350,700)
//MOUSE follow
  //wheel axles
  fill(210)
  rect(mouseX-50,mouseY-0,100,10)
  //tires
  fill(20)
  rect(mouseX-45,mouseY-15,20,40)
  rect(mouseX+25,mouseY-15,20,40)
  //top of car
  fill(223,35,35)
  rect(mouseX-30,mouseY-60,60,40)
  fill(35,148,223)
  rect(mouseX-25,mouseY-55,50,40)
  fill(223,35,35)
  rect(mouseX-35,mouseY-35,70,50)
  //car light
  fill(246,147,60)
  rect(mouseX-35,mouseY-15,15,10)
  rect(mouseX+20,mouseY-15,15,10)
  //back car bumper
  fill(119,2,2)
  rect(mouseX-20,mouseY+5,40,10)
  //screen tint
  fill(20,51,99,trn)
  square(0,0,700)

  //moon
  fill(255)
  circle(630,moony,80)
  //stars
  circle(700,moony+90,5)
  circle(600,moony-90,5)
  circle(650,moony +50,4)
  circle(500,moony +30,4)
  circle(530,moony +20,4)
  circle(490,moony +10,4)
  circle(540,moony +80,4)
  circle(340,moony +20,4)
  circle(200,moony +60,4)
  circle(340,moony +10,4)
  circle(390,moony +10,4)
  circle(300,moony +35,4)
  circle(480,moony +28,4)
  circle(320,moony +5,4)
  
//Text
  //Warning Text
  if (200 > mouseX){
    fill(200,10,10)
    textSize(85)
    text("Crash imminent !",30,350)
    textSize(40)
    text("get back on the road...",160,410)
  }
  if (500 < mouseX){
    fill(200,10,10)
    textSize(85)
    text("Crash imminent !",30,350)
    textSize(40)
    text("get back on the road...",160,410)
  }
  //Moving Text
    fill(65)
    textSize(25)
    text("Keep the car on the road!",200,tmovey)
    tmovey = tmovey + tspeedy
    if (tmovey > 80) {
    tspeedy = -tspeedy;
    }
    if (tmovey < 50) {
    tspeedy = -tspeedy;
  }
}
