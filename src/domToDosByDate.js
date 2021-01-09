const DomToDosByDate = (() => {

  // build html for todos ordered by dueDate
  const _build = (toDos) => {

    const content = document.querySelector(".content");

    for (let i = 0; i < toDos.length; i++) {

      // card container
      let toDo = document.createElement("div");
      toDo.classList.add("todo-item", "col-6", "col-md-4", "col-xl-3");
      content.appendChild(toDo);

      // wrapper inside of card container
      let wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      toDo.appendChild(wrapper);

      // title
      let titleDiv = document.createElement("div");
      titleDiv.classList.add("title-div");
      wrapper.appendChild(titleDiv);

      let title = document.createElement("span");
      title.textContent = toDos[i].title;
      titleDiv.appendChild(title);

      // due date
      let dateDiv = document.createElement("div");
      dateDiv.classList.add("date-div");
      wrapper.appendChild(dateDiv);

      let dateTitle = document.createElement("span");
      dateTitle.textContent = "Due date: ";
      dateDiv.appendChild(dateTitle);

      let date = document.createElement("span");
      date.textContent = toDos[i].dueDate.toDateString();
      dateDiv.appendChild(date);

      // priority
      let priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priority-div");
      wrapper.appendChild(priorityDiv);

      let priorityTitle = document.createElement("span");
      priorityTitle.textContent = "Priority: ";
      priorityDiv.appendChild(priorityTitle);

      let priority = document.createElement("span");
      priority.textContent = toDos[i].priority;
      priorityDiv.appendChild(priority);

      // project
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("project-div");
      wrapper.appendChild(projectDiv);

      let projectTitle = document.createElement("span");
      projectTitle.textContent = "Project: ";
      projectDiv.appendChild(projectTitle);

      let project = document.createElement("span");
      project.textContent = toDos[i].project !== false ? toDos[i].project.title : "-";
      projectDiv.appendChild(project);
      
    };

    // create last card as a new card button
    // card container
    let toDo = document.createElement("div");
    toDo.classList.add("todo-item", "col-6", "col-md-4", "col-xl-3");
    content.appendChild(toDo);

    // wrapper inside of card container
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    toDo.appendChild(wrapper);
    wrapper.textContent = "+";

  };

  // order toDos by due date and removes completed todos
  const _orderToDos = (toDosWithoutOrder) => {
    return toDosWithoutOrder.slice().sort((a, b) => a.dueDate - b.dueDate).filter(toDo => toDo.completed === false);  
  };

  const buildToDosByDate = (toDosWithoutOrder) => {
    // order toDos by due date and removes completed todos
    const toDos = _orderToDos(toDosWithoutOrder);

    _build(toDos);
  };

  return { buildToDosByDate }

})();

export { DomToDosByDate };
