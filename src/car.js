function Car(make, model, year, color){
  
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.passengers = [];
  this.color = color;
  this.currentOwner = "Manufacturer";

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

Car.prototype.pickUp = function(){

if (this.state === "on") {

  this.passengers.push('john');

  }
};

Car.prototype.dropOff = function(passenger){

if (this.state === "on"){

for (i = 0; i < this.passengers.length; i++) {

  if (this.passengers[i] === passenger){
        
          this.passengers.splice(i, 1);
        }
    }
  };

};

Car.prototype.paint = function(newColor){

  this.color = newColor;

};



module.exports=Car;