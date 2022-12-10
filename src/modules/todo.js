export default class toDoTask {
  constructor(desc, index, completed = false) {
    this.desc = desc;
    this.index = index;
    this.completed = completed;
  }
}
