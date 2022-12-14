import ToDos from "./ToDos.js";

import todos from "./todo-list.js";

const todoList = new ToDos(todos);
let all = true;
let active = false;
let completed = false;

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  todoList.showToDos(all, active, completed);
  document.getElementById("mode").firstChild.style.border = "1px solid black";
});

document.getElementById("mode").addEventListener("click", () => {
  event.target.classList.toggle("active");
  if (event.target.textContent == "All.") {
    event.target.style.border = "1px solid black";
    event.target.nextSibling.style.border = "none";
    event.target.nextSibling.nextSibling.nextSibling.style.border = "none";
    all = true;
    active = false;
    completed = false;
    todoList.showToDos(all, active, completed);
  } else if (event.target.textContent == "Active.") {
    event.target.previousSibling.style.border = "none";
    event.target.style.border = "1px solid black";
    event.target.nextSibling.nextSibling.style.border = "none";
    all = false;
    active = true;
    completed = false;
    todoList.showToDos(all, active, completed);
  } else {
    event.target.previousSibling.previousSibling.previousSibling.style.border =
      "none";
    event.target.previousSibling.previousSibling.style.border = "none";
    event.target.style.border = "1px solid black";
    all = false;
    active = false;
    completed = true;
    todoList.showToDos(all, active, completed);
  }
});

document.getElementById("add_todo").addEventListener("click", () => {
  todoList.addItem(all, active, completed);
});

document.getElementById("todolist").addEventListener("click", (event) => {
  todoList.checkItem(event, all, active, completed);
});

document.getElementById("todolist").addEventListener("click", (event) => {
  todoList.deleteItem(event, all, active, completed);
});
