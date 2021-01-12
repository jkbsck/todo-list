import { DomToDos } from "./DomToDos.js";

const ToDo = (() => {

  const toDos = [];
  
  const projects = [];

  class ToDoItem {
    constructor(
      title = "New To Do Item", 
      description = "Description...",
      dueDate = _addDays(new Date(), 30),
      priority = "low",
      notes = "Notes...",
      checklist = [],
      completed = false,
      completedOn = false,
      project = false
    ){
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
      this.completed = completed;
      this.completedOn = completedOn;
      this.project = project;
      toDos.push(this);
    };
  };

  class ToDoProject {
    constructor(
      title = "New Project",
      description = "Description",
      toDoItems = [],
      completed = false,
      completedOn = false
    ){
      this.title = title;
      this.description = description;
      this.toDoItems = toDoItems;
      this.completed = completed;
      this.completedOn = completedOn;
      projects.push(this);
    };
  };

  // add given days to date object
  const _addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
  };

  return { ToDoItem, ToDoProject, toDos, projects };

})();

let todo1 = new ToDo.ToDoItem("Tide up", "Tide up my bedroom and kitchen.", new Date("2021-1-25"), "normal", "Use vacuum cleaner not just a broom.", [["kitchen", 1], ["bedroom", 0]], true, new Date("2021-1-5"));

let todo4 = new ToDo.ToDoItem("Buy a lamp", "Buy lamp at ikea.", new Date("2021-3-1"), "high", "Max price is 10$.");

let todo2 = new ToDo.ToDoItem("Buy a table", "Buy kitchen table at ikea.", new Date("2021-2-28"), "high", "Max price is 100$.");
let todo3 = new ToDo.ToDoItem("Learn programming", "Learn at least 5 programming languages.", new Date("2021-4-15"), "low", "3 languages on advanced level and 2 intermediate.", [["golang", 0], ["javascript", 1], ["ruby", 1], ["rust", 0], ["c#", 0]]);
// console.log(todo1);

let project1 = new ToDo.ToDoProject("House renovation", "Steb by step revonation of my house.", );
// console.log(project1);

let todos = ToDo.toDos;
let projects = ToDo.projects;
// console.log(projects[1]);
let project2 = new ToDo.ToDoProject("Learning", "Learning of various skills.");
// console.log(projects[1]);

todo4.project = project1;
todo2.project = project1;

for (let i = 1; i < 10; i++) {
	new ToDo.ToDoItem();
  // toodos.push(todo);
};

DomToDos.buildToDosByDate(todos);
// console.log("test");
