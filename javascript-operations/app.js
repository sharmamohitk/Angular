// var dynamicVar = "Hello Visual Studio";
// console.log(typeof dynamicVar);
// dynamicVar = 9;
// console.log(typeof dynamicVar);
// dynamicVar = true;
// console.log(typeof dynamicVar);

// var x = "20";
// var z = 20;
// console.log(x == z);
// console.log(x === z);

// var y = 10;
// console.log(x+y);
// console.log(x-y);

// objects
// var m = {};
// console.log(typeof m);
// m = function(){}
// console.log(typeof m);
// m = [];
// console.log(typeof m);

// Literal Method
var myBooks = ["book1", "book2", "book3"];

var box = {
    width : 4,
    length : 6,
    getVolume : function(){
        return this.width * this.length;
    },
    books : myBooks
}
box.size = 7; // here we are adding property to box object
console.log(box); // here we can see the size property attached in box object

console.log(delete box.xyz);  // delete is not safe it always returns true 
//even property doesn't exist in object but for sure it will delete object/property

box.books.push("book4");
console.log(myBooks.length); // array is reference type and it will if you will update it's 
// reference somewhere in ur application

box.books = null;
console.log(myBooks.length); // checking the referenced obj length

console.log(box.books); // checking the box's books obj value

var arr = ["Foo", 32, true, {}, function(){console.log("Hello World!")}, []];

console.log(arr[4]);// function are the first citizen in javascript

// if we want to execute/run function then we had to give () after function name
arr[4]();

//console.log(p); // we haven't define variable 
//  yet so we got eror variable is not defined
 var q;
 console.log(" q val is "+q); // we haven't define any value so default val is undefined
// Constructor Methods

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(){
       return 'Hello '+ this.firstName + " "+ this.lastName;
       //return  this.firstName + ""+ this.lastName;
    }
}

console.log(Person); // here it will returns the Function Name
// but above function doesn't return nothing so undefined by default
// so when we execute this function then it will return undefined
console.log("Person() "+Person()); // if we will return then it wil return the same entity

// creating object using constructor function
var foo = new Person("Foo", "Bar");
console.log("foo.sayHello() "+foo.sayHello());

//var testNum = new Person(10,-10);
//console.log(testNum.sayHello());

// Instance Methods
var Shoe = {
    size : 9,
    gender : "Women"
}

var magicShoe = Object.create(Shoe);
console.log(magicShoe); // objects have no properties but it will inherit property
// from Shoe object using protypical inheritance
console.log(magicShoe.gender);
console.log(magicShoe.hasOwnProperty('size'));

console.log(magicShoe.isPrototypeOf(Shoe));
console.log(Shoe.isPrototypeOf(magicShoe));

var str = "Some String";
var str2 = "Welcome to JavaScript";

String.prototype.countAll = function(letter){
    var counter = 0;

    for(var i =0 ; i< this.length; i++){
        if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
            counter++;
        }
    }

    return counter;
}

console.log("Occurence : ", str2.countAll('a'));  


//Functions : are first-class citizens

function add(num1, num2){
    return num1+num2;
}
var addition = function(num1, num2){
    return num1+num2;
}

console.log(add(3,5));
console.log(addition(4,5));

// IIFE :
(
    function(){
        console.log("IIFE");
    }
)();

// The primary reason to use an IIFE is to obtain data privacy.  
//any variables declared within the IIFE cannot be accessed by the outside world.

function b(){
    var myVar =201;
    function a(){
        console.log(myVar);         //201
    }
    a();
}

var myVar =101;

b();

//function definition hoisting only occurs for function declarations, not function expressions

function mystery1(){
    function chooseNumber(){
        return 12;
    }
    return chooseNumber;
    function chooseNumber (){
        return 10;
    }
}

var nestedFunc = mystery1
console.log(mystery1()());

function mystery(){
    var chooseNumber = function (){
        return 12;
    }
    return chooseNumber;
    var chooseNumber = function (){
        return 10;
    }
}

var nestedFunc = mystery
console.log(mystery()());   

// Bind, call, apply

// here we run application js file using node
// so global object here is global
//console.log(global);
//global.firstName = "Global Firstname";
//global.lastName = "Global Lastname";

var person = {
    firstName : "Foo",
    lastName :"Bar",
    getFuLName :function(){
        var nestedOne = function(){
            return this.firstName + this.lastName;
        }
        return nestedOne();
    }
}
console.log(person.getFuLName()); // ??

