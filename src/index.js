import "./style.css";
// import { toDoTask } from "./modules/todo.js";

import Store from "./modules/Store.js";
import toDoTask from "./modules/todo.js";
import { check } from "./modules/check.js";

//start ui class

class UI {
  static displayTask() {
    const Alltasks = Store.getTasksFromStore();

    Alltasks.forEach((individualTask) => UI.addTasksToList(individualTask));
  }

  static addTasksToList(individualTask) {
    const list = document.querySelector(".list");
    let html = ` <li class="listItems" id="${individualTask.index}">
    <input type="checkbox" name="select" id="" class="check" />
    <input type="text" class="taskInput taskDesc" value="${individualTask.desc}" />
    <i id="moreicon" class="fa-solid fa-trash-can"></i>

  </li>`;
    list.insertAdjacentHTML("beforeend", html);
  }

  static removeTask(element) {
    if (element.classList.contains("fa-trash-can")) {
      element.parentElement.remove();
    }
  }
}
// end ui class

//events
document.addEventListener("DOMContentLoaded", UI.displayTask());

// add tasks from the input

document
  .querySelector(".taskInputContainer")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    // window.location.reload();
    let input = document.querySelector(".taskInput").value;
    let task = new toDoTask(input, Store.getTasksFromStore().length + 1, false);

    // adding task to list
    UI.addTasksToList(task);

    //adding task in local storage
    Store.addTasksToStore(task);

    //clear field
    document.querySelector("#taskInput").value = "";
    document.querySelector("#taskInput").focus();
    window.location.reload();
  });

//editing

//focus

const taskInput = document.querySelectorAll(".taskDesc");

taskInput.forEach((inputtask) => {
  inputtask.addEventListener("focus", (e) => {
    e.preventDefault();
    const { id } = e.currentTarget.parentElement;
    document.getElementById(id).style.backgroundColor =
      "rgba(242, 255, 0, 0.973)";
  });
});

//focus out
taskInput.forEach((inputtask) => {
  inputtask.addEventListener("focusout", (e) => {
    e.preventDefault();
    const { id } = e.currentTarget.parentElement;
    document.getElementById(id).style.backgroundColor = "white";

    const Storage1 = JSON.parse(localStorage.getItem("tasks")) || [];
    Storage1[id - 1].desc = e.currentTarget.value;
    localStorage.setItem("tasks", JSON.stringify(Storage1));
    // window.location.reload();
  });
});

//delete
const delBtn = document.querySelectorAll(".fa-trash-can");
delBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    UI.removeTask(e.target);
    // Store.removeTaskFromStore(e.currentTarget.parentElement.id - 1);
    let webobj = JSON.parse(localStorage.getItem("tasks"));
    let newid = 1;

    webobj.splice(e.currentTarget.parentElement.id - 1, 1);
    if (webobj.length > 0) {
      webobj.forEach((e) => {
        e.index = newid;
        newid += 1;
      });
    }
    localStorage.setItem("tasks", JSON.stringify(webobj));
    window.location.reload();
  });
});

check();

//checkbox

const clearBtn = document.getElementById("clearAll");

clearBtn.addEventListener("click", () => {
  const Storage3 = JSON.parse(localStorage.getItem("tasks")) || [];
  const notcompletedArr = Storage3.filter((chk) => chk.completed == false);

  localStorage.setItem("tasks", JSON.stringify(notcompletedArr));
  // window.location.reload();
  let Storage4 = JSON.parse(localStorage.getItem("tasks"));
  let newid = 1;

  if (Storage4.length > 0) {
    Storage4.forEach((e) => {
      e.index = newid;
      newid += 1;
    });
  }
  localStorage.setItem("tasks", JSON.stringify(Storage4));
  window.location.reload();
});
