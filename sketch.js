// for drawing map
var tiles = [];
var map1 = [];
var map1Set = [];
// for creep arrays 
var creep1 = [];
var creep2 = [];
var creep3 = [];
// for turrets array 
var turret1 = [];
var turret2 = [];
var turret3 = [];
var turret4 = [];
// array of all the enemies
var allEnemies = [];
// array of all th turrets
var allTurrets = [];
// global frame timer
var globalTimer = 0;
// the turret objects
var turretObj1;
var turretObj2;
var turretObj3;
var turretObj4;
// starting position for enemies
var startPoint1 = [14.5*46, 17*46];
var startPoint2 = [14.5*46, 0];
var enemySpawnPlace = [];
// end position
var endPoint = [4.5 * 46, 0.5 * 46]
// game level or wave
var gameLevel = 1;
//For the path
var path1 = [];
var path2 = [];
var generalPath = [];
//two timers for waves and in between waves
var countWaveFrames = 0;
var isItWave = true;
var countInBetweenFrames = 0;
var isItbrake = false;

//for menu side
var menuSide = 782;
var gap = 60;


//variables for enemy 1
function type1(){
	var speed = 3;
	var hp = 50;
	var armor = 0;
	var money = 15;
	var type = 1;
}
//variables for enemy 2
function type2(){
	var speed = 4;
	var hp = 40;
	var armor = 20;
	var money = 20;
	var type = 2;
}
//variables for enemy 3
function type3(){
	var speed = 2;
	var hp = 60;
	var armor = 40;
	var money = 30;
	var type = 3;
}
function preload(){
	//Loading the tiles 
	for(var k = 1; k < 8; k++){
		tiles[k] = loadImage("assets/tiles/tile" + k + ".gif");
	}


	//loading the map
	map1 = loadStrings("assets/maps/map1.txt");


	// loading all the creeps
	for(var k = 1; k < 7; k++){
		creep1[k-1] = loadImage("assets/creep1/" + k + ".png");
	}
	for(var k = 1; k < 5; k++){
		creep2[k-1] = loadImage("assets/creep2/" + k + ".png");
	}
	for(var k = 1; k < 5; k++){
		creep3[k-1] = loadImage("assets/creep3/" + k + ".png");
	}


	//loading all the turrets
	for(var k = 1; k < 4; k++){
		turret1[k-1] = loadImage("assets/turret1/turret" + k + ".png");
	}
	for(var k = 1; k < 4; k++){
		turret2[k-1] = loadImage("assets/turret2/turret" + k + ".png");
	}
	for(var k = 1; k < 4; k++){
		turret3[k-1] = loadImage("assets/turret3/turret" + k + ".png");
	}
	for(var k = 1; k < 4; k++){
		turret4[k-1] = loadImage("assets/turret4/turret" + k + ".png");
	}


	//loading base for turrets
	var base = loadImage("assets/turret-base.gif");
}

//turret object and enemy object are in other .js files

function drawMap(){
	imageMode(CORNER);
	for(var i = 0; i < 17; i++){
		map1Set = map1[i].split(" ");
		for(var j = 0; j < 17; j++){
			if(map1Set[j]>0){
				image(tiles[map1Set[j]], j*46, i*46);
			}
		}
	}
}
function path11(){
	path1[1] = createVector(14.5 * 46, 10.5 * 46);
	path1[2] = createVector(11.5 * 46, 10.5 * 46);
	path1[3] = createVector(10.5 * 46, 13.5 * 46);
	path1[4] = createVector(8.5 * 46, 13.5 * 46);
	path1[5] = createVector(7.5 * 46, 10.5 * 46);
	path1[6] = createVector(5.5 * 46, 10.5 * 46);
	path1[7] = createVector(4.5 * 46, 14.5 * 46);
	path1[8] = createVector(2.5 * 46, 14.5 * 46);
	path1[9] = createVector(2.5 * 46, 4.5 * 46);
	path1[10] = createVector(4.5 * 46, 3.5 * 46);
	path1[11] = createVector(4.5 * 46, 0.5 * 46);
}

function path22(){
	path2[1] = createVector(14.5 * 46, 6.5 * 46);
	path2[2] = createVector(11.5 * 46, 6.5 * 46);
	path2[3] = createVector(10.5 * 46, 3.5 * 46);
	path2[4] = createVector(8.5 * 46, 3.5 * 46);
	path2[5] = createVector(7.5 * 46, 6.5 * 46);
	path2[6] = createVector(5.5 * 46, 7.5 * 46);
	path2[7] = createVector(4.5 * 46, 14.5 * 46);
	path2[8] = createVector(2.5 * 46, 14.5 * 46);
	path2[9] = createVector(2.5 * 46, 4.5 * 46);
	path2[10] = createVector(4.5 * 46, 3.5 * 46);
	path2[11] = createVector(4.5 * 46, 0.5 * 46);
}