// Bind - returned function copy with new reference
// Call - actually call the function with new reference, 
// Apply - Same as call(), but with different way of supplying the parameter

var user = {
    fullName:"Tom Jerry",
    greet:function(){
        return this.fullName;
    }
}

function sayBye(){
    return this.fullName;
}
var copiedFunc = sayBye.bind(user);
console.log(copiedFunc());

// Function borrowing
var user2 = {fullName : "Bam Baz", lastName : "Baz"};
var bindFunc = user.greet.bind(user2);
console.log(bindFunc());

function multiply(a,b,c){
    return a*b*c;
}

var doubleVal = multiply.bind(null,2);
var tripleVal = multiply.bind(null, 3);
console.log(doubleVal(3,5));
console.log(tripleVal(4,5));

var employee = {
firstName:"Mohit",
lastName: "Sharma",
greet:function(lang){
    switch(lang){
        case 'en':
                return "EN "+ this.firstName + " "+ this.lastName;
        case 'es':
                return "ES "+  this.firstName + " "+ this.lastName;
        default:
                return "DEF "+ this.firstName + " "+ this.lastName;
    }
}
}
 var logging = function(lang){
    return this.greet(lang);
 }
console.log(logging.call(employee,'def'));
console.log(logging.apply(employee, ['es']));

//Closures

function testNumClosure(){
    var x = 4;
    return function(){
        return ++x;
    }
}
console.log(testNumClosure()());  
console.log(testNumClosure()());        // 5

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        //let j = i;
        arr.push(function () {
            return i;
        })
      }
    return arr;
}

var arr = buildFunctions();
console.log(arr[0]());      //3
console.log(arr[1]());      //3
console.log(arr[2]());      //3

function testClosure1(){
    var arrTest = [];
    for (let index = 0; index < 3; index++) {
        arrTest.push(function(){
            return index;
        });
    }
    return arrTest;
}

console.log("closure !!");
var arrClosure = testClosure1();
console.log(arrClosure[0]());
console.log(arrClosure[1]());
console.log(arrClosure[2]());

function testClosure2(){
    var arrTest = [];
    for (var index = 0; index < 3; index++) {
        arrTest.push(
            (function(j){
                return j;
            })(index)
        );
    }
    return arrTest;
}

console.log("arrClosure2");
var arrClosure2 = testClosure2();
console.log(arrClosure2[0]);
console.log(arrClosure2[1]);
console.log(arrClosure2[2]);


function demo(arr){
    if(arr.length > 2){
        let load= "LOADING";
        // console.log(flash); // flash is not defined
        // if you use val instead of flash then you will get flash value 
    }else{
        let flash = "Flashing";

    }
}

demo([1,2,3,4]);

//function Currying
function add(num1) {    //2
    return function (num2) { //3
        return function (num3) { //4
            return num1 + num2 + num3;
        }
    }
}
console.log(add(2)(3)(4));
//var result = num1 => num2 => num3 => num1+num2+num3;

var addByThree = add(3);
var addThreeAndFour = addByThree(4);
var result = addThreeAndFour(5);
console.log(result);

// Promise : result : success/failure , state : pending -> resolve -> rejected

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Succeed!");
        //reject(new Error("Whoops!"));
    }, 3000);
});

promise.then(function (response) {
        try {
            var result = response.data;
        } catch (exe) { }
        return result;
    })
    .then(function () {
        console.log("Hello, " + result);
    })
    .catch(function (err) {
        console.log(err);
});

// here below observable demo given but we should have rxjs library for running 
// so commenting the code as we cann't run this as plain javascript

// export class ObservableDemoComponent {

//     observable = Observable.create((observer) => {
  
//       setTimeout(()=>{
//         observer.next("First Package");
//       }, 1000);
//       setTimeout(()=>{
//         observer.next("Second Package");
//       }, 3000);
//       setTimeout(()=>{
//         observer.next("Third Package")
//       }, 5000);
//       setTimeout(()=>{
//         observer.complete();
//       }, 5000);
      
//     })
  
//     subs : any;
  
//     onSubscribe(){
//       this.subs = this.observable.subscribe(
//         data => console.log(data),
//         err => console.log(err),
//         () => console.log("COMPLETED")
//       )
//     }
  
//     onUnsubscribe(){
//       this.subs.unsubscribe();
//     }  
// // demo ends

























