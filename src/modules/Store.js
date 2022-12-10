export default class Store {
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
