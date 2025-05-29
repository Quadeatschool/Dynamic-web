//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {

  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML =  stepsHtml.join(' ');// set the innerHTML

// Quade Hafen



let letterGrade = ['A', 'B', 'A'];

function calcgrade(grade) {
let points = 0;
if (grade === 'A'){
points = 4
}
if (grade ==='B'){
    points = 3
}
return points
}

const gpaPoints = letterGrade.map(calcgrade);

//Quade Hafen

const gpatotal = gpaPoints.reduce(function (score, array ){return score + array;});

// constgpatotal = gpaPoints.reduce((score,array)=> socre + array);

const gpa = gpatotal / gpaPoints.length;


//Quade Hafen


fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
shortNamefruits = fruits.filter(function (fruits){return fruits.length < 6;});

// shortNamefruits = furits.filter((fruits) => fruits.length < 6);

// Quade Hafen


numbers = [12, 34, 21, 54];
badnum = 21;
let baddy = numbers.indexOf(badnum);
//Quade Hafen

