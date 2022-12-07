import "./style.css";
class UI {
  static displayTask() {
    const task = [
      {
        desc: "buy fruits",
        index: 1,
        completed: false,
      },
      {
        desc: "buy medicines",
        index: 2,
        completed: false,
      },
      {
        desc: "buy household",
        index: 3,
        completed: false,
      },
    ];

    task.forEach((works) => UI.addTasks(works));
  }

  static addTasks(works) {
    const list = document.querySelector(".list");
    let html = ` <li class="listItems">
    <input type="checkbox" name="select" id="" class="check" />
    <p class="title">${works.desc}</p>
    <i id="moreicon" class="fa-solid fa-ellipsis-vertical"></i>
  </li>`;
    list.insertAdjacentHTML("beforeend", html);
  }
}

//events
document.addEventListener("DOMContentLoaded", UI.displayTask());
