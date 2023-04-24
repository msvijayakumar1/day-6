//Q.No:4
class Uber{
    constructor(vechile,distance,waitingPeriod,rate){
        this.vechile = vechile;
        this.distance =distance;
        this.waitingPeriod =waitingPeriod;
        this.rate=rate;
        
    }
 getRide() {
    return(`The distance of the ride id ${this.distance} with waiting period ${this.waitingPeriod} and rate of ${this.rate} `);
  }

  getPrice() {
       
       if(this.vechile == "auto"){
        this.rate = 7;
      let totalPrice = (this.distance * this.rate)+(this.waitingPeriod * 5);
      return totalPrice; 
       }
       else if (this.vechile == "bike"){
        this.rate = 5;
      let totalPrice = (this.distance * this.rate)+(this.waitingPeriod * 5);
      return totalPrice; 
       }
       else if (this.vechile == "car"){
        this.rate = 10;
      let totalPrice = (this.distance * this.rate)+(this.waitingPeriod * 5);
      return totalPrice; 
       }

  }
  
  setDistance(dist){
    this.distance = dist;
  }
}

let coustomer1 = new Uber ("car",5,10);
let coustomer2 =new Uber ("auto",10,5);
let coustomer3 =new Uber ("bike",10,5);

console.log(coustomer1.getPrice());  // 100
console.log(coustomer2.getPrice());  //95
coustomer1.setDistance(150);
console.log(coustomer1.getPrice()); // 1550
console.log(coustomer1.getRide());  //The distance of the ride id 150 with waiting period 10 and rate of 10 
