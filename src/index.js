const ToDo = (() => {

  class ToDoItem {
    constructor(
      title = "New To Do Item", 
      description = "Description",
      dueDate = _addDays(new Date(), 30),
      priority = "low",
      notes = "Notes",
      checklist = []
    ){
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
    };
  };

  class ToDoProject {
    constructor(
      title = "New Project",
      description = "Description",
      toDoItems = []
    ){
      this.title = title;
      this.description = description;
      this.toDoItems = toDoItems;
    };
  };

  // add given days to date object
  const _addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
  };

  return { ToDoItem, ToDoProject };

})();

let todo1 = new ToDo.ToDoItem();
console.log(todo1);

let project1 = new ToDo.ToDoProject();
console.log(project1);
