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

// initial seed
if (localStorage.getItem("toDos") === null) {

  new ToDo.ToDoItem("Tide up", "Tide up my bedroom and kitchen.", new Date("2021-1-25"), "normal", "Use vacuum cleaner not just a broom.", [["kitchen", 1], ["bedroom", 0]], true, new Date("2021-1-5"));

  new ToDo.ToDoItem("Buy a lamp", "Buy lamp at ikea.", new Date("2021-3-1"), "high", "Max price is 10$.");

  new ToDo.ToDoItem("Buy a table", "Buy kitchen table at ikea.", new Date("2021-1-15"), "high", "Max price is 100$.");
  new ToDo.ToDoItem("Learn programming", "Learn at least 5 programming languages.", new Date("2021-4-15"), "low", "3 languages on advanced level and 2 intermediate.", [["golang", 0], ["javascript", 1], ["ruby", 1], ["rust", 0], ["c#", 0]]);

  new ToDo.ToDoProject("House renovation", "Step by step renovation of my house.");
  ToDo.projects[0].toDoItems.push(ToDo.toDos[2]);
  ToDo.projects[0].toDoItems.push(ToDo.toDos[1]);

  new ToDo.ToDoProject("Learning", "Learning of various skills.");
  ToDo.projects[1].toDoItems.push(ToDo.toDos[3]);

  ToDo.toDos[3].project = ToDo.projects[1];
  ToDo.toDos[1].project = ToDo.projects[0];
  ToDo.toDos[2].project = ToDo.projects[0];

// data from local storage - todos and projects stores references of each other (TypeError: cyclic object value when parsing to/from JSON), therefore this "ugly" solution
} else {

  JSON.parse(localStorage.getItem("toDos")).forEach(todo => {
    
    let toDoParsed = JSON.parse(todo);

    toDoParsed.dueDate = new Date(toDoParsed.dueDate);
    toDoParsed.completedOn = new Date(toDoParsed.completedOn);
    
    ToDo.toDos.push(toDoParsed);
    
  });

  JSON.parse(localStorage.getItem("projects")).forEach(project => {
    ToDo.projects.push(JSON.parse(project));

    let projectParsed = JSON.parse(project);

    ToDo.toDos.forEach(todo => {
      if (todo.project === projectParsed.title) {
        todo.project = projectParsed;
      };

      if (projectParsed.toDoItems.includes(todo.title)) {

        projectParsed.toDoItems[projectParsed.toDoItems.indexOf(todo.title)] = todo;

        ToDo.projects.forEach(prjct => {
          if (prjct.title === projectParsed.title) {
            prjct.toDoItems = projectParsed.toDoItems;
          };
        });
      };
    });
  });

  console.log(ToDo.toDos);
  console.log(ToDo.projects);

};

// start
DomToDos.start(ToDo.toDos, ToDo.projects, new ToDo.ToDoItem("blank"), new ToDo.ToDoProject("blank"));
