# JAVASCRIPT-DOCS

        References: 
        > ECMA Script - https://en.wikipedia.org/wiki/ECMAScript
        > VSCode - https://code.visualstudio.com/
        > NodeJS - https://nodejs.org/en/
        > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
        > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
        > 


        > Most Populat language used in web browsers
        > JavaScript is not Java  
        > JavaScript Engine - Every browser provides javascript engine to run our code. V8 is th e most popular and used in Node JS
        > No need to compile to machine code. It is slower
        > Dynamically Typed Language
            - no types
            - var age = 20 and not int age = 20
        > ECMA Script
            - Specification tells how javascript should be implemented by the browser so that javascript program runs exactly the same in all browsers.         



        Open Chrome Browser / Firefox Browser
        Right click --> Inspect 
                - Elements
                - Console
                - Sources
                - Network
                - Performance 
                - Application
                - Security
                - Lighthouse
                - Recorder
        //Java Script Code
        Console
                > console.log("Hello JS")
                > enter
                > console.log(10+10)

# HOISTING

         var declared inside a loop is available outside
         so using var is not a good practice

         use "let" instead of "var" to avoid hoisting
         "const" to declare constants // like final variable in java const works similar to java in objects too

         delete keyword to delete contents of an object.
         delete brandObject.brand;

         //when to use const vs let
         let - used inside a loop
         const - used in other places


# VSCODE JS writing 

                > create new file hello-world.js
                > Menu bar --> terminal --> open new terminal
                
                //running JS file
                % node hello-world.js
                % node --version

                //Extensions
                > code runner
                > ctrl + option + n : keymap    to run the file using code runner

                View --> command palette--> Open settings(JSON)
                > "code-runner.showExecutionMessage": false  //to diable additional info in terminal
                > "code-runner.clearPreviousOutput": true // to clear previous outputs

                **Documenting in code**
                Commenting
                // to comment a single line
                /* */ multi-line comment

                **Quotes and Colons**
                ' ' or " " are same
                ; after end of line is optional

                ESLint --> tool to find and fix problems in javascript code.

                **Variables**
                var firstName = "abhilash";
                var age = 21;
                var isMale =true;
                var balance = 100.2;
                var dob = new Date(200,0,30);
                var person = {}
                var empty = undefined;
                console.log(firstName);
                console.log(age);
                console.log(isMale);
                console.log(dob);
                console.log(person);
                console.log(empty); 

                //typeof tells the type of variable
                console.log(typeof firstName);
                //Naming variables
                similar to java conventions
                //Strings in javascript
                var brand = "abhilashgd"
                var a = "abhilash";
                var b = "gd";    
                console.log(a+" "+b);
                console.log(`${a} ${b.toUpperCase()}`);


# writing objects

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

# Boolean

                var isAdult =true;
                console.log(isAdult);
                if (isAdult){ console.log("is adult")}
                else{ console.log("is not dult")}
                console.log(!true);

# Arrays

                var names = [ "abhilash", "vikram", "chaitanya"]; 
                console.log(names);
                console.log("Index 0 - "+ names[0]);

# Arithametic Operators (BODMAS)

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

# FUNCTIONS

                //built in functions
                var person1= {
                    name: "abhilash"
                }
                console.log(Object.values(person1));
                console.log(Object.keys(person1));
                console.log("abhilash".toUpperCase());
                console.log("abhilash".indexOf("l"));

# LOOPS
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
                //while loop similar to java
                //do while loop similar to java
                //increment and decrement operators similar to java
                //comparison operators similar to java
                //logical operators similar to java
                //if statement similar to java
                //ternary if statement
                var result = number % 2 == 0 ? 'even' : 'odd';
                //swith statement similar to java

# FUNCTION

            //Functions
                function hello(){

                }
                hello =1
                console.log(hello);

                const hello2 = function (){
                } //to avoid function getting assigned other values

                

