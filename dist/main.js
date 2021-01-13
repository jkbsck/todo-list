(()=>{"use strict";const e=(()=>{const e=(e,n)=>{let d=document.createElement("div");d.classList.add("todo-item"),e.appendChild(d);let l=document.createElement("div");l.classList.add("wrapper"),d.appendChild(l);let o=document.createElement("div");o.classList.add("title-div"),l.appendChild(o);let a=document.createElement("span");a.textContent=n.title,o.appendChild(a);let i=document.createElement("div");i.classList.add("date-div"),l.appendChild(i);let c=document.createElement("span");c.textContent=!1===n.completed?"Due date: ":"Completed on: ",i.appendChild(c);let r=document.createElement("span");!1===n.completed&&n.dueDate>new Date&&(r.textContent=n.dueDate.toDateString()),!1===n.completed&&n.dueDate<new Date&&(r.textContent=n.dueDate.toDateString(),r.style.color="red",l.style.borderColor="red",o.style.background="#ff000030"),!1!==n.completed&&(r.textContent=n.completedOn.toDateString(),r.style.color="green",l.style.borderColor="green",o.style.background="#00ff0030"),i.appendChild(r);let s=document.createElement("div");s.classList.add("priority-div"),l.appendChild(s);let p=document.createElement("span");p.textContent="Priority: ",s.appendChild(p);let m=document.createElement("span");m.textContent=n.priority,s.appendChild(m);let h=document.createElement("div");h.classList.add("project-div"),l.appendChild(h);let u=document.createElement("span");u.textContent="Project: ",h.appendChild(u);let C=document.createElement("span");C.textContent=!1!==n.project?n.project.title:"-",h.appendChild(C);let D=document.createElement("div");l.appendChild(D),D.classList.add("menu-btn");let E=document.createElement("div");D.appendChild(E);let v=document.createElement("div");D.appendChild(v),D.addEventListener("click",(e=>{t(e,n,D)}))},t=(e,t,n)=>{let d=e.currentTarget.parentElement.parentElement;if("span 2"===d.style.gridColumn?d.style.gridColumn="":d.style.gridColumn="span 2","span 2"===d.style.gridRow?d.style.gridRow="":d.style.gridRow="span 2",1===d.children.length){let e=document.createElement("div");d.appendChild(e),e.classList.add("expanded-todo"),d.children[0].classList.add("wrapper-expanded"),n.classList.toggle("menu-btn-expanded");let l=document.createElement("div");l.classList.add("complete-div"),e.appendChild(l);let o=document.createElement("div");l.appendChild(o),!0===t.completed&&(o.style.boxShadow="none");let a=document.createElement("span");o.appendChild(a),a.textContent="COMPLETE",o.addEventListener("click",(e=>{!1===t.completed?(t.completed=!0,t.completedOn=new Date,d.children[0].children[1].children[1].textContent=t.completedOn.toDateString(),d.children[0].children[1].children[0].textContent="Completed on: ",d.children[0].children[1].children[1].style.color="green",d.children[0].style.borderColor="green",o.style.boxShadow="none",d.children[0].children[0].style.background="#00ff0030"):t.dueDate<new Date?(t.completed=!1,t.completedOn=!1,d.children[0].children[1].children[1].textContent=t.dueDate.toDateString(),d.children[0].children[1].children[0].textContent="Due date: ",d.children[0].children[1].children[1].style.color="red",d.children[0].style.borderColor="red",o.style.boxShadow="#0d324d 2px 3px 4px",d.children[0].children[0].style.background="#ff000030"):(t.completed=!1,t.completedOn=!1,d.children[0].children[1].children[1].textContent=t.dueDate.toDateString(),d.children[0].children[1].children[0].textContent="Due date: ",d.children[0].children[1].children[1].style.color="inherit",d.children[0].style.borderColor="#0d324d",o.style.boxShadow="#0d324d 2px 3px 4px",d.children[0].children[0].style.background="none")}));let i=document.createElement("div");i.classList.add("description-div"),e.appendChild(i);let c=document.createElement("span");c.textContent="Description: ",i.appendChild(c);let r=document.createElement("span");r.textContent=t.description,i.appendChild(r);let s=document.createElement("div");s.classList.add("notes-div"),e.appendChild(s);let p=document.createElement("span");p.textContent="Notes: ",s.appendChild(p);let m=document.createElement("span");m.textContent=t.notes,s.appendChild(m);let h=document.createElement("div");h.classList.add("checklist-div"),e.appendChild(h);let u=document.createElement("span");u.textContent="Checklist: ",h.appendChild(u);let C=document.createElement("div");C.classList.add("checklist-wrapper"),h.appendChild(C),t.checklist.forEach((e=>{let t=document.createElement("div");C.appendChild(t);let n=document.createElement("div");t.appendChild(n),n.textContent=1==e[1]?"✓":"",n.addEventListener("click",(t=>{1==e[1]?(e[1]=0,n.textContent=""):(e[1]=1,n.textContent="✓")}));let d=document.createElement("div");t.appendChild(d),d.textContent=e[0]}))}else d.children[1].remove(),d.children[0].classList.remove("wrapper-expanded"),n.classList.toggle("menu-btn-expanded")};return{buildToDosByDate:t=>{const n=t,d=document.querySelector(".content-container"),l=document.createElement("div");d.appendChild(l),l.classList.add("content");for(let t=0;t<n.length;t++)e(l,n[t]);(e=>{let t=document.createElement("div");t.classList.add("todo-item"),e.appendChild(t);let n=document.createElement("div");n.classList.add("wrapper","add-todo"),t.appendChild(n);let d=document.createElement("span");n.appendChild(d),d.textContent="+";let l=document.createElement("span");l.classList.add("hidden"),n.appendChild(l),l.textContent="Add",n.addEventListener("mouseenter",(()=>{l.classList.remove("hidden")})),n.addEventListener("mouseleave",(()=>{l.classList.add("hidden")}))})(l)}}})(),t=(()=>{const e=[],t=[];return{ToDoItem:class{constructor(t="New To Do Item",n="Description...",d=((e,t)=>(e.setDate(e.getDate()+t),e))(new Date,30),l="low",o="Notes...",a=[],i=!1,c=!1,r=!1){this.title=t,this.description=n,this.dueDate=d,this.priority=l,this.notes=o,this.checklist=a,this.completed=i,this.completedOn=c,this.project=r,e.push(this)}},ToDoProject:class{constructor(e="New Project",n="Description",d=[],l=!1,o=!1){this.title=e,this.description=n,this.toDoItems=d,this.completed=l,this.completedOn=o,t.push(this)}},toDos:e,projects:t}})();new t.ToDoItem("Tide up","Tide up my bedroom and kitchen.",new Date("2021-1-25"),"normal","Use vacuum cleaner not just a broom.",[["kitchen",1],["bedroom",0]],!0,new Date("2021-1-5"));let n=new t.ToDoItem("Buy a lamp","Buy lamp at ikea.",new Date("2021-3-1"),"high","Max price is 10$."),d=new t.ToDoItem("Buy a table","Buy kitchen table at ikea.",new Date("2021-2-28"),"high","Max price is 100$."),l=(new t.ToDoItem("Learn programming","Learn at least 5 programming languages.",new Date("2021-4-15"),"low","3 languages on advanced level and 2 intermediate.",[["golang",0],["javascript",1],["ruby",1],["rust",0],["c#",0]]),new t.ToDoProject("House renovation","Steb by step revonation of my house.")),o=t.toDos;t.projects,new t.ToDoProject("Learning","Learning of various skills."),n.project=l,d.project=l;for(let e=1;e<10;e++)new t.ToDoItem;o[o.length-1].dueDate=new Date("2020-1-1"),e.buildToDosByDate(o)})();