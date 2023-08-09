var hours = [];
var minutes = [];
var seconds = [];


var r, g, b;

function setup() {
   createCanvas(windowWidth, windowHeight);
  frameRate(60);
  
  
  for (var i=0; i < 60; i++){
  seconds.push({x:random(windowWidth/1.1,windowWidth/1.4), y:random(((height/59)*i),(height/59)*i), diam:30});
   }

  for (var j=0; j < 60; j++){
  minutes.push({x:random(windowWidth/1.6,windowWidth/2.5), y:random(((height/59)*j),(height/59)*j), diam:60});
   }
  
  for (var h=0; h < 24; h++){
  hours.push({x:random(windowWidth/4,windowWidth/10),y:random(((height/24)*h),(height/24)*h), diam:80});
   }
  
 }



 function draw() {
   background(0);
  strokeWeight(1);
  stroke(0);
    
  
 var hr = hour();
 var mn = minute();
 var sc = second();


  var pink = color(255, 100, 150); 
  var purple = color( 150, 100, 255); 
  var lg = color(150, 255, 100); 
  

   for (var i=0; i < sc; i++){
      fill(pink);
                var a = dist(mouseX, mouseY, seconds[i].x, seconds[i].y);
     if(a < seconds[i].diam / 2){
     fill(color(255));
     }
     	ellipse(seconds[i].x, seconds[i].y, seconds[i].diam);
   }
   
   for (var j=0; j < mn; j++){
     fill(purple);
           var d = dist(mouseX, mouseY, minutes[j].x, minutes[j].y);
     if(d < minutes[j].diam / 2){
     fill(color(255));
     }
   	ellipse(minutes[j].x, minutes[j].y, minutes[j].diam);
   }
   
   for (var h=0; h < hr; h++){
     fill(lg);
      var distance = dist(mouseX, mouseY, hours[h].x, hours[h].y);
     if(distance < hours[h].diam / 2){
     fill(color(255));
     }
   ellipse(hours[h].x, hours[h].y, hours[h].diam);
   }
   
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  translate(windowWidth, windowHeight);
  
  hours = [];
  minutes = [];
  seconds = [];
  

  
  for (var i=0; i < 60; i++){
  seconds.push({x:random(windowWidth/1.1,windowWidth/1.4), y:random(((height/59)*i),(height/59)*i), diam:30});
   }

  for (var j=0; j < 60; j++){
  minutes.push({x:random(windowWidth/1.6,windowWidth/2.5), y:random(((height/59)*j),(height/59)*j), diam:60});
   }
  
  for (var h=0; h < 24; h++){
  hours.push({x:random(windowWidth/4,windowWidth/10),y:random(((height/12)*h),(height/24)*h), diam:80});
   }
    
}





