const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


const aimage = document.createElement("img");
aimage.setAttribute("src", "5stages.png");
aimage.setAttribute("alt", "a screenshot");
document.body.appendChild(aimage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const sec3 = document.createElement("section");
sec3.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(sec3);