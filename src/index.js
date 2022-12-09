import "./style.css";

class toDoTask {
  constructor(desc, index, completed = false) {
    this.desc = desc;
    this.index = index;
    this.completed = completed;
  }
}

class UI {
  static displayTask() {
    // const task = [
    //   {
    //     desc: "buy fruits",
    //     index: 1,
    //     completed: false,
    //   },
    //
    // ];
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

class Store {
  static getTasksFromStore() {
    let tasks; //this will be array of objects
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    return tasks;
  }

  static addTasksToStore(task) {
    //task will be a object of class toDoTask
    const obj = Store.getTasksFromStore();

    obj.push(task);

    localStorage.setItem("tasks", JSON.stringify(obj));
  }
  static removeTaskFromStore(id) {
    const tasks = Store.getTasksFromStore();

    tasks.forEach((task) => {
      if (task.id === id) {
        tasks.splice(id, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

//events
document.addEventListener("DOMContentLoaded", () => {
  UI.displayTask();

  focus;

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
    });
  });
});

//add tasks from the input

document
  .querySelector(".taskInputContainer")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.querySelector(".taskInput").value;
    let task = new toDoTask(input, Store.getTasksFromStore().length + 1, false);

    // adding task to list
    UI.addTasksToList(task);

    //adding task in local storage
    Store.addTasksToStore(task);

    //clear field
    document.querySelector("#taskInput").value = "";
  });

//editing and removing tasks

// focus

// const taskInput = document.querySelectorAll(".taskDesc");

// taskInput.forEach((inputtask) => {
//   inputtask.addEventListener("focus", (e) => {
//     e.preventDefault();
//     const { id } = e.currentTarget.parentElement;
//     document.getElementById(id).style.backgroundColor =
//       "rgba(242, 255, 0, 0.973)";
//   });
// });

// //focus out
// taskInput.forEach((inputtask) => {
//   inputtask.addEventListener("focusout", (e) => {
//     e.preventDefault();
//     const { id } = e.currentTarget.parentElement;
//     document.getElementById(id).style.backgroundColor = "white";

//     const Storage1 = JSON.parse(localStorage.getItem("tasks")) || [];
//     Storage1[id - 1].desc = e.currentTarget.value;
//     localStorage.setItem("tasks", JSON.stringify(Storage1));
//   });
// });

//delete
const delBtn = document.querySelectorAll(".fa-trash-can");
delBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement.id - 1);
    UI.removeTask(e.target);
    // Store.removeTaskFromStore(e.currentTarget.parentElement.id - 1);
    let webobj = JSON.parse(localStorage.getItem("tasks"));
    webobj.splice(e.currentTarget.parentElement.id - 1, 1);
    localStorage.setItem("tasks", JSON.stringify(webobj));
  });
});
// remove task from UI

// UI.removeTask(e.target);
// Store.removeTaskFromStore(e.currentTarget.parentElement.id-1);

// Remove task from store

// inputtask.addEventListener("input", () => {
//   const Storage1 = JSON.parse(localStorage.getItem("tasks")) || [];
//   console.log(inputtask.value);
//   Storage1[index].item = inputtask.value;
//   localStorage.setItem("tasks", JSON.stringify(Storage1));
// });
