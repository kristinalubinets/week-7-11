
// 'use strict';
// const user = {
//   id: 551,
//   name: 'Tom',
//   getId() {
//     return this.id;
//   },
//   credentials: {
//     id: 120,
//     username: 'tom',
//     getId() {
//       return this.id;
//     }
//   },
// };


// const getId = user.credentials.getId();    // 120
// console.log(getId);

// const getId = user.credentials.getId;    // TypeError: Cannot read property 'id' of undefined
// console.log(getId());

function hello() {
    //const self = this; // assign `this` to another variable
    setTimeout(function() {
      console.log(this.name);   //console.log(self.name); // -> `tom` will be logged.
    }, 100);
}
//hello.call({name: 'tom'});


// class Person {}
// class Employee extends Person {}
// class Developer extends Employee {}
// const tom = new Developer();

// console.log( Object.getPrototypeOf(tom))

// console.log( Object.getPrototypeOf(tom) === Developer.prototype ); // A //true
// console.log( Object.getPrototypeOf(tom) === Employee.prototype ); // B //false
// console.log( Developer.isPrototypeOf(tom) ); // C //false  --------------------------------------------------- why? 
// //On line C we are asking if the constructor function Developer appears anywhere in tom's prototype chain, and the answer is no. 
// //That's because we are asking if the constructor function itself is part of the chain, 

// console.log( Developer.prototype.isPrototypeOf(tom) ); // D  //true
// console.log( Employee.prototype.isPrototypeOf(tom) ); // E //true
// console.log( Person.prototype.isPrototypeOf(tom) ); // F  //true
// console.log( Object.prototype.isPrototypeOf(tom) ); // G  //true


/*********************************************************** Exercise (1) *******************************************************************************/

// before running the code in your browser, discuss the expected order of each loop
// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'
// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()
const greekGods = ['Aphrodite', 'Ares', 'Artemis', 'Athena', 'Poseidon', 'Zeus'];

const loop = greekGods.map( (el,index) => console.log(`${index}. ${el}`) );

greekGods.forEach( (el, index) => {
    
    if(index == 2) {
        setTimeout(function() {
            console.log(index + '. ' + el)
        }, 2000)
    }
    else 
        console.log(index + '. ' + el);
})


/*********************************************************** Exercise (2) *******************************************************************************/

//Using setTimeout, change the background color of the page after 5 seconds (5000 milliseconds).
//Update your code to make the color change every 5 seconds to something different. Hint: try searching for setInterval.