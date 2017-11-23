function globalTurret(x, y, damage, cost, area, atkSpeed){
	this.x = x;
	this.y = y;
	this.damage = damage;
	this.area = area;
	this.cost = cost;
	this.level = 1;
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
		
	};
	this.checkTarget = function(){

	};
	this.findTarget = function(){

	};
	this.shotTarget = function(){

	}
}