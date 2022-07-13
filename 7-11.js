
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

/*const loop = greekGods.map( (el,index) => console.log(`${index}. ${el}`) );

greekGods.forEach( (el, index) => {
    
    if(index == 2) {
        setTimeout(function() {
            console.log(index + '. ' + el)
        }, 2000)
    }
    else 
        console.log(index + '. ' + el);
})
*/ 

/*********************************************************** Exercise (2) *******************************************************************************/

//Task 1
//Using setTimeout, change the background color of the page after 5 seconds (5000 milliseconds).

//Task 2
//Update your code to make the color change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen */


setTimeout( function() {
  document.body.style.backgroundColor = 'blue';
}, 5000)

setInterval( function() { 
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215);
}, 5000)


/*********************************************************** Exercise (3) *******************************************************************************/
/*----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
- On the form with id #add-movies, add a "submit" event listener
- When the button is clicked you need to:
    - Read all input field values and create a new movie object literal with title, director, type and haveWatched properties
    - Push the new object on the movies array 
    - Display the updated list of movies on your page

TIP: Use the functions you created on tasks 1-3
================*/

const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// Task 1: create showMovies function
const allMovies = document.getElementById('all-movies');
setTimeout(showMovies, 1000);

function showMovies() {
  movies.forEach( el => {
    const newP = document.createElement('p');
    const textP = document.createTextNode(el.title + ' by_ ' + el.director);
    newP.appendChild(textP);    
    allMovies.appendChild(newP);
  });
}

const moviesNumber = document.getElementById('movies-number').innerText = movies.length;

// Task 2: create a new movie object for your favorite movie
const myFavMovie = {
    title: "OnePunchMan",
    director: "some otaku",
    type: "action",
    haveWatched: true,
}

// Task 2-3: create addMovies function
function addMovie(movie, callback) {
  movies.push(myFavMovie);
  document.body.style.backgroundColor = 'red';
}

setTimeout(addMovie(), 2000);    //new obj is added only if 'addMovie()', if 'addMvie' - doesn't add(but changes bg color)

// Task 4 - **Extra**