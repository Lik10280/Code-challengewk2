document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault()
    displayAnimal();

    
});

//we fetch the data from the server here
function displayAnimal() {
    fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(getAllAnimals)
}




function getAllAnimals(animalArr) {
    animalArr.forEach(getAnimal)
}


function getAnimal(animal) {
  //sholuld diplay all animal names in its own span
    let animalName = document.createElement("span")
    animalName.innerText = animal.name
    let characterBar = document.querySelector("#character-bar")
    characterBar.append(animalName)
    //make the name clickable
    animalName.addEventListener("click", function () {
        getAnimalDetails(animal)
    }
    )
}

function getAnimalDetails(animal) {
 
    const animalContainer = document.getElementById("detailed-info");
    
    const animalDiv = document.createElement("div");
    
    animalDiv.className = "characterInfo";

    const animalName = document.getElementById("name");
    animalName.innerText = animal.name;

    const animalImage = document.getElementById("image");
    animalImage.src = animal.image;

  
    const animalVotes = document.getElementById("vote-count");
    animalVotes.innerText = animal.votes;




    
}