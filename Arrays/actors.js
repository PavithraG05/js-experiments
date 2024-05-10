let famousActors = [
    { 
      memID: 101, 
      name: "Bob Brown", 
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"] 
    },
    { 
      memID: 142, 
      name: "Sallie Smith", 
      films: ["A Good Day", "A Better Day"] 
    },
    { 
      memID: 187, 
      name: "Fred Flanders", 
      films: ["Who is Fred?", "Where is Fred?", 
              "What is Fred?", "Why Fred?"]
    },
    { 
      memID: 203, 
      name: "Bobbie Boots", 
      films: ["Walking Boots", "Hiking Boots", 
              "Cowboy Boots"] 
    },
];

function actorID(actors)
{
    if(actors.memID === 187)
    {
        return true;
    }
    else{
        return false;
    }
}

function actorFilms(actors)
{
    if((actors.films).length >= 3)
    {
        return true;
    }
    else{
        return false;
    }
}

function actorName(actors)
{
    if((actors.name).includes("Bob"))
    {
        return true;
    }
    else{
        return false;
    }
}

function actorFilmNames(actors)
{
    let flag = 0;
    for(i in actors.films)
    {
        if((actors.films[i]).startsWith("A"))
        {
            flag = 1;
        }
    }
    if(flag === 1)
    {
        return true;
    }
    else{
        return false;
    }
}

let actorId = famousActors.findIndex(actorID);
let actorfilms = famousActors.filter(actorFilms);
let actorNames = famousActors.filter(actorName);
let actorfilmNames = famousActors.filter(actorFilmNames);

if(actorId!=-1){
    console.log(`Actor: ${famousActors[actorId].name}`);
}
else{
    console.log("Failed to find the actor");
}

if(actorfilms.length>0){

    let output = '';
    for(let i in actorfilms)
    {
        output += actorfilms[i].name + ",";
    }
    console.log(`actor in atleast 3 films: ${output}`);
}
else{
    console.log("Failed to find");
}

if(actorNames.length>0){

    let output = '';
    for(let i in actorNames)
    {
        output += actorNames[i].memID + ",";
    }
    console.log(`actor name starting with bob: ${output}`);
}
else{
    console.log("Failed to find");
}

if(actorfilmNames.length>0){

    let output = '';
    for(let i in actorfilmNames)
    {
        output += actorfilmNames[i].memID + ",";
    }
    console.log(`actor name starting with bob: ${output}`);
}
else{
    console.log("Failed to find");
}