// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
   

  sections:[
    {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'sis A'} 
],
    enrollStudent: function(sectionNum)
    {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        //If the section exists, then add 1 to
        //  enrolled, and then call the renderSections function to show our change.

        if (sectionIndex >= 0)
    {
        this.sections[sectionIndex].enrolled++;
        OutPut(this.sections);

    }
    },

    dropStudent: function(sectionNum) 
    {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum);
        if (sectionIndex >=0)
        {
            this.sections[sectionIndex].enrolled--;
            OutPut(this.sections);
        }
    },
    

};

function SetInfo(course)
{
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
    
};


function SectionDisplay(section)
{
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`
}

function OutPut(sections)
{
    const html = sections.map(SectionDisplay);
    document.querySelector("#sections").innerHTML = html.join(" ");
}



// Add two event listeners to your code. 
// One for the #enrollStudent button that will call out enrollStudent method, and another for the #dropStudent button.
//  The event handler function in each case should grab the contents of the #sectionNumber input and pass it into the appropriate function.

document.querySelector("#enrollStudent").addEventListener("click", function ()
{
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function()
{
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    aCourse.dropStudent(sectionNum);
});


SetInfo(aCourse);
OutPut(aCourse.sections);

