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

    // due date / completed date
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date-div");
    wrapper.appendChild(dateDiv);

    let dateTitle = document.createElement("span");
    dateTitle.textContent = toDo.completed === false ? "Due date: " : "Completed on: ";
    dateDiv.appendChild(dateTitle);

    let date = document.createElement("span");

    // if todo isn't completed on text is red if completed green
    if (toDo.completed === false && toDo.dueDate > new Date() ) {
      date.textContent = toDo.dueDate.toDateString();
    };
    if (toDo.completed === false && toDo.dueDate < new Date() ) {
      date.textContent = toDo.dueDate.toDateString();
      date.style.color = "red";
      wrapper.style.borderColor = "red";
      titleDiv.style.background = "#ff000030";
    };
    if (toDo.completed !== false ) {
      date.textContent = toDo.completedOn.toDateString();
      date.style.color = "green";
      wrapper.style.borderColor = "green";
      titleDiv.style.background = "#00ff0030";
    };

    // date.textContent = toDo.dueDate.toDateString();
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
    menuBtn.addEventListener("click", (e) => {
      _expandToDo(e, toDo, menuBtn);
    });

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

  const _expandToDo = (event, toDo, menuBtn) => {

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

      // change style of menu btn
      menuBtn.classList.toggle("menu-btn-expanded");

      // create and fill elements inside expanded div

      // completed / pending
      let completeDiv = document.createElement("div");
      completeDiv.classList.add("complete-div");
      expandedToDo.appendChild(completeDiv);

      let completeBtn = document.createElement("div");
      completeDiv.appendChild(completeBtn);
      if (toDo.completed === true) {
        completeBtn.style.boxShadow = "none";
      };

      let completeTitle = document.createElement("span");
      completeBtn.appendChild(completeTitle);
      completeTitle.textContent = "COMPLETE";

      // adjust styles and content according to state of completion
      completeBtn.addEventListener("click", (e) => {
        if (toDo.completed === false) {
          toDo.completed = true;
          toDo.completedOn = new Date;
          toDoDiv.children[0].children[1].children[1].textContent = toDo.completedOn.toDateString();
          toDoDiv.children[0].children[1].children[0].textContent = "Completed on: ";
          toDoDiv.children[0].children[1].children[1].style.color = "green";
          toDoDiv.children[0].style.borderColor = "green";
          completeBtn.style.boxShadow = "none";
          toDoDiv.children[0].children[0].style.background = "#00ff0030";
        } else if (toDo.dueDate < new Date()) {
          toDo.completed = false;
          toDo.completedOn = false;
          toDoDiv.children[0].children[1].children[1].textContent = toDo.dueDate.toDateString();
          toDoDiv.children[0].children[1].children[0].textContent = "Due date: ";
          toDoDiv.children[0].children[1].children[1].style.color = "red";
          toDoDiv.children[0].style.borderColor = "red";
          completeBtn.style.boxShadow = "#0d324d 2px 3px 4px";
          toDoDiv.children[0].children[0].style.background = "#ff000030";
        } else {
          toDo.completed = false;
          toDo.completedOn = false;
          toDoDiv.children[0].children[1].children[1].textContent = toDo.dueDate.toDateString();
          toDoDiv.children[0].children[1].children[0].textContent = "Due date: ";
          toDoDiv.children[0].children[1].children[1].style.color = "inherit";
          toDoDiv.children[0].style.borderColor = "#0d324d";
          completeBtn.style.boxShadow = "#0d324d 2px 3px 4px";
          toDoDiv.children[0].children[0].style.background = "none";
        };
      });

      // description
      let descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description-div");
      expandedToDo.appendChild(descriptionDiv);

      let descriptionTitle = document.createElement("span");
      descriptionTitle.textContent = "Description: ";
      descriptionDiv.appendChild(descriptionTitle);

      let description = document.createElement("span");
      description.textContent = toDo.description;
      descriptionDiv.appendChild(description);

      // notes
      let notesDiv = document.createElement("div");
      notesDiv.classList.add("notes-div");
      expandedToDo.appendChild(notesDiv);

      let notesTitle = document.createElement("span");
      notesTitle.textContent = "Notes: ";
      notesDiv.appendChild(notesTitle);

      let notes = document.createElement("span");
      notes.textContent = toDo.notes;
      notesDiv.appendChild(notes);

      // checklist
      let checkListDiv = document.createElement("div");
      checkListDiv.classList.add("checklist-div");
      expandedToDo.appendChild(checkListDiv);

      let checkListTitle = document.createElement("span");
      checkListTitle.textContent = "Checklist: ";
      checkListDiv.appendChild(checkListTitle);

      let checkListWrapper = document.createElement("div");
      checkListWrapper.classList.add("checklist-wrapper");
      checkListDiv.appendChild(checkListWrapper);

      // each check item + event listeners
      toDo.checklist.forEach(element => {
        let checkBoxWrapper = document.createElement("div");
        checkListWrapper.appendChild(checkBoxWrapper);

        let checkBox = document.createElement("div");
        checkBoxWrapper.appendChild(checkBox);
        checkBox.textContent = element[1] == 1 ? "✓" : "";
        checkBox.addEventListener("click", (e) => {
          if (element[1] == 1) {
            element[1] = 0;
            checkBox.textContent = "";
          } else {
            element[1] = 1;
            checkBox.textContent = "✓";
          };
        });

        let checkBoxTitle = document.createElement("div");
        checkBoxWrapper.appendChild(checkBoxTitle);
        checkBoxTitle.textContent = element[0];
      });
      
    } else {
      toDoDiv.children[1].remove();
      toDoDiv.children[0].classList.remove("wrapper-expanded");

      // change style of menu btn
      menuBtn.classList.toggle("menu-btn-expanded");
    };
  };

  // build html for todos ordered by dueDate
  const buildToDosByDate = (toDosWithoutOrder) => {

    // order toDos by due date and removes completed todos
    // const toDos = _orderToDos(toDosWithoutOrder);
    const toDos = toDosWithoutOrder;

    const contentContainer = document.querySelector(".content-container");
    const content = document.createElement("div");
    contentContainer.appendChild(content);
    content.classList.add("content");
    

    for (let i = 0; i < toDos.length; i++) {
      _buildToDoCard(content, toDos[i]);
    };

    _buildAddToDoCard(content);

  };

  const newToDo = (toDos) => {

    const contentContainer = document.querySelector(".content-container");
    const newToDoWrapper = document.createElement("div");
    contentContainer.appendChild(newToDoWrapper);
    newToDoWrapper.classList.add("new-todo-wrapper");
    
    let wrapperOne = document.createElement("div");
    newToDoWrapper.appendChild(wrapperOne);
    wrapperOne.classList.add("wrapper-one");

    let wrapperTwo = document.createElement("div");
    newToDoWrapper.appendChild(wrapperTwo);
    wrapperTwo.classList.add("wrapper-two");

    // first form div content
    // title
    let titleWrapper = document.createElement("div");
    wrapperOne.appendChild(titleWrapper);
    titleWrapper.classList.add("title-wrapper");

    let titleLabel = document.createElement("span");
    titleWrapper.appendChild(titleLabel);
    titleLabel.textContent = "Title: ";

    let title = document.createElement("input");
    titleWrapper.appendChild(title);
    title.type = "text";
    title.value = "To Do";

    // description
    let descriptionWrapper = document.createElement("div");
    wrapperOne.appendChild(descriptionWrapper);
    descriptionWrapper.classList.add("description-wrapper");

    let descriptionLabel = document.createElement("span");
    descriptionWrapper.appendChild(descriptionLabel);
    descriptionLabel.textContent = "Description: ";

    let description = document.createElement("input");
    descriptionWrapper.appendChild(description);
    description.type = "text";
    description.value = "Description";

    // dueDate
    let dueDateWrapper = document.createElement("div");
    wrapperOne.appendChild(dueDateWrapper);
    dueDateWrapper.classList.add("due-date-wrapper");

    let dueDateLabel = document.createElement("span");
    dueDateWrapper.appendChild(dueDateLabel);
    dueDateLabel.textContent = "Due date: ";

    let dueDate = document.createElement("input");
    dueDateWrapper.appendChild(dueDate);
    dueDate.type = "date";
    dueDate.valueAsDate = new Date();

    // priority
    let priorityWrapper = document.createElement("div");
    wrapperOne.appendChild(priorityWrapper);
    priorityWrapper.classList.add("priority-wrapper");

    let priorityLabel = document.createElement("span");
    priorityWrapper.appendChild(priorityLabel);
    priorityLabel.textContent = "Priority: ";

    let priority = document.createElement("form");
    priorityWrapper.appendChild(priority);

    // low
    let lowLabel = document.createElement("span");
    priority.appendChild(lowLabel);
    lowLabel.textContent = "Low";

    let low = document.createElement("input");
    priority.appendChild(low);
    low.type = "radio";
    low.name = "priority";
    low.id = "low";
    low.checked = true;

    // normal
    let normalLabel = document.createElement("span");
    priority.appendChild(normalLabel);
    normalLabel.textContent = "Normal";

    let normal = document.createElement("input");
    priority.appendChild(normal);
    normal.type = "radio";
    normal.name = "priority";
    normal.id = "normal";

    // high
    let highLabel = document.createElement("span");
    priority.appendChild(highLabel);
    highLabel.textContent = "High";

    let high = document.createElement("input");
    priority.appendChild(high);
    high.type = "radio";
    high.name = "priority";
    high.id = "high";

    // submit button
    let submitBtnWrapper = document.createElement("div");
    newToDoWrapper.appendChild(submitBtnWrapper);
    submitBtnWrapper.classList.add("submit-btn-wrapper");

    let submitBtn = document.createElement("div");
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.textContent = "Save";
    submitBtn.addEventListener("click", () => {
      // console.log(priority);
      alert(document.querySelector('input[name="priority"]:checked').id);
    });

  };

  return { buildToDosByDate, newToDo };

})();

export { DomToDos };
