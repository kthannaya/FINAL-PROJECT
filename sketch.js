var path,boy,Carrot,Brinjal,Tomato,Corn,Pumpkin,Spinach,Cucumber,Mushroom,sword;
var pathImg,boyImg,CarrotImg,BrinjalImg,TomatoImg,CornImg,PumpkinImg,SpinachImg,CucumberImg,MushroomImg,swordImg;
var treasureCollection = 0;
var CarrotG,BrinjalG,TomatoG,CornG,PumpkinG,SpinachG,CucumberG,MushroomG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  CarrotImg = loadImage("Carrot.png");
  BrinjalImg = loadImage("Brinjal.png");
  TomatoImg = loadImage("Tomato.png");
  CornImg = loadImage("Corn.png");
  PumpkinImg = loadImage("Pumpkin.png");
  SpinachImg = loadImage("Spinach.png");
  CucumberImg = loadImage("Cucumber.png");
  MushroomImg = loadImage("Mushroom.png");
  swordImg = loadImage("Planting.png");
  endImg =loadAnimation("End Image.jpg");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
CarrotG=new Group();
BrinjalG=new Group();
TomatoG=new Group();
CornG=new Group();
PumpkinG=new Group();
SpinachG=new Group();
CucumberG=new Group();
MushroomG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCarrot();
    createBrinjal();
    createTomato();
    createCorn();
    createPumpkin();
    createSpinach();
    createCucumber();
    createMushroom();
    createSword();

    if (CarrotG.isTouching(boy)) {
      CarrotG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (BrinjalG.isTouching(boy)) {
      BrinjalG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }
    else if(TomatoG.isTouching(boy)) {
      TomatoG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
    else if(CornG.isTouching(boy)) {
      CornG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
    else if(PumpkinG.isTouching(boy)) {
      PumpkinG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
    else if(SpinachG.isTouching(boy)) {
      SpinachG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
    else if(CucumberG.isTouching(boy)) {
      CucumberG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
    else if(MushroomG.isTouching(boy)) {
      MushroomG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }


    else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        CarrotG.destroyEach();
        BrinjalG.destroyEach();
        TomatoG.destroyEach();
        CornG.destroyEach();
        PumpkinG.destroyEach();
        SpinachG.destroyEach();
        CucumberG.destroyEach();
        MushroomG.destroyEach();
        swordGroup.destroyEach();
        
        CarrotG.setVelocityYEach(0);
        BrinjalG.setVelocityYEach(0);
        TomatoG.setVelocityYEach(0);
        CornG.setVelocityYEach(0);
        PumpkinG.setVelocityYEach(0);
        SpinachG.setVelocityYEach(0);
        CucumberG.setVelocityYEach(0);
        MushroomG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Vegetables Harvested: "+ treasureCollection,width-300,30);
  }

}

function createCarrot() {
  if (World.frameCount % 200 == 0) {
  var Carrot = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Carrot.addImage(CarrotImg);
  Carrot.scale=0.4;
  Carrot.velocityY = 5;
  Carrot.lifetime = 200;
  CarrotG.add(Carrot);
  }
}

function createBrinjal() {
  if (World.frameCount % 320 == 0) {
  var Brinjal = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Brinjal.addImage(BrinjalImg);
  Brinjal.scale=0.3;
  Brinjal.velocityY = 5;
  Brinjal.lifetime = 200;
  BrinjalG.add(Brinjal);
}
}

function createTomato() {
  if (World.frameCount % 410 == 0) {
  var Tomato = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Tomato.addImage(TomatoImg);
  Tomato.scale=0.3;
  Tomato.velocityY = 5;
  Tomato.lifetime = 200;
  TomatoG.add(Tomato);
  }
}

function createCorn() {
  if (World.frameCount % 550 == 0) {
  var Corn = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Corn.addImage(CornImg);
  Corn.scale=0.4;
  Corn.velocityY = 5;
  Corn.lifetime = 200;
  CornG.add(Corn);
  }
}

function createPumpkin() {
  if (World.frameCount % 700 == 0) {
  var Pumpkin = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Pumpkin.addImage(PumpkinImg);
  Pumpkin.scale=0.4;
  Pumpkin.velocityY = 5;
  Pumpkin.lifetime = 200;
  PumpkinG.add(Pumpkin);
  }
}

function createSpinach() {
  if (World.frameCount % 820 == 0) {
  var Spinach = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Spinach.addImage(SpinachImg);
  Spinach.scale=0.3;
  Spinach.velocityY = 5;
  Spinach.lifetime = 200;
  SpinachG.add(Spinach);
  }
}

function createCucumber() {
  if (World.frameCount %  920 == 0) {
  var Cucumber = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Cucumber.addImage(CucumberImg);
  Cucumber.scale=0.3;
  Cucumber.velocityY = 5;
  Cucumber.lifetime = 200;
  CucumberG.add(Cucumber);
  }
}

function createMushroom() {
  if (World.frameCount % 1050 == 0) {
  var Mushroom = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Mushroom.addImage(MushroomImg);
  Mushroom.scale=0.4;
  Mushroom.velocityY = 5;
  Mushroom.lifetime = 200;
  MushroomG.add(Mushroom);
  }
}

function createSword(){
  if (World.frameCount % 1500 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.4;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}