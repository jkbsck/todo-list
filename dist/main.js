(()=>{"use strict";const e=(()=>{const e=(e,t)=>{let n=document.createElement("div");n.classList.add("todo-item","col-6","col-md-4","col-xl-3"),e.appendChild(n);let d=document.createElement("div");d.classList.add("wrapper"),n.appendChild(d);let o=document.createElement("div");o.classList.add("title-div"),d.appendChild(o);let a=document.createElement("span");a.textContent=t.title,o.appendChild(a);let i=document.createElement("div");i.classList.add("date-div"),d.appendChild(i);let l=document.createElement("span");l.textContent="Due date: ",i.appendChild(l);let s=document.createElement("span");s.textContent=t.dueDate.toDateString(),i.appendChild(s);let c=document.createElement("div");c.classList.add("priority-div"),d.appendChild(c);let r=document.createElement("span");r.textContent="Priority: ",c.appendChild(r);let p=document.createElement("span");p.textContent=t.priority,c.appendChild(p);let m=document.createElement("div");m.classList.add("project-div"),d.appendChild(m);let u=document.createElement("span");u.textContent="Project: ",m.appendChild(u);let h=document.createElement("span");h.textContent=!1!==t.project?t.project.title:"-",m.appendChild(h);let D=document.createElement("div");d.appendChild(D),D.classList.add("menu-btn");let C=document.createElement("div");D.appendChild(C);let v=document.createElement("div");D.appendChild(v)};return{buildToDosByDate:t=>{const n=(e=>e.slice().sort(((e,t)=>e.dueDate-t.dueDate)).filter((e=>!1===e.completed)))(t),d=document.querySelector(".content");for(let t=0;t<n.length;t++)e(d,n[t]);(e=>{let t=document.createElement("div");t.classList.add("todo-item","col-6","col-md-4","col-xl-3"),e.appendChild(t);let n=document.createElement("div");n.classList.add("wrapper","add-todo"),t.appendChild(n);let d=document.createElement("span");n.appendChild(d),d.textContent="+";let o=document.createElement("span");o.classList.add("hidden"),n.appendChild(o),o.textContent="Add",n.addEventListener("mouseenter",(()=>{o.classList.remove("hidden")})),n.addEventListener("mouseleave",(()=>{o.classList.add("hidden")}))})(d)}}})(),t=(()=>{const e=[],t=[];return{ToDoItem:class{constructor(t="New To Do Item",n="Description...",d=((e,t)=>(e.setDate(e.getDate()+t),e))(new Date,30),o="low",a="Notes...",i=[],l=!1,s=!1,c=!1){this.title=t,this.description=n,this.dueDate=d,this.priority=o,this.notes=a,this.checklist=i,this.completed=l,this.completedOn=s,this.project=c,e.push(this)}},ToDoProject:class{constructor(e="New Project",n="Description",d=[],o=!1,a=!1){this.title=e,this.description=n,this.toDoItems=d,this.completed=o,this.completedOn=a,t.push(this)}},toDos:e,projects:t}})();new t.ToDoItem("Tide up","Tide up my bedroom and kitchen.",new Date("2021-1-25"),"normal","Use vacuum cleaner not just a broom.",[["kitchen",1],["bedroom",0]],!0,new Date("2021-1-5"));let n=new t.ToDoItem("Buy a lamp","Buy lamp at ikea.",new Date("2021-3-1"),"high","Max price is 10$."),d=new t.ToDoItem("Buy a table","Buy kitchen table at ikea.",new Date("2021-2-28"),"high","Max price is 100$."),o=(new t.ToDoItem("Learn programming","Learn at least 5 programming languages.",new Date("2021-4-15"),"low","3 languages on advanced level and 2 intermediate.",[["golang",0],["javascript",1],["ruby",1],["rust",0],["c#",0]]),new t.ToDoProject("House renovation","Steb by step revonation of my house.")),a=t.toDos;t.projects,new t.ToDoProject("Learning","Learning of various skills."),n.project=o,d.project=o,e.buildToDosByDate(a)})();