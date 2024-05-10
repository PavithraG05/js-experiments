let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

function courseStart(courses)
{
    if(courses.CourseId === "PROG200")
    {
        return true;
    }
    else{
        return false;
    }
}

function courseTitle(courses)
{
    if(courses.CourseId === "PROJ500")
    {
        return true;
    }
    else{
        return false;
    }
}

function courseTitles(courses)
{
    if(Number(courses.Fee) <=  50)
    {
        return true;
    }
    else{
        return false;
    }
}

function courseClasses(courses)
{
    if(courses.Location === "Classroom 1")
    {
        return true;
    }
    else{
        return false;
    }
}

let courseIndex1 = courses.findIndex(courseStart);
let courseIndex2 = courses.findIndex(courseTitle);
let courseIndexArr = courses.filter(courseTitles);
let courseIndexArr2 = courses.filter(courseClasses);

if(courseIndex1!=-1){
    console.log(`PROG200 start date: ${courses[courseIndex1].StartDate}`);
}
else{
    console.log("Failed to find startdate for asked course");
}

if(courseIndex2!=-1){
    console.log(`PROG500 Title: ${courses[courseIndex2].Title}`);
}
else{
    console.log("Failed to find title for asked course");
}

if(courseIndexArr.length>0){

    let output = '';
    for(let i in courseIndexArr)
    {
        output += courseIndexArr[i].Title + ",";
    }
    console.log(`Titles that cost 50 and below: ${output}`);
}
else{
    console.log("Failed to find titles for asked cost");
}

if(courseIndexArr2.length>0){

    let output = '';
    for(let i in courseIndexArr2)
    {
        output += courseIndexArr2[i].Title + ",";
    }
    console.log(`Classes meet in Classroom1 : ${output}`);
}
else{
    console.log("Failed to find classes for asked classroom");
}
