function globalTurret(x, y, damage, cost, area, atkSpeed){
	this.x = x;
	this.y = y;
	this.damage = damage;
	this.area = area;
	this.cost = cost;
	this.level = 1;
	this.atkSpeed = atkSpeed;
	this.targetInRange = [];
	this.highestThreat = 0;
	this.target;
	this.shootFrames = 1;
	this.OK = true;
	this.display = function(){
		imageMode(CENTER);
		if(this.level === 1){
			image(turret1[0], this.x, this.y);
		}
		if(this.level === 2){
			image(turret1[1], this.x, this.y);
		}
		if(this.level === 3){
			image(turret1[2], this.x, this.y);
		}
		
	}
	this.checkTarget = function(){
		if(allEnemies.length != 0){
			var turretPosition = createVector(this.x, this.y);
			var dir = turretPosition.copy();
			var badDist = false;
			var newArray = [];
			for(var i = 0; i < allEnemies.length; i++){
				var checking = createVector(allEnemies[i].x, allEnemies[i].y);

				if(turretPosition.dist(checking) <= this.area){
					for(var n = 0; n < this.targetInRange.length; n++){
						if(this.targetInRange[n] === i ){
							this.OK = false;
						}
					}
					if(this.OK){
						this.targetInRange.push(i);
						print(this.targetInRange.length);
						
					}
					this.OK = true;
				} 				
			}
			if(this.targetInRange.length != 0){
				for(var j = 0; j < this.targetInRange.length; j++){
					var checkingRange = createVector(allEnemies[this.targetInRange[j]].x, allEnemies[this.targetInRange[j]].y)
					if(turretPosition.dist(checkingRange) > this.area){
						var k = 0;
						badDist = true;
						for(var g = 0; g < this.targetInRange.length- 1; g++){
							if(g === j ){
								k++;
							}
							newArray[g] = this.targetInRange[k];
							k++;
						}
					}
					if(badDist){
						this.targetInRange = newArray;
						badDist = false;
					}
				}
			}
			
		}
	}
	this.findTarget = function(){
		if(this.targetInRange.length != 0){
			for(var i = 0; i < this.targetInRange.length; i++){
				if(this.highestThreat <= allEnemies[this.targetInRange[i]].threatLevel){
					this.highestThreat = allEnemies[this.targetInRange[i]].threatLevel;
					this.target = this.targetInRange[i];
				}
			}	
		}

	}
	this.shotTarget = function(){
		if(this.targetInRange.length != 0){
			if(this.shootFrames % this.atkSpeed === 0){
				allEnemies[this.target].hp = allEnemies[this.target].hp - this.damage;
			}
		}
	}
}