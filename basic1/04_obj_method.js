// assign()
// create()
// defineProperties()
// defineProperty()
// entries()
// freeze()
// fromEntries()
// hasOwnProperty()
// getOwnPropertyDescriptor()
// getOwnPropertyDescriptors()
// getOwnPropertyNames()
// getOwnPropertySymbols()
// groupBy()
// is()
// isExtensible()
// preventExtensions()
// isFrozen()
// seal()
// isSealed()
// keys()
// values()
// valueOf()
// propertyIsEnumerable()
// setPrototypeOf()
// isPrototypeOf()
// getPrototypeOf()
// toLocaleString()
// toString()



// 1. assign()

// const obj1 = { a: "1", b: "2" };
// const obj2 = { b: "3", c: "4" };
// const obj3 = { c: "5", d: "6" };
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4); // Output: { a: 1, b: 3, c: 5, d: 6 }

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}
// const obj5 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// 2. create()

// let protoObject = {
//     greet: function() {
//         console.log('Hello!');
//     }
// };

// let newObject = Object.create(protoObject);
// console.log(newObject); // Output: {}
// newObject.greet(); // Output: 'Hello!'



// 3. defineProperties()
// let obj = {};

// Object.defineProperties(obj, {
//     user1: {
//         value : {
//             name: 'Narendra',
//             age: 24,
//             email: "n@gmail.com",
//             islog : true
//         },
//         writable: true, //optional default false
//         enumerable: true, //optional default false
//         configurable: true, //optional default false
//     },
//     user2: {
//         value : {
//             name: 'NK',
//             age: 25,
//             email: "nk@gmail.com",
//             islog : false
//         }
//     },
// });

// console.log(obj.user1); 
// console.log(obj.user2); 

// 4.defineProperty()
// let obj = {};

// Object.defineProperty(obj, 'property1', {
//     value: 'value1',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// console.log(obj.property1); // Output: 'value1'

// 5. entries()
// const obj = { a: 1, b: 2, c: 3 };

// const entries = Object.entries(obj);
// console.log(entries);
// // Output: [['a', 1], ['b', 2], ['c', 3]]

// 6. freeze()

// const obj = {
//     name: 'John',
//     age: 30
// };

// Object.freeze(obj);

// // Trying to modify object properties
// obj.name = 'Alice'; // Modification attempt
// delete obj.age; // Deletion attempt

// console.log(obj); // Output: { name: 'John', age: 30 }

// 7. fromEntries ()

// const entries = [['a', 1], ['b', 2], ['c', 3]];

// const obj = Object.fromEntries(entries);
// console.log(obj);
// // Output: { a: 1, b: 2, c: 3 }

// 8. hasOwnProperty()
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(obj.hasOwnProperty('a')); // Output: true
// console.log(obj.hasOwnProperty('toString')); // Output: false

// 9. getOwnPropertyDescriptor()
// const obj = {
//     name: 'John',
//     age: 30
// };

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
// console.log(descriptor); //{ value: 'John', writable: true, enumerable: true, configurable: true }


// 10. getOwnPropertyDescriptor()
// const obj = {
//     name: 'John',
//     age: 30
// };

// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors); // { name: { value: 'John', writable: true, enumerable: true, configurable: true }, age: { value: 30, writable: true, enumerable: true, configurable: true }}


// 11. getOwnPropertyNames()
// const obj = {
//     name: 'John',
//     age: 30
// };

// const propertyNames = Object.getOwnPropertyNames(obj);
// console.log(propertyNames); //["name", "age"]


// 12. getOwnPropertySymbols()
// const sym1 = Symbol('key1');
// const sym2 = Symbol('key2');

// const obj = {
//     [sym1]: 'value1',
//     [sym2]: 'value2'
// };

// const symbols = Object.getOwnPropertySymbols(obj);
// console.log(symbols); //[Symbol(key1), Symbol(key2)]

// 13. groupBy()

// function groupBy(arr, property) {
//     return arr.reduce((acc, obj) => {
//         const key = obj[property];
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key].push(obj);
//         return acc;
//     }, {});
// }

// const persons = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 }
// ];

// const grouped = groupBy(persons, 'age');
// console.log(grouped);

//output {
//     25: [{ name: 'Alice', age: 25 }],
//     30: [{ name: 'John', age: 30 }, { name: 'Bob', age: 30 }]
// }

// 14. is()

// console.log(Object.is(5, 5)); // true
// console.log(Object.is(5, '5')); // false

// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(0, -0)); // false

// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// console.log(Object.is(obj1, obj2)); // false

// 15. isExtensible()
// const obj = { a: 1, b: 2 };

// console.log(Object.isExtensible(obj)); // true

// Object.preventExtensions(obj);

// console.log(Object.isExtensible(obj)); // false

// 16. preventExtensions()

// const obj = { a: 1, b: 2 };

// console.log(Object.isExtensible(obj)); // true

// Object.preventExtensions(obj);

// console.log(Object.isExtensible(obj)); // false

// 17. isFrozen()
// const obj = { a: 1, b: 2 };

// console.log(Object.isFrozen(obj)); // false

// Object.freeze(obj);

// console.log(Object.isFrozen(obj)); // true

// obj.c = 3; // Trying to add a new property
// console.log(obj); // Output: { a: 1, b: 2 }

// 18 isSealed()
// const obj = { a: 1, b: 2 };

// console.log(Object.isSealed(obj)); // false

// Object.seal(obj);

// console.log(Object.isSealed(obj)); // true

// delete obj.a; // Trying to delete a property
// console.log(obj); // Output: { b: 2 }

// obj.c = 3; // Trying to add a new property
// console.log(obj); // Output: { b: 2 }

// 19. seal()
// const obj = { a: 1, b: 2 };

// console.log(Object.isSealed(obj)); // false

// Object.seal(obj);

// console.log(Object.isSealed(obj)); // true

// obj.a = 10; // Modifying an existing property
// console.log(obj); // Output: { a: 10, b: 2 }

// delete obj.b; // Trying to delete a property
// console.log(obj); // Output: { a: 10 }

// 20. keys()
// const obj = {
//     name: 'John',
//     age: 30,
//     country: 'USA'
// };

// const keys = Object.keys(obj);
// console.log(keys); // Output: ["name", "age", "country"]

// 21. values()
// const obj = {
//     name: 'John',
//     age: 30,
//     country: 'USA'
// };

// const values = Object.values(obj);
// console.log(values); // Output: ["John", 30, "USA"]

// 22. valueOf()
// const obj = {
//     a: 10,
//     b: 20,
//     valueOf() {
//         return this.a + this.b;
//     }
// };

// console.log(obj.valueOf()); // Output: 30

// 23. propertyIsEnumerable()

// const obj = {
//     a: 1,
//     b: 2
// };

// console.log(obj.propertyIsEnumerable('a')); // Output: true
// console.log(obj.propertyIsEnumerable('toString')); // Output: false

// 24. toString()

// const obj = {
//     a: 1,
//     b: 2,
//     toString() {
//         return `a: ${this.a}, b: ${this.b}`;
//     }
// };

// console.log(obj.toString()); // Output: "a: 1, b: 2"


// 25. toLocalString()
// const date = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// console.log(date.toLocaleString('en-US', options)); // Output: "Thursday, April 22, 2024"
// console.log(date.toLocaleString('hi-IN', options)); // Output: "गुरुवार, 22 अप्रैल 2024"