function turretStorage(){
	imageMode(CENTER);
	image(turret1[0], menuSide + 60, 60);
	image(turret2[0], menuSide + 60 + gap, 60);
	image(turret3[0], menuSide + 60 + 2 * gap, 60);
	image(turret4[0], menuSide + 60 + 3 * gap, 60);
	if(mouseX > menuSide + 40 && mouseX < menuSide + 80 && mouseY > 40 && mouseY < 80){
		//draw stats for turet1
		strokeWeight(5);
		fill(255);
		textSize(15);
		text("Price = 60", menuSide + 40, 100 );
		text("Damage = 60", menuSide + 40, 120 );
		text("Area = 60", menuSide + 40, 140 );
		text("Atack speed = 60", menuSide + 40, 160 );
	}
	if(mouseX > menuSide + 40 + gap && mouseX < menuSide + 80 + gap && mouseY > 40 && mouseY < 80){
		strokeWeight(5);
		fill(255);
		textSize(15);
		text("Price = 60", menuSide + 40 + gap, 100 );
		text("Damage = 60", menuSide + 40 + gap, 120 );
		text("Area = 60", menuSide + 40 + gap, 140 );
		text("Atack speed = 60", menuSide + 40 + gap, 160 );
	}
	if(mouseX > menuSide + 40 + 2*gap && mouseX < menuSide + 80 + 2*gap && mouseY > 40 && mouseY < 80){
		strokeWeight(5);
		fill(255);
		textSize(15);
		text("Price = 60", menuSide + 40 + 2*gap, 100 );
		text("Damage = 60", menuSide + 40 + 2*gap, 120 );
		text("Area = 60", menuSide + 40 + 2*gap, 140 );
		text("Atack speed = 60", menuSide + 40 + 2*gap, 160 );
	}
	if(mouseX > menuSide + 40 + 3*gap && mouseX < menuSide + 80 + 3*gap && mouseY > 40 && mouseY < 80){
		strokeWeight(5);
		fill(255);
		textSize(15);
		text("Price = 60", menuSide + 40 + 2*gap, 100 );
		text("Damage = 60", menuSide + 40 + 2*gap, 120 );
		text("Area = 60", menuSide + 40 + 2*gap, 140 );
		text("Atack speed = 60", menuSide + 40 + 2*gap, 160 );
	}

}

function callEnemiesToMove(){
	if(allEnemies.length != 0){
		var newArray = [];
		var foundFalse = false;
		for(var i = 0; i < allEnemies.length; i++){
			if(allEnemies[i].jForCheck === startPoint1[1]){
				allEnemies[i].walk1();
			}
			if(allEnemies[i].jForCheck === startPoint2[1]){
				allEnemies[i].walk2();
			}
			if(allEnemies[i].type === 1){
				allEnemies[i].display1();
			}
			if(allEnemies[i].type === 2){
				allEnemies[i].display2();
			}
			if(allEnemies[i].type === 3){
				allEnemies[i].display3();
			}
			
			
			if(allEnemies[i].alive === false){
				foundFalse = true;



				var k = 0;
				for(var j = 0; j < allEnemies.length-1; j++){
					if(j === i){
						k++;
					}
					newArray[j] = allEnemies[k];
					k++;
				}

				/*
				for(var g = 0; g < allTurrets.length; g++){
					var p = 0;
					var bug = false;
					var newNewArray = [];
					for(var h = 0; h < allTurrets[g].targetInRange.length - 1; h++){
						if(allTurrets[g].targetInRange[h] === i){
							p++;
							bug = true;
						}
						newNewArray[h] = allTurrets[g].targetInRange[p];
					}
					if(bug){
						allTurrets[g].targetInRange = newNewArray;
					}
					
				}
				*/
				

			}
		}
		if(foundFalse){
			allEnemies = newArray;
			foundFalse = false;
		}

	}
}
function createEnemies(){
	if(countWaveFrames ===0){
		countWaveFrames = 30 * gameLevel;
	}
	
	if(countWaveFrames % 30 === 0 && countWaveFrames != 0){
		var limit = 1;
		if(gameLevel > 3){
			limit = 2;
		}
		if(gameLevel > 7){
			limit = 3;
		}
		var typeNumber = random(0, limit);
		if(typeNumber < 1){
			
			var speed = 3;
			var hp = 50;
			var armor = 0;
			var money = 15;
			var type = 1;
		}
		if(typeNumber > 1 && typeNumber < 2){

			var speed = 4;
			var hp = 40;
			var armor = 20;
			var money = 20;
			var type = 2;
		}
		if(typeNumber > 2 && typeNumber < 3){

			var speed = 2;
			var hp = 60;
			var armor = 40;
			var money = 30;
			var type = 3;
		}

		allEnemies.push(new globalEnemy(speed, hp, armor, money, type, startPoint1[0], startPoint1[1]));
		allEnemies.push(new globalEnemy(speed, hp, armor, money, type, startPoint2[0], startPoint2[1]));
	}
	countWaveFrames--;
	if(countWaveFrames === 0){
		isItWave = false;
		isItbrake = true;
	}
}
function timeOut(){
	if(isItbrake){
		countInBetweenFrames++;
	}
	if(countInBetweenFrames === 180 *5){
		isItbrake = false;
		gameLevel++;
		isItWave  = true;
		countInBetweenFrames = 0;
	}
}


function setup(){
	createCanvas(1082,782);
	path11();
	path22();
	allTurrets.push(new globalTurret(150, 300, 60, 60, 200, 30)) ;
}

function draw(){
	background(25);
	turretStorage();
	drawMap();
	//allTurrets[0].checkTarget();
	if(isItWave){
		createEnemies();
	}
	timeOut();
	callEnemiesToMove();
	allTurrets[0].display();
	allTurrets[0].checkTarget();
	//allTurrets[0].findTarget();
	//allTurrets[0].shotTarget();
	
}