const name = "Narendra";
const age =25;

// console.log(name + age); //wrong way
// console.log(`My name is ${name} and im ${age} years old`);

// String Methods

//1.String.charAt():
const str = "Hello";

console.log(str.charAt(0)); // Output: "H"
console.log(str.charAt(1)); // Output: "e"
console.log(str.charAt(4)); // Output: "o"

//2. String.charCodeAt()
console.log(str.charCodeAt(0)); // Output: 72 (Unicode value of 'H')
console.log(str.charCodeAt(1)); // Output: 101 (Unicode value of 'e')
console.log(str.charCodeAt(4)); // Output: 111 (Unicode value of 'o')

//3. String.fromCharCode()
const charCode1 = 72; // Unicode code point for 'H'
const charCode2 = 101; // Unicode code point for 'e'
const charCode3 = 108; // Unicode code point for 'l'
const charCode4 = 108; // Unicode code point for 'l'
const charCode5 = 111; // Unicode code point for 'o'

const str1 = String.fromCharCode(charCode1, charCode2, charCode3, charCode4, charCode5);
console.log(str1); // Output: "Hello"

const c1 = 65; 
const c2 = 66;
const c3 = 67;
const c4 = 68;
const c5 = 69;

const str2 = String.fromCharCode(c1, c2, c3, c4, c5);
console.log(str2); //output ABCDE

const a1 = 61; 
const a2 = 62;
const a3 = 63;
const a4 = 64;
const a5 = 65;

const str3 = String.fromCharCode(a1, a2, a3, a4, a5);
console.log(str3); //output =>?@A

//4. String.prototype.includes()
const str4 = "Hello World";

console.log(str4.includes("World")); // Output: true
console.log(str4.includes("Hello")); // Output: true
console.log(str4.includes("JavaScript")); // Output: false

//5. String.prototype.indexOf()
const str5 = "Hello World";

console.log(str5.indexOf("World")); // Output: 6
console.log(str5.indexOf("Hello")); // Output: 0
console.log(str5.indexOf("JavaScript")); // Output: -1

//6. String.prototype.lastIndexOf()
const str6 = "Hello World";

console.log(str6.lastIndexOf("o")); // Output: 7
console.log(str6.lastIndexOf("l")); // Output: 9
console.log(str6.lastIndexOf("JavaScript")); // Output: -1

//7. String.prototype.localeCompare()
const str7 = 'apple';
const str8 = 'banana';

console.log(str7.localeCompare(str8)); // Output: -1 (str7 aage hai str8 ke muqabale)
console.log(str8.localeCompare(str7)); // Output: 1 (str8 aage hai str7 ke muqabale)
console.log(str7.localeCompare(str7)); // Output: 0 (str7 aur str7 barabar hain)

//8. String.prototype.match()
// const str9 = "The rain in Spain falls mainly in the plain";

// const matches = str9.match(/ain/g);
// console.log(matches); // Output: ["ain", "ain", "ain", "ain"]

//9. String.prototype.matchAll()
const str10 = "The rain in Spain falls mainly in the plain";

const matches = str10.matchAll(/ain/g);

for (const match of matches) {
  console.log(match);
}

// 10. String.prototype.padEnd()
const str11 = 'Hello';

console.log(str11.padEnd(10)); // Output: 'Hello     '
console.log(str11.padEnd(20, '.')); // Output: 'Hello.....'


// 11. String.prototype.padStart()
const str12 = 'Hello';

console.log(str12.padStart(10)); // Output: '     Hello'
console.log(str12.padStart(10, '.')); // Output: '.....Hello'

// 12. String.prototype.repeat()
const str13 = 'Hello ';

console.log(str13.repeat(3)); // Output: 'Hello Hello Hello '

// 13. String.prototype.replace()
const str14 = 'Hello, World!';

const newStr = str14.replace('World', 'Universe');
console.log(newStr); // Output: 'Hello, Universe!'

//14. tring.prototype.replaceAll()
const str15 = 'Hello, World! Hello!';

const newStr1 = str15.replaceAll('Hello', 'Hi');
console.log(newStr1); // Output: 'Hi, World! Hi!'

//15. String.prototype.search()

const str16 = 'Hello, World!';

const index = str16.search('World');
console.log(index); // Output: 7

// 16. String.prototype.slice()
const str17 = 'Hello, World!';

console.log(str17.slice(7)); // Output: 'World!'
console.log(str17.slice(0, 5)); // Output: 'Hello'
console.log(str17.slice(-6)); // Output: 'World!'
console.log(str17.slice(-6, -1)); // Output: 'World'

// 17. String.prototype.split()

const str18 = 'apple, banana, mango, orange';

const arr = str18.split(', ');
console.log(arr); // Output: ['apple', 'banana', 'mango', 'orange']

// 18. String.prototype.startsWith()  one more methos same for that
const str19 = 'Hello, World!';

console.log(str19.startsWith('Hello')); // Output: true
console.log(str19.startsWith('World')); // Output: false

// 19.String.prototype.substring()

const str20 = 'Hello, World!';

console.log(str20.substring(7)); // Output: 'World!'
console.log(str20.substring(0, 5)); // Output: 'Hello'
console.log(str20.substring(7, 12)); // Output: 'World'

//20. String.prototype.toLocaleLowerCase()

const str21 = 'Hello, World!';
console.log(str21.toLocaleLowerCase()); // Output: 'hello, world!'


//21.  String.prototype.toLocaleUpperCase()

const str22 = 'Hello, World!';
console.log(str22.toLocaleUpperCase()); // Output: 'HELLO, WORLD!'


//22.  String.prototype.toLowerCase()

const str23 = 'Hello, World!';
console.log(str23.toLowerCase()); // Output: 'hello, world!'


//23.  String.prototype.toString()

const strObj = new String('Hello, World!');
console.log(strObj.toString()); // Output: 'Hello, World!'


//24.  String.prototype.toUpperCase()

const str24 = 'Hello, World!';
console.log(str24.toUpperCase()); // Output: 'HELLO, WORLD!'


//25.  String.prototype.toWellFormed()

const str25 = '\u0048\u0065\u006C\u006C\u006F\u030A'; // 'Hello̊' (Latin capital letter H, e, l, l, o, combining ring above)
console.log(str25.toWellFormed()); // Output: 'Hello'


//26.  String.prototype.trim()

const str26 = '   Hello, World!   ';
console.log(str26.trim()); // Output: 'Hello, World!'


//27.  String.prototype.trimEnd()

const str27 = '   Hello, World!   ';
console.log(str27.trimEnd()); // Output: '   Hello, World!'


//28.  String.prototype.trimStart()

const str28 = '   Hello, World!   ';
console.log(str28.trimStart()); // Output: 'Hello, World!   '


//29.  String.prototype.valueOf()

const strObj1 = new String('Hello, World!');
console.log(strObj1.valueOf()); // Output: 'Hello, World!'








