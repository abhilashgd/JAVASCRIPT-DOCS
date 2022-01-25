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

// boolean
var isAdult =true;
                console.log(isAdult);
                if (isAdult){ console.log("is adult")}
                else{ console.log("is not dult")}
                console.log(!true);

// Arrays
var names = [   "abhilash", 
                "vikram", 
                "chaitanya"];

console.log(names);
console.log("Index 0 - "+names[0]);
console.log("Size = "+ names.length);

// arithametic operations
var addition = 2+2;
var subtraction = 2-2;
var division = 10/2;
var multiplicaiton = 10*2;
var reminder = 10%2;
var exponentation = 3 ** 4;
console.log(addition);
console.log(multiplicaiton);
console.log(subtraction);
console.log(division);
console.log(reminder);
console.log(exponentation);   

//functions
function addNumbers(number1, number2){
    var addition = number1 + number2;
    //console.log(addition);
    return addition;
}
var result = addNumbers(10, 10);
var result2 = addNumbers(23,27);
console.log(result);
console.log(result2);

//built in functions
var person1= {
    name: "abhilash"
}
console.log(Object.values(person1));
console.log(Object.keys(person1));
console.log("abhilash".toUpperCase());
console.log("abhilash".indexOf("l"));

//loops
for (var i = 0; i<=10;i++) {
    console.log(i);
}

var names2 = [   "abhilash", 
                "vikram", 
                "chaitanya"];
                //for i
                for (var i = 0; i<names2.length;i++) {
                    console.log(names[i]);
                }
                //for of
                for (const name of names2) {
                console.log(name);
                    }
                //for each
                names2.forEach(function(name){
                    console.log(name);
                })
                //while
                var number5=0;
                while(number5 < 5){
                    console.log(number5);
                    number5 = number5+1;
                }
                var condition =true;
                while(condition){
                    console.log("hello");
                    condition=false;
                }
                var index =0;
                while (index<names.length){
                    console.log(names[index])
                    index = index+1;
                }
                //do while
                condition2 = true;
                do {
                        console.log("inside do while");
                        condition2=false;
                } while(condition2);

                //break and continue
                for(var i=0; i<=10;i++){
                    if(i < 5){  continue; }
                    console.log(i);
                }

                //Functions
                function hello(){

                }
                hello =1
                console.log(hello);

                const hello2 = function (){
                } //to avoid function getting assigned other values