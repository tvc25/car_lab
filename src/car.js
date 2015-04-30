function Car(make, model, year, color){
  
  this.year = year;
  this.state = "off";
  this.previousOwners = false;
  this.currentOwner = "Manufacturer";

}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};



module.exports=Car;