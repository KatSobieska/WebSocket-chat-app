const loginForm = document.getElementById("welcome-form");
const messageSection = document.getElementById("messages-section");
const messagesList = document.getElementById("messages-list");
const addMessageForm = document.getElementById("add-messages-form");
const userNameInput = document.getElementById("username");
const messageContentInput = document.getElementById("message-content");

let userName = "";

const login = (e) => {
  e.preventDefault();
  if (userNameInput.value !== "") {
    userName = userNameInput.value;
    loginForm.classList.toggle("show");
    messageSection.classList.toggle("show");
  } else {
    alert("This field cannot be empty!");
  }
};

loginForm.addEventListener("submit", (e) => login(e));
