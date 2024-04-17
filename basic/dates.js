let myDate = new Date;
// console.log(myDate);

console.log(typeof myDate);

// console.log(myDate.toString());          //Wed Apr 17 2024 21:02:43 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());      //Wed Apr 17 2024

// console.log(myDate.toISOString());       //2024-04-17T15:34:12.685Z

// console.log(myDate.toJSON());            //2024-04-17T15:34:38.512Z

// console.log(myDate.toLocaleDateString()); //4/17/2024

// console.log(myDate.toLocaleString());    // 4/17/2024, 9:06:23 PM

// console.log(myDate.toLocaleTimeString()); // 9:07:00 PM

// console.log(myDate.toTimeString());      // 21:07:42 GMT+0530 (India Standard Time)

// console.log(myDate.toUTCString());       // Wed, 17 Apr 2024 15:38:14 GMT

// console.log(myDate.getTimezoneOffset());      // -330

let myCreatedDate = new Date(2023, 0, 20);

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreateDate = new Date(2023, 0, 20, 5, 3, 20);
// console.log(myCreateDate.toLocaleString());

let myDates = new Date("2023-01-20");
console.log(myDates.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.get);