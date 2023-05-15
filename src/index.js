
function init() {
    const excersices = fetch(`http://localhost:3000/UpperBoddyBlast`)
        .then(response => console.log(response));
}

function changeInfoDisplay(excersice) {
    const upper = document.getElementById("upper");
    const exInfo = document.createElement("p");
    exInfo.textContent = excersice;
    upper.appendChild(newList)

}

function FullBoddyExercises(event) {
    event.preventDefault()
    const Type = event.target["search"].value
    findType(Type)
}

function findType(query) {
    return excersices.type.find(query);
}

document.addEventListener("DOMContentLoaded", init);