 "use strict"

//  //cameron examples
//  let text = 'this is a message';
//  console.log(text);

// console.info(text);

// console.warn(text);

// console.error(text);


// let aBoolean = true;
// let aNumber = 3.2;
// let aString = 'text';
// let aBigInt = 99999999999n;
// let aBrokenBigInt = 9999999999;
// let aNull = null;
// let anUndefined;

// console.log(aBigInt);
// console.log(aBrokenBigInt);
// console.log(anUndefined);
// console.log(typeof(anUndefined));
// console.log(aNull);
// console.log(typeof(aNull));


// //qa excercises
// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(totalLeftToPay);

// function sayHello(){
// return ('Someone says Hello')

// }
// console.log(sayHello);

// for(let i = 0; i<10; i++){
//     console.log('i='+i); 
// }

// // let a = false;

// // do {
// //     console.log(`i am batman!`);
// // } while(a);

// //Cameron switch e.g 
// let num = 4;

// switch(num) {
//     case 0:
//         console.log(`zero is zero`);
//         break;
//     case 1:
//         console.log(`we're at one`);
//     case 4:
//         console.log(`now it's four`);
//     case 10:
//         console.log(`we've made it to ten!`)
//         break;
// }
// //QA excercise 
// //1
// let a = 100;
// while (a <= 200) {
//   a++;
//   console.log(`a = ${a}`);

//   //2

// let a =100;
// while(a<=200) {
//     if(a%2==0) {
//         console.log("-");
//     }
//     else{
//         console.log("*");
//     }
// a++;
// }
// //3
// for (let k = 0; k < 10; k++) {
//     for (let l = 1; l <= 10; l++) {
//       console.log(l);
//     }
// }
// //4
// for (let a = 100; a <= 200; a++) {
//     console.log(`a = ${a}`);
// }

// for (let a = 100; a <= 200; a++) {
//     if (a % 2 == 0) {
//       console.log("-");
//     } else {
//       console.log("*");
//     }
//   }
// }
// //5

// let day = 0;
// switch(day){
//     case 1: 
//     console.log('monday');
// break;
//     case 2:
//     console.log('tuesday');
// break;
//     case 3:
//     console.log('wednesday');
//     break;

//     case 4:
//     console.log('thursday');
// break;
//     case 5:
//     console.log('friday');
// break;
//     case 6:
//     console.log('saturday');
// break;
//     case 7:
//     console.log('sunday');
//     break;
// }

//QA excercise 
// let strictA = true;
// let strictB = 1;

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);

console.log(strictA != strictB);
console.log(strictA !== strictB)

let age = 36;

if (age >=18 && age <=65) {
    console.log("good age");
}
    else if (age < 18) {
        console.log("too young");
    }
else {
console.log("too mature");
}
//conditionals truthy , failsey

let a = 2;
if (a==0) {
    console.log('sunshine');
}
else if(a !=2) {
    console.log('moonlight');
}
else {
    console.log('boogie');
}

//objects , arrays

let shoes = new Object();
    shoes['name'] = 'choos';
    shoes['type'] = 'heels';
    shoes['size'] = '6';
    console.log(shoes);
    console.log(shoes.type);

    shoes.colour ='black';
    console.log(shoes.colour);






