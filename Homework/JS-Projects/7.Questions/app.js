// My try: only works for one question
// const questionBtn = document.querySelector(".question-btn");
// const question = document.querySelector(".question");

// questionBtn.addEventListener("click", () => {
//   question.classList.toggle("show-text");
// });

// Method1: traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// Method2: using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
