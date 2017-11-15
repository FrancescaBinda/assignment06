var myData;
var myImg;
var myImg2;
var myImg3;
var people = [];
var d;
 d=true;

function preload() {
  myData = loadJSON('assets/peopleinspace.json');
   myImg = loadImage("cartoon-2029734_960_720.png");
   myImg2 = loadImage("astronauta.png");
    myImg3 = loadImage("unnamed.png");

}

function setup() {
  createCanvas(500, 500);
  

  for(var i = 0; i < myData.people.length; i++) {
    var astroData = myData.people[i];
    var newAstronaut = new Astronaut(astroData.launchdate, astroData.name, astroData.title);
    people.push(newAstronaut);
  }
}

function draw() {
  background(0);
  image(myImg3, 0,0,1000,500 );
  fill('white');
      textSize(15);
      text("Tieni premuto il mouse per scoprire chi viaggia nello spazio",30, 80);
  
	for(var i = 0; i < people.length; i++) {
	  var astronaut = people[i];
	  astronaut.move();
	  astronaut.display();
	}

}

function Astronaut(launchDate, name, title) {
    
    this.name = name;
    this.title = title;
    this.launchDate = Date.parse(launchDate);
  
    var timeInSpace = Date.now() - this.launchDate;
    this.r=floor(timeInSpace / (1000 * 60 * 60 * 24));
    this.radius = floor(timeInSpace / (1000 * 60 * 60 * 24)) / 5;
    
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    
    this.incrementX = 1;
    this.incrementY = 1;
    
    this.display = function() {
        
        if(this.title == 'commander') {
          fill(255,0,0);
        } else {
          fill(255);
        }
        
        if (mouseIsPressed) {
      fill('white');
      textSize(15);
      
      image(myImg2, this.x, this.y,this.radius,this.radius*2 )
      text(this.name,this.x -30, this.y + 60);

    }
    
    else{
      image(myImg, this.x, this.y,this.radius*2, this.radius*3)
      text(this.r+" "+"giorni", this.x - 10, this.y + 60);
       
       
    }
    }
    
    this.move = function() {
        
        this.x += this.incrementX;
        this.y += this.incrementY;
        
        if (this.x > width - this.radius || this.x < this.radius){
            this.incrementX *= -1
           
        }

        if (this.y > height - this.radius || this.y < this.radius){
            this.incrementY *= -1
            
        }
    }   
}

