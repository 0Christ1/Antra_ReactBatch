const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

// const people = JSON.parse(localStorage.getItem("people")) || [];
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPerson = {
    name: nameInput.value,
    age: ageInput.value,
  };

  people.push(newPerson);
  localStorage.setItem("person", JSON.stringify(newPerson));
  displayPeople();
  personForm.reset();
});

function displayPeople() {
  peopleList.innerHTML = "";
  people.forEach((person) => {});
}
