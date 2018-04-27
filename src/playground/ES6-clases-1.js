class Person{
    constructor(name='Anonymous', age=0){
        this.name=name;
        this.age=age;
    }
   getDescription(){
        return(`${this.name} is ${this.age} years(s) old`)
    }
}

class Student extends Person{
    constructor (name, age, major='undecided'){
        super(name, age);
        this.major=major; 
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description+=` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor (name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomelocation(){
        return !!this.homeLocation;
    }
        getDescription(){
            let description = super.getDescription();
            if(this.hasHomelocation()){
                description+=` I'm visiting from ${this.homeLocation}`
            }
            return description;
        }
    }


const me = new Traveler('Punith',26, 'Vatsavai')
console.log(me.getDescription());



const other =new Traveler();
console.log(other.getDescription())
 