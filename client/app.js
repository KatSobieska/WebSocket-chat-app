const socket = io();
socket.on("message", ({ author, content }) => addMessage(author, content));

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

const sendMessage = (e) => {
  e.preventDefault();
  if (messageContentInput.value !== "") {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = "";
  } else {
    alert("This field cannot be empty!");
  }
};

function addMessage(author, content) {
  const message = document.createElement("li");
  message.classList.toggle("message");
  message.classList.toggle("message--received");
  if (author === userName) message.classList.toggle("message--self");
  message.innerHTML = `
      <h3 class="message__author">${userName === author ? "You" : author}</h3>
      <div class="message__content">
        ${content}
      </div>
    `;
  messagesList.appendChild(message);
}

loginForm.addEventListener("submit", (e) => login(e));
addMessageForm.addEventListener("submit", (e) => sendMessage(e));
