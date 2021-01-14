// DOM manipulation of To Do elements

const DomToDos = (() => {

  // order todos by provided argument
  const _sortToDos = (filtered) => {
    
    let toDos = [..._toDos];

    // sort by oldest first (dueDate not completedOn)
    if (filtered.includes("oldest")){
      toDos = toDos.slice().sort((a, b) => a.dueDate - b.dueDate);
    };

    // sort by newest first (dueDate not completedOn)
    if (filtered.includes("newest")){
      toDos = toDos.slice().sort((a, b) => b.dueDate - a.dueDate);
    };

    // filter
    if (filtered.includes("completed") && filtered.includes("incompleted") && filtered.includes("pending")) {
      ;
    } else if (filtered.includes("completed") && filtered.includes("incompleted")){
      toDos = toDos.slice().filter(toDo => toDo.completed === true || toDo.dueDate < new Date());
    } else if (filtered.includes("completed") && filtered.includes("pending")) {
      toDos = toDos.slice().filter(toDo => toDo.completed === true || toDo.dueDate > new Date());
    } else if (filtered.includes("incompleted") && filtered.includes("pending")) {
      toDos = toDos.slice().filter(toDo => toDo.completed === false);
    } else if (filtered.includes("completed")){
      toDos = toDos.slice().filter(toDo => toDo.completed === true);
    } else if (filtered.includes("incompleted")){
      toDos = toDos.slice().filter(toDo => toDo.dueDate < new Date());
    } else if (filtered.includes("pending")){
      toDos = toDos.slice().filter(toDo => toDo.completed === false && toDo.dueDate > new Date());
    };

    return toDos;
  };

  // create to do card from toDo object and append it to parent node
  const _buildToDoCard = (toDo) => {

    // card container
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo-item");
    _content.appendChild(toDoDiv);

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
  const _buildAddToDoCard = () => {

    // card container
    let toDo = document.createElement("div");
    toDo.classList.add("todo-item");
    _content.appendChild(toDo);

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

    // event listener for new todo form
    wrapper.addEventListener("click", () => {
      _newToDo();
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

  // add event listeners to navbar elements
  const _addEventListenersToNavbar = () => {
    let newTodo = document.querySelector(".new-todo");
    newTodo.addEventListener("click", () => {
      _newToDo();
    });

    let todos = document.querySelector(".todos");
    todos.addEventListener("click", () => {
      _buildToDos();
    });

    let newProject = document.querySelector(".new-project");
    newProject.addEventListener("click", () => {
      _newProject();
    });

    let projects = document.querySelector(".projects");
    projects.addEventListener("click", () => {
      _buildProjects();
    });
  };

  // create filter div and assign event listeners
  const _addFilterDiv = (filtered) => {

    // create filter
    let filterWrapper = document.createElement("div");
    _content.appendChild(filterWrapper);
    filterWrapper.classList.add("filter-wrapper");

    let filterTitle = document.createElement("div");
    filterWrapper.appendChild(filterTitle);
    filterTitle.classList.add("filter-title");
    filterTitle.textContent = "Filter:";

    // oldest first
    let sortByOldest = document.createElement("div");
    filterWrapper.appendChild(sortByOldest);
    sortByOldest.classList.add("oldest");
    sortByOldest.textContent = "Old first";

    if (filtered.includes("oldest")) {
      sortByOldest.classList.toggle("filtered");
    };

    sortByOldest.addEventListener("click", () => {
      sortByOldest.classList.toggle("filtered");

      if (filtered.includes("oldest")) { 
        let i = filtered.indexOf("oldest");
        filtered.splice(i, 1);
      } else {
        filtered.push("oldest");
      };

      // oldest and newest filter at the same time doesn't make sense
      if (filtered.includes("newest")) { 
        let i = filtered.indexOf("newest");
        filtered.splice(i, 1);
      }

      _buildToDos(filtered);
    });

    // newest first
    let sortByNewest = document.createElement("div");
    filterWrapper.appendChild(sortByNewest);
    sortByNewest.classList.add("newest");
    sortByNewest.textContent = "New first";

    if (filtered.includes("newest")) {
      sortByNewest.classList.toggle("filtered");
    };

    sortByNewest.addEventListener("click", () => {
      sortByNewest.classList.toggle("filtered");

      if (filtered.includes("newest")) { 
        let i = filtered.indexOf("newest");
        filtered.splice(i, 1);
      } else {
        filtered.push("newest");
      };

      // oldest and newest filter at the same time doesn't make sense
      if (filtered.includes("oldest")) { 
        let i = filtered.indexOf("oldest");
        filtered.splice(i, 1);
      }

      _buildToDos(filtered);

    });

    // completed only
    let sortByCompleted = document.createElement("div");
    filterWrapper.appendChild(sortByCompleted);
    sortByCompleted.classList.add("completed");
    sortByCompleted.textContent = "Completed";

    if (filtered.includes("completed")) {
      sortByCompleted.classList.toggle("filtered");
    };

    sortByCompleted.addEventListener("click", () => {
      sortByCompleted.classList.toggle("filtered");

      if (filtered.includes("completed")) { 
        let i = filtered.indexOf("completed");
        filtered.splice(i, 1);
      } else {
        filtered.push("completed");
      };

      _buildToDos(filtered);
    });

    // incompleted only
    let sortByIncompleted = document.createElement("div");
    filterWrapper.appendChild(sortByIncompleted);
    sortByIncompleted.classList.add("incompleted");
    sortByIncompleted.textContent = "Incompleted";

    if (filtered.includes("incompleted")) {
      sortByIncompleted.classList.toggle("filtered");
    };

    sortByIncompleted.addEventListener("click", () => {
      sortByIncompleted.classList.toggle("filtered");

      if (filtered.includes("incompleted")) { 
        let i = filtered.indexOf("incompleted");
        filtered.splice(i, 1);
      } else {
        filtered.push("incompleted");
      };

      _buildToDos(filtered);
    });

    // pending only
    let sortByPending = document.createElement("div");
    filterWrapper.appendChild(sortByPending);

    sortByPending.textContent = "Pending";

    if (filtered.includes("pending")) {
      sortByPending.classList.toggle("filtered");
    };

    sortByPending.addEventListener("click", () => {
      sortByPending.classList.toggle("filtered");

      if (filtered.includes("pending")) { 
        let i = filtered.indexOf("pending");
        filtered.splice(i, 1);
      } else {
        filtered.push("pending");
      };

      _buildToDos(filtered);
    });
  };

   // content container creation
   const _createContentContainer = () => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    const content = document.createElement("div");
    contentContainer.appendChild(content);
    content.classList.add("content");

    return content;
  };

/////////////////////////////////////////////////////////////////////////////////////

  // original todos
  let _toDos = [];
  
  // original projects
  let _projects = [];

  // blank todo
  let _blankToDo = {};

  // blank todo
  let _blankProject = {};

  // variable for content container
  let _content;

  const start = (todos, projects, blankToDo, blankProject) => {

    todos.pop(); // detach blankToDo from todos array
    projects.pop(); // detach blankProject from projects array

    _toDos = todos;
    _projects = projects;
    _blankToDo = blankToDo;
    _blankProject = blankProject;

    // add event listeners to navbar elements
    _addEventListenersToNavbar();

    // build default todos list
    _buildToDos();

  };

  // build html for todos ordered by oldest showing only pending todos - blankToDo is for creation of new todos inside of this module, toDosWithoutOrder is a complete array of todos, toDos only filtered copy
  const _buildToDos = (filtered = ["oldest", "pending"]) => {

    // empties, creates and assign content container for all content (not navbar etc.)
    _content = _createContentContainer();

    // add elements with filter by selection
    _addFilterDiv(filtered);

    // sort todos by given filter params
    let toDos = _sortToDos(filtered);

    // creates todo cards
    for (let i = 0; i < toDos.length; i++) {
      _buildToDoCard(toDos[i]);
    };

    // card with "add todo button"
    _buildAddToDoCard();

  };

  // new todo form
  const _newToDo = () => {

    // keep copy of blank todo
    let toDo = { ..._blankToDo };

    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
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

    // project
    let projectWrapper = document.createElement("div");
    wrapperOne.appendChild(projectWrapper);
    projectWrapper.classList.add("project-wrapper");

    let projectLabel = document.createElement("span");
    projectWrapper.appendChild(projectLabel);
    projectLabel.textContent = "Project: ";

    let project = document.createElement("select");
    projectWrapper.appendChild(project);
    project.name = "project";

    // no project option
    let noProjectDiv = document.createElement("option");
    project.appendChild(noProjectDiv);
    noProjectDiv.value = "none";
    noProjectDiv.textContent = "none";

    _projects.forEach(element => {
      let elementDiv = document.createElement("option");
      project.appendChild(elementDiv);
      elementDiv.value = element.title;
      elementDiv.textContent = element.title;
    });

    // second form div content
    // notes
    let notesWrapper = document.createElement("div");
    wrapperTwo.appendChild(notesWrapper);
    notesWrapper.classList.add("notes-wrapper");

    let notesLabel = document.createElement("span");
    notesWrapper.appendChild(notesLabel);
    notesLabel.textContent = "Notes: ";

    let notes = document.createElement("input");
    notesWrapper.appendChild(notes);
    notes.type = "text";
    notes.value = "Notes";

    // checkList
    let checkListWrapper = document.createElement("div");
    wrapperTwo.appendChild(checkListWrapper);
    checkListWrapper.classList.add("check-list-wrapper");

    let checkListLabel = document.createElement("span");
    checkListWrapper.appendChild(checkListLabel);
    checkListLabel.textContent = "Checklist: ";

    // add button for checklist items
    let addCheckListItem = document.createElement("div");
    checkListWrapper.appendChild(addCheckListItem);
    addCheckListItem.textContent = "+";
    let checkListArray = []; // checklist array

    addCheckListItem.addEventListener("click", () => {

      let checkListItem = document.createElement("div");
      checkListWrapper.insertBefore(checkListItem, addCheckListItem);

      let checkBoxTitle = document.createElement("input");
      checkListItem.appendChild(checkBoxTitle);
      checkBoxTitle.type = "text";

      let checkBox = document.createElement("input");
      checkListItem.appendChild(checkBox);
      checkBox.type = "checkbox";

      // inserts every checklist item into checklist array
      checkListArray.push([checkBoxTitle.value, checkBox.value]);

    });

    // submit button
    let submitBtnWrapper = document.createElement("div");
    newToDoWrapper.appendChild(submitBtnWrapper);
    submitBtnWrapper.classList.add("submit-btn-wrapper");

    let submitBtn = document.createElement("div");
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.textContent = "Save";
    submitBtn.addEventListener("click", () => {

      toDo.title = title.value;
      toDo.description = description.value;
      toDo.dueDate = dueDate.valueAsDate;
      toDo.priority = document.querySelector('input[name="priority"]:checked').id;
      toDo.project = project.value === "none" ? false : _projects.filter( e => e.title === project.value )[0];
      toDo.notes = notes.value;
      for (let i = 0; i < checkListArray.length; i++) {
        toDo.checklist.push([checkListWrapper.children[i + 1].children[0].value, checkListWrapper.children[i + 1].children[1].checked ? 1 : 0]);
      }

      _toDos.push(toDo);

      _buildToDos();
    });

  };

  // build projects
  const _buildProjects = () => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
  };

  // new project form
  const _newProject = () => {

    // keep copy of a blank project
    let project = { ..._blankProject };

    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    const newProjectWrapper = document.createElement("div");
    contentContainer.appendChild(newProjectWrapper);
    newProjectWrapper.classList.add("new-project-wrapper");
    
    let wrapper = document.createElement("div");
    newProjectWrapper.appendChild(wrapper);
    wrapper.classList.add("wrapper");

    // title
    let titleWrapper = document.createElement("div");
    wrapper.appendChild(titleWrapper);
    titleWrapper.classList.add("title-wrapper");

    let titleLabel = document.createElement("span");
    titleWrapper.appendChild(titleLabel);
    titleLabel.textContent = "Title: ";

    let title = document.createElement("input");
    titleWrapper.appendChild(title);
    title.type = "text";
    title.value = "Project";

    // description
    let descriptionWrapper = document.createElement("div");
    wrapper.appendChild(descriptionWrapper);
    descriptionWrapper.classList.add("description-wrapper");

    let descriptionLabel = document.createElement("span");
    descriptionWrapper.appendChild(descriptionLabel);
    descriptionLabel.textContent = "Description: ";

    let description = document.createElement("input");
    descriptionWrapper.appendChild(description);
    description.type = "text";
    description.value = "Description";

    // to do items
    let toDoItemsWrapper = document.createElement("div");
    wrapper.appendChild(toDoItemsWrapper);
    toDoItemsWrapper.classList.add("to-do-items-wrapper");

    let toDoItemsLabel = document.createElement("span");
    toDoItemsWrapper.appendChild(toDoItemsLabel);
    toDoItemsLabel.textContent = "To Do items: ";

    let toDoItems = document.createElement("select");
    toDoItemsWrapper.appendChild(toDoItems);
    toDoItems.name = "to-do-items";
    toDoItems.multiple = true;

    _toDos.forEach(element => {
      let elementDiv = document.createElement("option");
      toDoItems.appendChild(elementDiv);
      elementDiv.value = element.title;
      elementDiv.textContent = element.title;
    });

    // submit button
    let submitBtnWrapper = document.createElement("div");
    newProjectWrapper.appendChild(submitBtnWrapper);
    submitBtnWrapper.classList.add("submit-btn-wrapper");

    let submitBtn = document.createElement("div");
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.textContent = "Save";
    submitBtn.addEventListener("click", () => {

      project.title = title.value;
      project.description = description.value;
      
      for (let i = 0; i < toDoItems.children.length; i++) {
        if (toDoItems.children[i].selected) {
          project.toDoItems.push(_toDos[i]);
        }
      };

      _projects.push(project);

      _buildProjects();
    });

  };

  return { start };

})();

export { DomToDos };
