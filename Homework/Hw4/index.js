const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const peopleList = document.getElementById("peopleList");

const people = JSON.parse(localStorage.getItem("people")) || [];
// let people = JSON.parse(localStorage.getItem("people"));
// if (!people) people = [];

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
  peopleList.innerHTML = " ";
  people.forEach((person) => {
    const personItem = document.createElement("div");
    personItem.textContent = `Name: ${person.name}, Age: ${person.age}`;
    peopleList.appendChild(personItem);
  });
}

displayPeople();

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("people");
});
