// at
// concat
// constructor
// copyWithin
// entries
// every
// fill
// filter
// find
// findIndex
// findLast
// findLastIndex
// indexOf
// lastIndexOf
// valueOf
// flat
// flatMap
// map
// forEach
// includes
// join
// keys
// length
// pop
// push
// reduce
// reduceRight
// reverse
// shift
// unshift
// slice
// splice
// some
// sort
// toString
// toLocaleString
// toReversed
// toSorted
// toSpliced
// values
// with
// Symbol(Symbol.iterator)


// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable

// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__
// __proto__
// get __proto__
// set __p


// 1. at

// let array = ['a', 'b', 'c', 'd', 'e'];
// console.log(array.at(2)); // Output: 'c'

// //2.concate
// let array1 = ['a', 'b'];
// let array2 = ['c', 'd'];
// let newArray = array1.concat(array2);
// console.log(newArray); // Output: ['a', 'b', 'c', 'd']

// // 3. constructor

// let arr = [];
// console.log(arr.constructor); // Output: function Array() { [native code] }

// // 4. copyWithin()

// let arr1 = [1, 2, 3, 4, 5];
// arr1.copyWithin(0, 3, 5);
// console.log(arr1); // Output: [4, 5, 3, 4, 5]

// 5. entries()

// let arr2 = ['a', 'b', 'c'];
// let iterator = arr2.entries();
// console.log(iterator.next().value); // Output: [0, 'a']
// console.log(iterator.next().value); // Output: [1, 'b']
// console.log(iterator.next().value); // Output: [2, 'c']
// console.log(iterator.next().value); // undefined

// 6.every()

// let arr3 = [2, 4, 6, 8, 10];
// let isEven = arra3.every(element => element % 2 === 0);
// console.log(isEven); // Output: true

// let temperatures = [25, 28, 22, 30, 26];

// let below35 = temperatures.every(temp => temp < 35);
// console.log(below35); // Output: true

// let ages = [18, 20, 25, 30];

// let isAdult = ages.every(age => age <= 18);
// console.log(isAdult); // Output: true

// 7. fill()

// let arr4 = [1, 2, 3, 4, 5];
// arr4.fill(8, 2, 4);
// console.log(arr4); // Output: [1, 2, 8, 8, 5]

// 8. filter()
// let arr5 = [1, 2, 3, 4, 5];
// let newArray1 = arr5.filter(element => element % 2 === 0);
// console.log(newArray1); // Output: [2, 4]

// 9. find()
// let arr6 = [1, 2, 3, 4, 5];
// let found = arr6.find(element => element > 2);
// console.log(found); // Output: 3

// let numbers = [9, 12, 8, 3, 5];

// let result = numbers.find(num => num > 8);
// console.log(result); // Output: 12  this find first elemnt from start 

// 10. findIndex()
// let arr7 = [1, 2, 3, 4, 5];
// let index = arr7.findIndex(element => element > 2);
// console.log(index); // Output: 2

// let numbers = [5, 8, 18, 13, 9];

// // Finding the index of the first element greater than 10
// let index1 = numbers.findIndex(num => num > 10);
// console.log(index1); // Output: 2  //return first elemnt index who fulfill condition

// 11. findLast()
// let arr8 = [1, 2, 3, 4, 5];
// let found = arr8.findLast(element => element > 2);
// console.log(found); // Output: 5  eturns the last element that satisfies the condition.


// 12. findLastIndex()
// let arr9 = [1, 2, 3, 4, 5];
// let lastIndex = arr9.findLastIndex(element => element > 2);
// console.log(lastIndex); // Output: 4  returns the index of the last element that satisfies the condition.

// 13. indexOf()
// let arr10 = [1, 2, 3, 4, 5];
// console.log(arr10.indexOf(3)); // Output: 2
// console.log(arr10.indexOf(6)); // Output: -1  // index where elemnt located

// 14. lastIndexOf()
// let arr11 = [1, 2, 3, 4, 5, 3];
// console.log(arr11.lastIndexOf(3)); // Output: 5
// console.log(arr11.lastIndexOf(6)); // Output: -1  return last index of element

// 15. valueOf()

// let arr12 = ['a', 'b', 'c'];
// let iterator = arr12.values();
// for (let value of iterator) {
//   console.log(value);
// }
// Output:
// 'a'
// 'b'
// 'c'

// 16. flat()

// let arr13 = [1, 2, [3, 4]];
// let newArray3 = arr13.flat();
// console.log(newArray3); // Output: [1, 2, 3, 4]

// 17. flatMap()

