// DOM manipulation of To Do elements

const DomToDos = (() => {

  // order toDos by due date and removes completed todos
  const _orderToDos = (toDosWithoutOrder) => {
    return toDosWithoutOrder.slice().sort((a, b) => a.dueDate - b.dueDate).filter(toDo => toDo.completed === false);  
  };

  // create to do card from toDo object and append it to parent node
  const _buildToDoCard = (parent, toDo) => {

    // card container
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo-item");
    parent.appendChild(toDoDiv);

    // wrapper inside of card container
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    toDoDiv.appendChild(wrapper);

    // title
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    wrapper.appendChild(titleDiv);

    let title = document.createElement("span");
    title.textContent = toDo.title;
    titleDiv.appendChild(title);

    // due date
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date-div");
    wrapper.appendChild(dateDiv);

    let dateTitle = document.createElement("span");
    dateTitle.textContent = "Due date: ";
    dateDiv.appendChild(dateTitle);

    let date = document.createElement("span");
    date.textContent = toDo.dueDate.toDateString();
    dateDiv.appendChild(date);

    // priority
    let priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority-div");
    wrapper.appendChild(priorityDiv);

    let priorityTitle = document.createElement("span");
    priorityTitle.textContent = "Priority: ";
    priorityDiv.appendChild(priorityTitle);

    let priority = document.createElement("span");
    priority.textContent = toDo.priority;
    priorityDiv.appendChild(priority);

    // project
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    wrapper.appendChild(projectDiv);

    let projectTitle = document.createElement("span");
    projectTitle.textContent = "Project: ";
    projectDiv.appendChild(projectTitle);

    let project = document.createElement("span");
    project.textContent = toDo.project !== false ? toDo.project.title : "-";
    projectDiv.appendChild(project);

    // menu button
    let menuBtn = document.createElement("div");
    wrapper.appendChild(menuBtn);
    menuBtn.classList.add("menu-btn");

    let stickOne = document.createElement("div");
    menuBtn.appendChild(stickOne);

    let stickTwo = document.createElement("div");
    menuBtn.appendChild(stickTwo);

    // expand menu event listener
    menuBtn.addEventListener("click", _expandToDo);

  };

  // create last card as an add new card button
  const _buildAddToDoCard = (parent) => {

    // card container
    let toDo = document.createElement("div");
    toDo.classList.add("todo-item");
    parent.appendChild(toDo);

    // wrapper inside of card container
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper", "add-todo");
    toDo.appendChild(wrapper);

    let plus = document.createElement("span");
    wrapper.appendChild(plus);
    plus.textContent = "+";

    let add = document.createElement("span");
    add.classList.add("hidden");
    wrapper.appendChild(add);
    add.textContent = "Add";

    wrapper.addEventListener("mouseenter", () => {
      add.classList.remove("hidden");
    });

    wrapper.addEventListener("mouseleave", () => {
      add.classList.add("hidden");
    });

  };

  const _expandToDo = (event) => {

    let toDoDiv = event.currentTarget.parentElement.parentElement;

    // when expanded, takes two columns / rows in grid instead of one
    toDoDiv.style.gridColumn === "span 2" ? toDoDiv.style.gridColumn = "" : toDoDiv.style.gridColumn = "span 2";
    toDoDiv.style.gridRow === "span 2" ? toDoDiv.style.gridRow = "" : toDoDiv.style.gridRow = "span 2";

    // expanded content
    if (toDoDiv.children.length === 1){
      let expandedToDo = document.createElement("div");
      toDoDiv.appendChild(expandedToDo);
      expandedToDo.classList.add("expanded-todo");

      toDoDiv.children[0].classList.add("wrapper-expanded");
    } else {
      toDoDiv.children[1].remove();
      toDoDiv.children[0].classList.remove("wrapper-expanded");
    };
  };

  // build html for todos ordered by dueDate
  const buildToDosByDate = (toDosWithoutOrder) => {

    // order toDos by due date and removes completed todos
    const toDos = _orderToDos(toDosWithoutOrder);

    const contentContainer = document.querySelector(".content-container");
    const content = document.createElement("div");
    contentContainer.appendChild(content);
    content.classList.add("content");
    

    for (let i = 0; i < toDos.length; i++) {
      _buildToDoCard(content, toDos[i]);
    };

    _buildAddToDoCard(content);

  };

  return { buildToDosByDate };

})();

export { DomToDos };
