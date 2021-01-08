const DomToDosByDate = (() => {

  // build html for todos ordered by dueDate
  const _build = (toDos) => {
    console.log("domToDosByDate WORKS!");

    const content = document.querySelector(".content");

    for (let i = 0; i < toDos.length; i++) {

      let toDo = document.createElement("div");
      toDo.classList.add("todo-item");
      content.appendChild(toDo);

      let titleDiv = document.createElement("div");
      toDo.appendChild(titleDiv);

      let title = document.createElement("h3");
      title.textContent = toDos[i].title;
      titleDiv.appendChild(title);

      let dateDiv = document.createElement("div");
      toDo.appendChild(dateDiv);

      let date = document.createElement("h3");
      date.textContent = `Due date: ${toDos[i].dueDate.toDateString()}`;
      dateDiv.appendChild(date);

      let priorityDiv = document.createElement("div");
      toDo.appendChild(priorityDiv);

      let priority = document.createElement("h3");
      priority.textContent = `Priority: ${toDos[i].priority}`;
      priorityDiv.appendChild(priority);
      
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
