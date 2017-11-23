
function globalEnemy(speed, hp, armor, path, money){
	this.alive = true;
	this.x = startPoint1[0];
	this.y = startPoint1[1];
	//this.x = 50;
	//this.y = 50;
	this.speed = speed;
	this.hp = hp + hp * 0.03 * gameLevel;
	this.path = path;
	this.moneyGained = money + money * 0.02 * gameLevel;
	this.countFrames = 0;
	this.pathNode = 0;
	this.display = function(){
		if(this.alive){
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
		}
	}

	this.walk = function(){
		while(this.pathNode != 11){
			var enemyPosition = createVector(this.x, this.y);
			var dir = enemyPosition.copy();
			if(enemyPosition.dist(path1[this.pathNode]) < this.speed){
				var left = enemyPosition.dist(path1[this.pathNode]);
				dir.sub(path1[pathNode]);
				dir.normalize();
				dir.mult(left);
				enemyPosition.add(dir);
				this.x = enemyPosition.x;
				this.y = enemyPosition.y;
				this.pathNode++;
			}
			else if(enemyPosition.dist(path1[this.pathNode]) < this.speed){
				dir.sub(path1[this.pathNode]);
				dir.normalize();
				dir.mult(this.speed);
				this.x = enemyPosition.x;
				this.y = enemyPosition.y;
				
			}
			
		}
	};
}