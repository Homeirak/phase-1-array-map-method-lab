//Example:
// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

//The map method iterates through each element of the array called 'robots'.
//It passes each element in the array (in this case each object in the array) into a function.
// The function creates a new object using the Object.assign() method
// const activatedRobots = robots.map((robot) => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });

// console.log(activatedRobots);


//  Result:
//  [
//    { name: 'Johnny 5', modes: 10, isActivated: true },
//    { name: 'C3PO', modes: 6, isActivated: true },
//    { name: 'Sonny', modes: 5, isActivated: true },
//    { name: 'Baymax', modes: 3, isActivated: true }
//  ]

 const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//In the .map() method, JavaScript automatically passes each element of the array to the callback function as an argument. The parameter inside the callback function (like book, item, or element) is simply a placeholder that refers to each element of the array as .map() iterates over it.

//function titleCase gets no parameter
//we map through the tutorial array and use the split method to split each array up into words and store the new arrays in a variable called 'words'
//we then map through the new 'words' array, apply the toUpperCAse method to the first character, slice the rest of the word, and join the capitalized character with the unchanged rest of the sliced string
//
const titleCased = () => {
  return(tutorials.map(string => {
    let words = string.split(" ");
    words = words.map(casedWords => casedWords.charAt(0).toUpperCase() + casedWords.slice(1));
    words = words.join(" ");
    return words;
  }));
};

console.log(titleCased());
