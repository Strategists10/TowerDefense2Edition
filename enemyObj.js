
function globalEnemy(speed, hp, armor, money,type,x, y){
	this.alive = true;
	this.armor = armor + armor * 0.02 * gameLevel;
	this.armorStarting = this.armor;
	this.jForCheck = y;
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.hp = hp + hp * 0.03 * gameLevel;
	this.hpStarting = this.hp;
	this.moneyGained = money + money * 0.02 * gameLevel;
	this.countFrames = 0;
	this.pathNode = 1;
	this.type = type;
	this.threatLevel = 0;
	this.countThreatFrames = 0;
	this.display1 = function(){
		if(this.alive){
			imageMode(CENTER);
			if(this.countFrames < 30){
				image(creep1[0], this.x, this.y);
			}
			if(this.countFrames >= 30 && this.countFrames < 36 ){
				image(creep1[1], this.x, this.y);
			}
			if(this.countFrames >=  36 && this.countFrames < 39){
				image(creep1[2], this.x, this.y);
			}
			if(this.countFrames >=  39 && this.countFrames < 69){
				image(creep1[3], this.x, this.y);
			}
			if(this.countFrames >=  69 && this.countFrames < 72){
				image(creep1[4], this.x, this.y);
			}
			if(this.countFrames >=  72 && this.countFrames < 78){
				image(creep1[5], this.x, this.y);
			}
			this.countFrames++;

			if(this.countFrames ===78){
				this.countFrames = 0;
			}
			strokeWeight(6);
			stroke(255, 0, 0);
			line(this.x - 20, this.y - 20, this.x - 20 + 0.4 * (this.hp *100 / this.hpStarting), this.y -20);
			if(this.armor != 0){
				stroke(0, 0, 255);
				line(this.x - 20, this.y - 20, this.x -20 + 0.4 * (this.armor *100 / this.armorStarting), this.y - 20);
			}
		}
	}
	this.display2 = function(){
		if(this.alive){
			imageMode(CENTER);

			if(this.countFrames < 6){
				image(creep2[0], this.x, this.y);
			}
			if(this.countFrames >= 6 && this.countFrames < 36 ){
				image(creep2[1], this.x, this.y);
			}
			if(this.countFrames >=  36 && this.countFrames < 42){
				image(creep2[2], this.x, this.y);
			}
			if(this.countFrames >=  42 && this.countFrames < 60){
				image(creep2[3], this.x, this.y);
			}
			this.countFrames++;
			if(this.countFrames ===60){
				this.countFrames = 0;
			}
			strokeWeight(6);
			stroke(255, 0, 0);
			line(this.x - 20, this.y - 20, this.x - 20 + 0.4 * (this.hp *100 / this.hpStarting), this.y -20);
			if(this.armor != 0){
				stroke(0, 0, 255);
				line(this.x - 20, this.y - 20, this.x -20 + 0.4 * (this.armor *100 / this.armorStarting), this.y - 20);
			}
		}
	}

	this.display3 = function(){
		if(this.alive){
			imageMode(CENTER);

			if(this.countFrames < 30){
				image(creep3[0], this.x, this.y);
			}
			if(this.countFrames >= 30 && this.countFrames < 36 ){
				image(creep3[1], this.x, this.y);
			}
			if(this.countFrames >=  36 && this.countFrames < 42){
				image(creep3[2], this.x, this.y);
			}
			if(this.countFrames >=  42 && this.countFrames < 48){
				image(creep3[3], this.x, this.y);
			}
			this.countFrames++;
			if(this.countFrames ===48){
				this.countFrames = 0;
			}
			strokeWeight(6);
			stroke(255, 0, 0);
			line(this.x - 20, this.y - 20, this.x - 20 + 0.4 * (this.hp *100 / this.hpStarting), this.y -20);
			if(this.armor != 0){
				stroke(0, 0, 255);
				line(this.x - 20, this.y - 20, this.x -20 + 0.4 * (this.armor *100 / this.armorStarting), this.y - 20);
			}
		}
	}

	this.walk1 = function(){
		if(this.pathNode === 12){
				this.alive = false;
			}
		if(this.pathNode < 12 && this.alive){

			var enemyPosition = createVector(this.x, this.y);
			var dir = enemyPosition.copy();
			if(enemyPosition.dist(path1[this.pathNode]) <= this.speed){				 
				var left = enemyPosition.dist(path1[this.pathNode]);
				dir.sub(path1[this.pathNode]);
				dir.normalize();
				dir.mult(-left);
				enemyPosition.add(dir);
				this.x = enemyPosition.x;
				this.y = enemyPosition.y;
				this.pathNode++;
			}
			else if(enemyPosition.dist(path1[this.pathNode]) > this.speed){
				dir.sub(path1[this.pathNode]);
				dir.normalize();
				dir.mult(-this.speed);
				enemyPosition.add(dir);
				this.x = enemyPosition.x;
				this.y = enemyPosition.y;
				
			}
			this.threatLevel = this.threatLevel + this.speed;
		}
	};

	this.walk2 = function(){
		if(this.pathNode === 12){
				this.alive = false;
			}
		if(this.pathNode < 12 && this.alive){
			var enemyPosition = createVector(this.x, this.y);
			var dir = enemyPosition.copy();
			if(enemyPosition.dist(path2[this.pathNode]) <= this.speed){
				var left = enemyPosition.dist(path2[this.pathNode]);
				dir.sub(path2[this.pathNode]);
				dir.normalize();
				dir.mult(-left);
				enemyPosition.add(dir);
				this.x = enemyPosition.x;
				this.y = enemyPosition.y;
				this.pathNode++;
			}
			else if(enemyPosition.dist(path2[this.pathNode]) > this.speed){
				dir.sub(path2[this.pathNode]);
				dir.normalize();
				dir.mult(-this.speed);
				enemyPosition.add(dir);
				this.x = enemyPosition.x;
				this.y = enemyPosition.y;
				
			}
			this.threatLevel = this.threatLevel + this.speed;
		}
	};
}