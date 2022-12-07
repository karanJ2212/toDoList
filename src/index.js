//import "./style.css";
class UI {
  static displayTask() {
    const task = [
      {
        desc: "buy fruits",
        id: 1,
      },
      {
        desc: "buy medicines",
        id: 1,
      },
      {
        desc: "buy household",
        id: 1,
      },
    ];

    task.forEach((works) => UI.addTasks(works));
  }

  static addTasks(works) {
    const list = document.querySelector(".list");
    let html = ` <li class="listItems">
    <input type="checkbox" name="select" id="" />
    <p class="title">${works.desc}</p>
    <button class="button remove" id="${works.id}">Remove</button>
  </li>`;
    list.insertAdjacentHTML("beforeend", html);
  }
}

//events
document.addEventListener("DOMContentLoaded", UI.displayTask());
