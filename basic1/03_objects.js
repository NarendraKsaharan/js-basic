const tinderUser = new Object();

// console.log(tinderUser); //{}

tinderUser.id = "abc123"
tinderUser.name = "Narendra"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //{ id: 'abc123', name: 'Narendra' }

const regUser = {
    email : "n@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Narendra",
            lastname : "saharan",
        }
    }
}

// console.log(regUser); //give complete obejct

// console.log(regUser.fullname); //{ userfullname: { firstname: 'Narendra', lastname: 'saharan' } }
// console.log(regUser.fullname.userfullname); //{ firstname: 'Narendra', lastname: 'saharan' }
// console.log(regUser.fullname.userfullname.firstname); //Narendra

//merge object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1 , obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } its not a proper way to merge

const obj4 = Object.assign(obj1, obj2);
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } // merge but here value after merge goes to obj1 becoz he understend the obj1 is target

const obj5 = Object.assign({}, obj1, obj2);
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  // more proper ways to merge becoz here we use empty object so value after merge goes to in empty object

//most usefull spread oprator

const obj6 = {...obj1,...obj2}
// console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } mostly use for combine obj 

//databse value

const users = [
    {
        id : "123",
        name : "user1",
    },
    {
        id : "456",
        name : "user2",
    },
    {
        id : "789",
        name : "user3",
    },
]

// // console.log(users[1].name); //user2
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ 'abc123', 'Narendra', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', 'abc123' ], [ 'name', 'Narendra' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('email')); //false its check the value exists or not and return true or false

const course = {
    coursename: "js",
    fee : "999",
    courseinstructor : "Narendra",
}

// console.log(course.courseinstructor);// simple way
// const {courseinstructor} = course;

// console.log(courseinstructor); //structerable

const {courseinstructor : instructor} = course;
console.log(instructor);

