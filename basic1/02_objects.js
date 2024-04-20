//singlton
//Object.create

//we use 
//Object literals

// const jsUser = {
//     name : "Narendra",
// }
// console.log(jsUser.name); //Narendra

const mySym = Symbol("key1") //declare symbol

const user = {
    name : "Narendra",
    "full name" : "Narendra saharan",
    [mySym] : "myKey1",
    age : 24,
    location: "ahmedbad",
    email : "nk@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saterday"],
}

// console.log(user.email); // nk@gmail.com
// console.log(user[email]); // error
// console.log(user["email"]); // nk@gmail.com

// console.log(user.full name); // error cant access

// console.log(user["full name"]); //Narendra saharan

// console.log(user.mySym); //myKey1 but not as a symbol

// console.log(typeof user.mySym); // string its just use as a string

// console.log(user[mySym]); // right way to access symbol

//change obj value
// user.email = "narendra@gmail.com"
// console.log(user.email); //narendra@gmail.com

//object lock

// Object.freeze(user);
// user.email = "nks@gmail.com";
// console.log(user.email); //nk@gmail.com becoz object is freez we cant change value right now

//add greetings

user.greeting = function(){
    console.log("hello js user");
}

// console.log(user.greeting); // [Function (anonymous)] not return value its retun just a refrence of function

// console.log(user.greeting()); //hello js user

user.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(user.greetingTwo()); //hello js user Narendra



