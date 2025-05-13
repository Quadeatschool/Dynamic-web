const PI = 3.14;
let area = 0;
// debugger;


function circleArea(radius) {
    area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("1starea", area);

area = circleArea(5);
console.log("2ndarea", area);