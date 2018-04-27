//arguments objects is no longer bound

const add =(a,b)=>{
    
   
    return a+b;
}
console.log(add(55,1,1000));


//this key word is no longer bound


const user ={

    name:'punith',
    cities:['Hyderabad','Chennai','Vatsavai'],
    placeslivedin(){
        console.log(this.name);
       
       this.cities.forEach((city)=>{
           console.log(this.name+' lived in '+city);
       });

    }
};
user.placeslivedin();

const multiplier = {
    numbers:[1,2,3],
    multiplyby:9,
    multiply(){
       return this.numbers.map((number)=>
             this.multiplyby*number );
    }
};
console.log(multiplier.multiply());
