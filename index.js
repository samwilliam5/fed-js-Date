const date= new Date();
console.log(date);


//get date
console.log(`Date: ${date.getDate()}`);
console.log(`Day: ${date.getDay()}`);
console.log(`Month: ${date.getMonth()+1}`);
console.log(`FullYear:${date.getFullYear()}`);
console.log(`hour: ${date.getHours()}`);
console.log(`Minutes: ${date.getMinutes()}`);
console.log(`Seconds: ${date.getSeconds()}`);
console.log(`Milliseconds: ${date.getMilliseconds()}`);
console.log(`Year: ${date.getYear()}`);



//set date
date.setDate(25)
date.setMonth(5)
date.setFullYear(2020);
date.setHours(2)
date.setMinutes(30)
date.setSeconds(5);
console.log('Time and date change:',date);

//millisecond 
// 1min=60,000 milliseconds;
// 1hr=3600000 milliseconds
// 1day=86400000 milliseconds

//getyear -1900 

//
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const ds = new Date();
let day = weekday[ds.getDay()];

console.log(day);