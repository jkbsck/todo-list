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
      wrapper.appendChild(titleDiv);

      let title = document.createElement("h3");
      title.textContent = toDos[i].title;
      titleDiv.appendChild(title);

      // due date
      let dateDiv = document.createElement("div");
      wrapper.appendChild(dateDiv);

      let date = document.createElement("h3");
      date.textContent = `Due date: ${toDos[i].dueDate.toDateString()}`;
      dateDiv.appendChild(date);

      // priority
      let priorityDiv = document.createElement("div");
      wrapper.appendChild(priorityDiv);

      let priority = document.createElement("h3");
      priority.textContent = `Priority: ${toDos[i].priority}`;
      priorityDiv.appendChild(priority);

      // project
      let projectDiv = document.createElement("div");
      wrapper.appendChild(projectDiv);

      let project = document.createElement("h3");
      project.textContent = `project: ${toDos[i].project}`;
      projectDiv.appendChild(project);
      
    };
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
