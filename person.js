//Q.No:3
class Person{
    constructor(firstName,lastname,age,place,course){
        this.firstName =firstName;
        this.lastname=lastname
        this.age = age;
        this.place=place;
        this.course = course;
    }
    getAllNames(){
        return(`${this.firstName} ${this.lastname}`);
    }
    getPersonDetails(){
      
        return(`Name : ${this.firstName} ${this.lastname}, Age: ${this.age}, Place: ${this.place}, Course: ${this.course}`);
}
}   
    person1  = new Person("keerthi","Vasan",10,"chennai","BCA");
    person2  = new Person("Kalanjiya","Raj",25,"TCM","BCA");
    person3  = new Person("kanna","kr",22,"RMD","MCA");
    person4  = new Person("karthi","Kumar",26,"RMD","MBA");

   console.log(person1.getPersonDetails());  //Name : Vasanth, Age: 26, Place: chennai, Qualification: BCA

console.log(person1.getAllNames());  //Vasanth
console.log(person2.getAllNames());  //ram
console.log(person3.getAllNames());  //rahul
console.log(person4.getAllNames());  //Vijaya Kumar
