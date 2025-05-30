

function Getgrades(inputSelector)
{
    const input = document.querySelector(inputSelector).value;

    const gradeArray = input.split(',');

    const gradeUpper = gradeArray.map(grade => grade.trim().toUpperCase());
    console.log(gradeUpper)

    return gradeUpper;

}

function lookupGrade(grade)
{
    switch (grade)
    {
        case "A": return 4.0;
        case "B": return 3.0;
        case "C": return 2.0;
        case "D": return 1.0;
        case "E": return 0.0;
        default: return null;
    }
}

function CalcGPA(grades)
{
    const gradePoints = grades.map((score) => lookupGrade(score));

    const gpa = gradePoints.reduce((total, number) => total + number) / gradePoints;

    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const outPutElement = document.querySelector(selector);
  outPutElement.innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
    
  // get the grades entered into the input
  const gradesEntered = Getgrades("#grades");
  // calculate the gpa from the grades entered
  const mygpa = CalcGPA(gradesEntered);
  // display the gpa

  outputGpa(mygpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click",clickHandler)

//Quade Hafen