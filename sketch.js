var dogSprite;
var happydog;
var database;
var food;
var foodstock;
var database;
var dog;
var foodS;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dogSprite =createSprite(250, 350, 20, 20);
  dogSprite.addImage(dog);
	dogSprite.scale=0.4
  foodstock = database.ref("Food");
  foodstock.on("value", readStock);
}


function draw() {
  background(46, 139, 87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogSprite.addImage(happydog);
  } 
  drawSprites();
  fill("white");
  text("Food Stock: " + foodS, 250, 100);

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  })
}


