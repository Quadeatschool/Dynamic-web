// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",

  sections:[
    {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    {sectionNum: 2, rromNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'sis A'} 
],
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
    <<td>${section.instructor}</td>
    </tr>`
}

function OutPut(sections)
{
    const html = sections.map(SectionDisplay);
    document.querySelector("#sections").innerHTML = html.join(" ");
}

OutPut(aCourse.sections);
SetInfo(sCourse);
