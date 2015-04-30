function Car(make, model, year, color){
  
  this.year = year;
  this.state = "off";
  this.previousOwners = false;
  this.currentOwner = "Manufacturer";
  this.passengers = false;
  this.color = 'Blue';

}

Car.prototype.off = function(state){

 this.state = "off";

}

Car.prototype.start = function(state){

 this.state = "on";

}

Car.prototype.sale = function(newOwner){


  this.previousOwners.push(this.currentOwner);
  
  this.currentOwner = newOwner;


};



Car.prototype.passengers = function(newColor){

};

Car.prototype.previousOwners = function(newColor){

};

Car.prototype.pickUp = function(newColor){

};

Car.prototype.dropOff = function(newColor){

};


Car.prototype.paint = function(newColor){

};



module.exports=Car;