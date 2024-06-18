// local reviews data

const reviews = [
  {
    id: 1,
    fullName: "susan smith",
    job: "web developer",
    img: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    fullName: "ana johnson",
    job: "web designer",
    img: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png",
    text: "Ipsa expedita temporibus quia et doloremque eum quasi quis nobis.",
  },
  {
    id: 3,
    fullName: "peter jones",
    job: "sde intern",
    img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    text: "Praesentium iusto voluptatum saepe",
  },
  {
    id: 4,
    fullName: "bill anderson",
    job: "CEO",
    img: "https://www.creativefabrica.com/wp-content/uploads/2023/06/29/Profile-Photo-Professional-Business-Man-In-Suit-73311054-1-1.png",
    text: "Praesentium iusto voluptatum saepe",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randBtn = document.querySelector(".rand-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.fullName;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
  console.log(currentItem);
});