// let arr14 = [1, 2, 3];
// let newArray4 = arr14.flatMap(x => [x, x * 2]);
// console.log(newArray4); // Output: [1, 2, 2, 4, 3, 6] first 1 and 1*2, 2& 2*2, 3, 3*2

// 18. Map()

// let arr15 = [1, 2, 3];
// let newArra5 = arr15.map(element => element * 2);
// console.log(newArra5); // Output: [2, 4, 6]

// 19. foreach()

// let arr16 = ['a', 'b', 'c'];
// arr16.forEach(element => {
//   console.log(element);
// });
// Output:
// a
// b
// c

// 20. includes()

// let arr17 = [1, 2, 3];
// console.log(arr17.includes(2)); // Output: true
// console.log(arr17.includes(4)); // Output: false

// 21. join()

// let arr18 = ['apple', 'banana', 'orange'];
// let joinedString = arr18.join(', ');
// console.log(joinedString); // Output: 'apple, banana, orange'

// 22. keys()
// let arr19 = ['a', 'b', 'c'];
// let iterator = arr19.keys();
// for (let key of iterator) {
//   console.log(key);
// }
// Output:
// 0
// 1
// 2

// 23. length()

// let arr20 = [1, 2, 3, 4, 5];
// console.log(arr20.length); // Output: 5

// 24. pop()

// let arr21 = [1, 2, 3];
// let removedElement = arr21.pop();
// console.log(removedElement); // Output: 3
// console.log(arr21); // Output: [1, 2]

// 25. push()

// let arr22 = [1, 2, 3];
// let newLength = arr22.push(4, 5);
// console.log(newLength); // Output: 5
// console.log(arr22); // Output: [1, 2, 3, 4, 5]

// 26. reduce()

// let arr23 = [1, 2, 3, 4, 5];
// let sum = arr23.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

// 27. reduceRight

// let arr24 = [1, 2, 3, 4, 5, 6];
// let reversedSum = arr24.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(reversedSum); // Output: 21

// 28. reverse()

// let arr25 = [1, 2, 3];
// arr25.reverse();
// console.log(arr25); // Output: [3, 2, 1]

// 29. toReversed()
// let arr26 = [1, 2, 3];
// arr26.reverse();
// console.log(arr26); // Output: [3, 2, 1]

// 30. shift()

// let arr27 = [1, 2, 3];
// let shiftedElement = arr27.shift();
// console.log(shiftedElement); // Output: 1
// console.log(arr27); // Output: [2, 3]

// 31. unshift()

// let arr28 = [1, 2, 3];
// let newLength = arr28.unshift(0);
// console.log(newLength); // Output: 4
// console.log(arr28); // Output: [0, 1, 2, 3]

// 32. slice()

// let arr28 = [1, 2, 3, 4, 5];
// let slicedArray = arr28.slice(1, 3);
// console.log(slicedarr28); // Output: [2, 3]

// 33. splice()

// let arr29 = [1, 2, 3, 4, 5];
// arr29.splice(2, 0, 6); // index se start karke 0 elements remove kiye aur 6 add kiya
// console.log(arr29); // Output: [1, 2, 6, 3, 4, 5]

// 34. some()
// let arr30 = [1, 2, 3, 4, 5];
// let isEven = arr30.some(element => element % 2 === 0);
// console.log(isEven); // Output: true

// 35. sort()
// let arr31 = [3, 1, 2];
// arr31.sort();
// console.log(arr31); // Output: [1, 2, 3]

// 36. toString()
// let arr32 = [1, 2, 3];
// let stringArr = arr32.toString();
// console.log(stringArr); // Output: '1,2,3'

// 37. toLocalString()
// let arr33 = [1000, 2000, 3000];
// let localeString = arr33.toLocaleString('en-US');
// console.log(localeString); // Output: '1,000,2,000,3,000'

// 38. with()

// let person = { name: 'John', age: 30 };

// // Avoid using 'with'
// with (person) {
//   console.log(name, age); // Output: 'John', 30
// }

// 39. Symbol(Symbol.iterator)
// let array = ['a', 'b', 'c'];
// let iterator = array[Symbol.iterator]();
// console.log(iterator.next().value); // Output: 'a'
// console.log(iterator.next().value); // Output: 'b'
// console.log(iterator.next().value); // Output: 'c'

// 40. hasOwnProperty()
// let person = { name: 'John', age: 30 };
// console.log(person.hasOwnProperty('name')); // Output: true
// console.log(person.hasOwnProperty('nk')); // Output: false (inherited property)

// 41. multipleconcate()

// const game = ['cricket', 'football', 'chess'];
// const fruit = ['kiwi', 'apple', 'banana'];
// const vege = ['pea', 'carrot', 'potato'];

// const allItem = [...game,...fruit,...vege];
// console.log(allItem);



































