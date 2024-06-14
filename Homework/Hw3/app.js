// What is DOM? Document Object Model
// 1. use it to manipulate content, style and structure
// 2. is one of the most unique and useful tools of javaScript

// Selectors: 0 - 12:00

// GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName()
// const listItem1 = document.getElementsByClassName('list-item');
// console.log(listItem1);

//getElementsByTagName()
// const listItem2 = document.getElementsByTagName('li');
// console.log(listItem2);

//querySelector()
// const container = document.querySelector('div');
// console.log(container);

//querySelectorAll()
// const containerAll = document.querySelectorAll('div');
// console.log(containerAll);

// EventListeners: 37:00 - 1:10:00

// element.addEventListener("click", function)
// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn() {
//   alert('I also love JS!');
// }
// buttonTwo.addEventListener('click', alertBtn);

// Mouseover
// const newBackgroundColor = document.querySelector('.box-3');
// function changeBgColor() {
//   newBackgroundColor.style.backgroundColor = 'blue';
// }
// newBackgroundColor.addEventListener('mouseover', changeBgColor);

// Reveal Event
// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('hidden-content');

// function revealContent() {
//   if (hiddenContent.classList.contains('reveal-btn')) {
//     hiddenContent.classList.remove('reveal-btn');
//   } else {
//     hiddenContent.classList.add('reveal-btn');
//   }
// }

// revealBtn.addEventListener('click', revealContent);

// Event Probagation
// 1. event capturing: Document -> HTML -> Body -> Div -> Button
// 2. target
// 3. event bubbling: Button -> Div -> Body -> HTML -> Document

// window.addEventListener(
//   'click',
//   function () {
//     console.log('Window');
//   },
//   true
// );

// document.addEventListener(
//   'click',
//   function () {
//     console.log('Document');
//   },
//   true
// );

// document.querySelector('.div2').addEventListener(
//   'click',
//   function (e) {
//     e.stopPropagation();
//     console.log('DIV 2');
//   },
//   true
// );

// document.querySelector('.div1').addEventListener(
//   'click',
//   function () {
//     console.log('DIV 1');
//   },
//   true
// );

// document.querySelector('button').addEventListener(
//   'click',
//   function (e) {
//     console.log((e.target.innerTex = 'clicked!'));
//   },
//   true
// );

// Event Delegation
// It allows users to append a SINGLE event listener to
// a parent element that adds it to all of its present
// AND future descendants that match a selector.

// document.querySelector('#football').addEventListener('click', function (e) {
//   console.log('football is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });

// document.querySelector('#basketball').addEventListener('click', function (e) {
//   console.log('basketball is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });

// document.querySelector('#boxing').addEventListener('click', function (e) {
//   console.log('boxing is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });

// document.querySelector('#tennis').addEventListener('click', function (e) {
//   console.log('tennis is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });

// document.querySelector('#golf').addEventListener('click', function (e) {
//   console.log('golf is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });

document.querySelector('#sports').addEventListener('click', function (e) {
  console.log(e.target.getAttribute('id') + ' is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
  }
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport);
