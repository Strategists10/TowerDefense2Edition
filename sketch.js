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
// game level or wave
var gameLevel = 1;
//For the path
var path1 = [];
var path2 = [];


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
	path1[0] = createVector(14.5 * 46, 10.5 * 46);
	path1[1] = createVector(11.5 * 46, 10.5 * 46);
	path1[2] = createVector(10.5 * 46, 13.5 * 46);
	path1[3] = createVector(8.5 * 46, 13.5 * 46);
	path1[4] = createVector(7.5 * 46, 10.5 * 46);
	path1[5] = createVector(5.5 * 46, 10.5 * 46);
	path1[6] = createVector(4.5 * 46, 14.5 * 46);
	path1[7] = createVector(2.5 * 46, 14.5 * 46);
	path1[8] = createVector(2.5 * 46, 4.5 * 46);
	path1[9] = createVector(4.5 * 46, 3.5 * 46);
	path1[10] = createVector(4.5 * 46, 0.5 * 46);
}

function path22(){
	path2[0] = createVector(14.5 * 46, 6.5 * 46);
	path2[1] = createVector(11.5 * 46, 6.5 * 46);
	path2[2] = createVector(10.5 * 46, 3.5 * 46);
	path2[3] = createVector(8.5 * 46, 3.5 * 46);
	path2[4] = createVector(7.5 * 46, 6.5 * 46);
	path2[5] = createVector(5.5 * 46, 7.5 * 46);
	path2[6] = createVector(4.5 * 46, 14.5 * 46);
	path2[7] = createVector(2.5 * 46, 14.5 * 46);
	path2[8] = createVector(2.5 * 46, 4.5 * 46);
	path2[9] = createVector(4.5 * 46, 3.5 * 46);
	path2[10] = createVector(4.5 * 46, 0.5 * 46);
}


function setup(){
	createCanvas(1182,782);
	allTurrets.push(new globalTurret(50,50,50,50, 50));
	allEnemies.push(new globalEnemy(50,50,50,50,50));
	path11();
	path22();
	//enemySpawnPlace = path1.copy();
}

function draw(){
	background(25);
	drawMap();
	
	allTurrets[0].display();
	allEnemies[0].display();
	allEnemies[0].walk();
	
}