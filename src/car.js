function Car(make, model, year, color){
  
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.passengers = [];
  this.color = 'Blue';

}

Car.prototype.currentOwner = "Manufacturer";

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

Car.prototype.previousOwners = function(newColor){

};

Car.prototype.pickUp = function(){

if (this.state === "on") {

  this.passengers.push('john');

  }
};

// Car.prototype.pickUp = function(state){

// this.state = "on";

// };


Car.prototype.paint = function(newColor){

};



module.exports=Car;