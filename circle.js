//Q.No:2
class Cricle {
 
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
      return (`${this.radius.toFixed(1)}`);
    }
  
    setRadius(re){
      this.radius =re;
  
  
    }
  
    getColor(){
      return (`${this.color}`);
    }
    setColor(co){
      this.color = co;
    }
    toString(){
      //return a number as a String.
      let name = (`Radius=${this.radius.toFixed(1).toString()},color= ${this.color.toString()}`); 
     return name;
    }
  
    getArea(){
      //a= 3.14159 *(r*r)
      let area = 3.14159 * (Math.pow(this.radius,2));
      return area.toFixed(2);
    }
  
    getCircumference(){
      //2*3.14159*r
      let circum = 2 *3.14159*this.radius;
      return circum.toFixed(2);
    }
  }
  
  let cricle1 = new Cricle (1.0,"red");
  
  console.log(cricle1.getRadius());        //1.0
  cricle1.setRadius(2.0);
  console.log(cricle1.getColor());         //red
  cricle1.setColor("blue");
  console.log(cricle1.toString());         //Radius=2.0,color= blue
  console.log(cricle1.getArea());          //12.57
  console.log(cricle1.getCircumference()); //12.57