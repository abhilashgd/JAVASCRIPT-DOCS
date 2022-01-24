var firstName = "abhilash";
var age = 21;
var isMale =true;
var balance = 100.2;
var dob = new Date(200,0,30);
var person = {
    firstName: "abhilash",
    age: 33,
    isMale: true,
    balance:1000.45,
    dob: new Date(1988,1,20).toJSON(),
    address:{
        city: "California",
        postcode: "CF01"
    }
};
var empty = undefined;
var a = "abhilash";
var b = "gd";                
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMale);
console.log(typeof dob);
console.log(typeof person);
console.log(typeof empty);
console.log(a+" "+b);
console.log(`${a} ${b.toUpperCase()}`);
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address);
console.log(person.address.city);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));

var isAdult =true;
                console.log(isAdult);
                if (isAdult){ console.log("is adult")}
                else{ console.log("is not dult")}
                console.log(!true);


var names = [   "abhilash", 
                "vikram", 
                "chaitanya"];
console.log(names);
console.log("Index 0 - "+names[0]);
console.log("Size = "+ names.length);
            