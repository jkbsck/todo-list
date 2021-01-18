(()=>{"use strict";const e=(()=>{let e,t=[],n=[],d={},l={};const i=e=>{document.querySelectorAll(".navbar-item").forEach((t=>{t===e?t.classList.add("navbar-active"):t.classList.remove("navbar-active")}))},c=e=>{const t=document.querySelector(".content-container");t.innerHTML="";const n=document.createElement("div");return t.appendChild(n),n.classList.add(e),n},o=t=>{let n=document.createElement("div");n.classList.add("todo"===t?"todo-item":"project-item"),e.appendChild(n);let d=document.createElement("div");d.classList.add("wrapper","add-card"),n.appendChild(d);let l=document.createElement("span");d.appendChild(l),l.textContent="+";let c=document.createElement("span");c.classList.add("hidden"),d.appendChild(c),c.textContent="Add",d.addEventListener("mouseenter",(()=>{c.classList.remove("hidden")})),d.addEventListener("mouseleave",(()=>{c.classList.add("hidden")})),d.addEventListener("click",(()=>{"todo"===t?(i(document.querySelector(".new-todo")),h()):(i(document.querySelector(".new-project")),v())}))},a=()=>{let e=[];t.forEach((t=>{let n=JSON.stringify(t,((e,t)=>"project"===e?t.title:t));e.push(n)})),localStorage.setItem("toDos",JSON.stringify(e));let d=[];n.forEach((e=>{let t=JSON.stringify(e,((e,t)=>{if("toDoItems"===e){let e=[];return t.forEach((t=>{e.push(t.title)})),e}return t}));d.push(t)})),localStorage.setItem("projects",JSON.stringify(d))},r=(t=["oldest","pending"])=>{a(),i(document.querySelector(".todos")),e=c("content"),s(t);let n=p(t);for(let e=0;e<n.length;e++)m(n[e]);o("todo")},s=t=>{let n=document.createElement("div");e.appendChild(n),n.classList.add("filter-wrapper");let d=document.createElement("div");n.appendChild(d),d.classList.add("filter-title"),d.textContent="Filter:";let l=document.createElement("div");n.appendChild(l),l.classList.add("oldest"),l.textContent="Old first",t.includes("oldest")&&l.classList.toggle("filtered"),l.addEventListener("click",(()=>{if(l.classList.toggle("filtered"),t.includes("oldest")){let e=t.indexOf("oldest");t.splice(e,1)}else t.push("oldest");if(t.includes("newest")){let e=t.indexOf("newest");t.splice(e,1)}r(t)}));let i=document.createElement("div");n.appendChild(i),i.classList.add("newest"),i.textContent="New first",t.includes("newest")&&i.classList.toggle("filtered"),i.addEventListener("click",(()=>{if(i.classList.toggle("filtered"),t.includes("newest")){let e=t.indexOf("newest");t.splice(e,1)}else t.push("newest");if(t.includes("oldest")){let e=t.indexOf("oldest");t.splice(e,1)}r(t)}));let c=document.createElement("div");n.appendChild(c),c.classList.add("completed"),c.textContent="Completed",t.includes("completed")&&c.classList.toggle("filtered"),c.addEventListener("click",(()=>{if(c.classList.toggle("filtered"),t.includes("completed")){let e=t.indexOf("completed");t.splice(e,1)}else t.push("completed");r(t)}));let o=document.createElement("div");n.appendChild(o),o.classList.add("incompleted"),o.textContent="Incompleted",t.includes("incompleted")&&o.classList.toggle("filtered"),o.addEventListener("click",(()=>{if(o.classList.toggle("filtered"),t.includes("incompleted")){let e=t.indexOf("incompleted");t.splice(e,1)}else t.push("incompleted");r(t)}));let a=document.createElement("div");n.appendChild(a),a.textContent="Pending",t.includes("pending")&&a.classList.toggle("filtered"),a.addEventListener("click",(()=>{if(a.classList.toggle("filtered"),t.includes("pending")){let e=t.indexOf("pending");t.splice(e,1)}else t.push("pending");r(t)}))},p=e=>{let n=[...t];return e.includes("oldest")&&(n=n.slice().sort(((e,t)=>e.dueDate-t.dueDate))),e.includes("newest")&&(n=n.slice().sort(((e,t)=>t.dueDate-e.dueDate))),e.includes("completed")&&e.includes("incompleted")&&e.includes("pending")||(e.includes("completed")&&e.includes("incompleted")?n=n.slice().filter((e=>!0===e.completed||e.dueDate<new Date)):e.includes("completed")&&e.includes("pending")?n=n.slice().filter((e=>!0===e.completed||e.dueDate>new Date)):e.includes("incompleted")&&e.includes("pending")?n=n.slice().filter((e=>!1===e.completed)):e.includes("completed")?n=n.slice().filter((e=>!0===e.completed)):e.includes("incompleted")?n=n.slice().filter((e=>e.dueDate<new Date)):e.includes("pending")&&(n=n.slice().filter((e=>!1===e.completed&&e.dueDate>new Date)))),n},m=t=>{let d=document.createElement("div");d.classList.add("todo-item"),e.appendChild(d);let l=document.createElement("div");l.classList.add("wrapper"),d.appendChild(l);let i=document.createElement("div");i.classList.add("title-div"),l.appendChild(i);let c=document.createElement("span");c.textContent=t.title,i.appendChild(c);let o=document.createElement("div");o.classList.add("date-div"),l.appendChild(o);let a=document.createElement("span");a.textContent=!1===t.completed?"Due date: ":"Completed on: ",o.appendChild(a);let r=document.createElement("span");!1===t.completed&&t.dueDate>new Date&&(r.textContent=t.dueDate.toDateString()),!1===t.completed&&t.dueDate<new Date&&(r.textContent=t.dueDate.toDateString(),r.style.color="red",l.style.borderColor="red",i.style.background="#ff000030"),!1!==t.completed&&(r.textContent=t.completedOn.toDateString(),r.style.color="green",l.style.borderColor="green",i.style.background="#00ff0030"),o.appendChild(r);let s=document.createElement("div");s.classList.add("priority-div"),l.appendChild(s);let p=document.createElement("span");p.textContent="Priority: ",s.appendChild(p);let m=document.createElement("span");m.textContent=t.priority,s.appendChild(m);let h=document.createElement("div");h.classList.add("project-div"),l.appendChild(h);let C=document.createElement("span");C.textContent="Project: ",h.appendChild(C);let E=document.createElement("span");E.textContent=!1!==t.project&&n.includes(t.project)?t.project.title:"-",h.appendChild(E);let v=document.createElement("div");l.appendChild(v),v.classList.add("menu-btn");let D=document.createElement("div");v.appendChild(D);let L=document.createElement("div");v.appendChild(L),v.addEventListener("click",(e=>{u(e,t,v)}))},u=(e,n,d)=>{let l=e.currentTarget.parentElement.parentElement;if("span 2"===l.style.gridColumn?l.style.gridColumn="":l.style.gridColumn="span 2","span 2"===l.style.gridRow?l.style.gridRow="":l.style.gridRow="span 2",1===l.children.length){let e=document.createElement("div");l.appendChild(e),e.classList.add("expanded-todo"),l.children[0].classList.add("wrapper-expanded"),d.classList.toggle("menu-btn-expanded");let c=document.createElement("div");c.classList.add("complete-div"),e.appendChild(c);let o=document.createElement("div");c.appendChild(o),!0===n.completed&&(o.style.boxShadow="none");let a=document.createElement("span");o.appendChild(a),a.textContent="COMPLETE",o.addEventListener("click",(e=>{!1===n.completed?(n.completed=!0,n.completedOn=new Date,l.children[0].children[1].children[1].textContent=n.completedOn.toDateString(),l.children[0].children[1].children[0].textContent="Completed on: ",l.children[0].children[1].children[1].style.color="green",l.children[0].style.borderColor="green",o.style.boxShadow="none",l.children[0].children[0].style.background="#00ff0030"):n.dueDate<new Date?(n.completed=!1,n.completedOn=!1,l.children[0].children[1].children[1].textContent=n.dueDate.toDateString(),l.children[0].children[1].children[0].textContent="Due date: ",l.children[0].children[1].children[1].style.color="red",l.children[0].style.borderColor="red",o.style.boxShadow="#0d324d 2px 3px 4px",l.children[0].children[0].style.background="#ff000030"):(n.completed=!1,n.completedOn=!1,l.children[0].children[1].children[1].textContent=n.dueDate.toDateString(),l.children[0].children[1].children[0].textContent="Due date: ",l.children[0].children[1].children[1].style.color="inherit",l.children[0].style.borderColor="#0d324d",o.style.boxShadow="#0d324d 2px 3px 4px",l.children[0].children[0].style.background="none")}));let s=document.createElement("div");s.classList.add("description-div"),e.appendChild(s);let p=document.createElement("span");p.textContent="Description: ",s.appendChild(p);let m=document.createElement("span");m.textContent=n.description,s.appendChild(m);let u=document.createElement("div");u.classList.add("notes-div"),e.appendChild(u);let C=document.createElement("span");C.textContent="Notes: ",u.appendChild(C);let E=document.createElement("span");E.textContent=n.notes,u.appendChild(E);let v=document.createElement("div");v.classList.add("checklist-div"),e.appendChild(v);let D=document.createElement("span");D.textContent="Checklist: ",v.appendChild(D);let L=document.createElement("div");L.classList.add("checklist-wrapper"),v.appendChild(L),n.checklist.forEach((e=>{let t=document.createElement("div");L.appendChild(t);let n=document.createElement("div");t.appendChild(n),n.textContent=1==e[1]?"✓":"",n.addEventListener("click",(t=>{1==e[1]?(e[1]=0,n.textContent=""):(e[1]=1,n.textContent="✓")}));let d=document.createElement("div");t.appendChild(d),d.textContent=e[0]}));let g=document.createElement("div");e.appendChild(g),g.classList.add("edit-btn"),g.innerHTML='<i class="fas fa-edit"></i>',g.addEventListener("click",(()=>{i(document.querySelector(".new-todo")),h(n)}));let x=document.createElement("div");e.appendChild(x),x.classList.add("delete-btn"),x.innerHTML='<i class="far fa-trash-alt"></i>',x.addEventListener("click",(e=>{t=t.filter((e=>e!==n)),r()}))}else l.children[1].remove(),l.children[0].classList.remove("wrapper-expanded"),d.classList.toggle("menu-btn-expanded")},h=(l={...d})=>{i(document.querySelector(".new-todo")),e=c("new-todo-wrapper");let o=document.createElement("div");e.appendChild(o),o.classList.add("wrapper-one","new-todo-subwrapper");let a=document.createElement("div");e.appendChild(a),a.classList.add("wrapper-two","new-todo-subwrapper");let s=document.createElement("div");o.appendChild(s),s.classList.add("title-wrapper");let p=document.createElement("span");s.appendChild(p),p.textContent="Title: ";let m=document.createElement("input");s.appendChild(m),m.type="text",m.value="blank"===l.title?"To Do":l.title;let u=document.createElement("div");o.appendChild(u),u.classList.add("description-wrapper");let h=document.createElement("span");u.appendChild(h),h.textContent="Description: ";let C=document.createElement("input");u.appendChild(C),C.type="text",C.value="blank"===l.title?"Description":l.description;let E=document.createElement("div");o.appendChild(E),E.classList.add("due-date-wrapper");let v=document.createElement("span");E.appendChild(v),v.textContent="Due date: ";let D=document.createElement("input");E.appendChild(D),D.type="date",D.valueAsDate="blank"===l.title?new Date:l.dueDate;let L=document.createElement("div");o.appendChild(L),L.classList.add("priority-wrapper");let g=document.createElement("span");L.appendChild(g),g.textContent="Priority: ";let x=document.createElement("form");L.appendChild(x);let w=document.createElement("span");x.appendChild(w),w.textContent="Low";let f=document.createElement("input");x.appendChild(f),f.type="radio",f.name="priority",f.id="low",f.checked="low"===l.priority;let y=document.createElement("span");x.appendChild(y),y.textContent="Normal";let k=document.createElement("input");x.appendChild(k),k.type="radio",k.name="priority",k.id="normal",k.checked="normal"===l.priority;let j=document.createElement("span");x.appendChild(j),j.textContent="High";let b=document.createElement("input");x.appendChild(b),b.type="radio",b.name="priority",b.id="high",b.checked="high"===l.priority;let S=document.createElement("div");o.appendChild(S),S.classList.add("project-wrapper");let I=document.createElement("span");S.appendChild(I),I.textContent="Project: ";let O=document.createElement("select");S.appendChild(O),O.name="project";let T=document.createElement("option");O.appendChild(T),T.value="none",T.textContent="none",n.forEach((e=>{let t=document.createElement("option");O.appendChild(t),t.value=e.title,t.textContent=e.title,t.selected=l.project.title===e.title}));let N=document.createElement("div");a.appendChild(N),N.classList.add("notes-wrapper");let q=document.createElement("span");N.appendChild(q),q.textContent="Notes: ";let P=document.createElement("input");N.appendChild(P),P.type="text",P.value="blank"===l.title?"Notes":l.notes;let J=document.createElement("div");a.appendChild(J),J.classList.add("check-list-wrapper");let M=document.createElement("span");J.appendChild(M),M.textContent="Checklist: ";let H=document.createElement("div");J.appendChild(H),H.textContent="+";let B=[];"blank"!==l.title&&l.checklist.forEach((e=>{let t=document.createElement("div");J.insertBefore(t,H);let n=document.createElement("input");t.appendChild(n),n.type="text",n.value=e[0];let d=document.createElement("input");t.appendChild(d),d.type="checkbox",d.checked=e[1];let l=document.createElement("div");t.appendChild(l),l.textContent="Remove",l.addEventListener("click",(()=>{B=B.filter((e=>e[0]!==n.value)),t.remove()})),B.push([n.value,d.checked?1:0])})),H.addEventListener("click",(()=>{let e=document.createElement("div");J.insertBefore(e,H);let t=document.createElement("input");e.appendChild(t),t.type="text";let n=document.createElement("input");e.appendChild(n),n.type="checkbox";let d=document.createElement("div");e.appendChild(d),d.textContent="Remove",d.addEventListener("click",(()=>{B.pop(),e.remove()})),B.push([t.value,n.value])}));let R=document.createElement("div");e.appendChild(R),R.classList.add("submit-btn-wrapper");let A=document.createElement("div");R.appendChild(A),A.textContent="Save",A.addEventListener("click",(()=>{l.description=C.value,l.dueDate=D.valueAsDate,l.priority=document.querySelector('input[name="priority"]:checked').id,!1!==l.project&&(l.project.toDoItems=l.project.toDoItems.filter((e=>e!==l))),"none"===O.value?l.project=!1:(l.project=n.filter((e=>e.title===O.value))[0],l.project.toDoItems.push(l)),l.notes=P.value;for(let e=0;e<B.length;e++)"blank"===l.title?l.checklist.push([J.children[e+1].children[0].value,J.children[e+1].children[1].checked?1:0]):l.checklist[e]=[J.children[e+1].children[0].value,J.children[e+1].children[1].checked?1:0];for(;B.length!==l.checklist.length;)l.checklist.pop();"blank"===l.title&&t.push(l),l.title=m.value,r()}))},C=()=>{a(),i(document.querySelector(".projects")),e=c("content");for(let e=0;e<n.length;e++)E(n[e]);o("project")},E=d=>{let l=document.createElement("div");l.classList.add("project-item"),e.appendChild(l);let c=document.createElement("div");c.classList.add("wrapper"),l.appendChild(c);let o=document.createElement("div");o.classList.add("title-div"),c.appendChild(o);let a=document.createElement("span");a.textContent=d.title,o.appendChild(a);let r=document.createElement("div");r.classList.add("description-div"),c.appendChild(r);let s=document.createElement("span");s.textContent="Description: ",r.appendChild(s);let p=document.createElement("span");p.textContent=d.description,r.appendChild(p);let m=document.createElement("div");m.classList.add("todos-div"),c.appendChild(m);let u=document.createElement("div");m.appendChild(u);let h=document.createElement("span");h.textContent="ToDos: ",u.appendChild(h);let E=document.createElement("span");E.textContent="Due date: ",u.appendChild(E),d.toDoItems.forEach((e=>{if(t.includes(e)){let t=document.createElement("div");m.appendChild(t);let n=document.createElement("span");n.textContent=e.title,t.appendChild(n);let d=document.createElement("span");d.textContent=e.dueDate.toDateString(),t.appendChild(d),e.dueDate<new Date&&(d.style.color="red"),!0===e.completed&&(d.style.color="green")}}));let D=document.createElement("div");c.appendChild(D),D.classList.add("edit-btn"),D.innerHTML='<i class="fas fa-edit"></i>',D.addEventListener("click",(()=>{i(document.querySelector(".new-todo")),v(d)}));let L=document.createElement("div");c.appendChild(L),L.classList.add("delete-btn"),L.innerHTML='<i class="far fa-trash-alt"></i>',L.addEventListener("click",(()=>{n=n.filter((e=>e!==d)),C()}))},v=(d={...l})=>{i(document.querySelector(".new-project")),e=c("new-project-wrapper");let o=document.createElement("div");e.appendChild(o),o.classList.add("wrapper");let a=document.createElement("div");o.appendChild(a),a.classList.add("title-wrapper");let r=document.createElement("span");a.appendChild(r),r.textContent="Title: ";let s=document.createElement("input");a.appendChild(s),s.type="text",s.value="blank"===d.title?"Project":d.title;let p=document.createElement("div");o.appendChild(p),p.classList.add("description-wrapper");let m=document.createElement("span");p.appendChild(m),m.textContent="Description: ";let u=document.createElement("input");p.appendChild(u),u.type="text",u.value="blank"===d.title?"Description":d.description;let h=document.createElement("div");o.appendChild(h),h.classList.add("to-do-items-wrapper");let E=document.createElement("span");h.appendChild(E),E.textContent="To Do items: ";let v=document.createElement("select");h.appendChild(v),v.name="to-do-items",v.multiple=!0,t.forEach((e=>{let t=document.createElement("option");v.appendChild(t),t.value=e.title,t.textContent=e.title,"blank"!==d.title&&(t.selected=!!d.toDoItems.includes(e))}));let D=document.createElement("div");e.appendChild(D),D.classList.add("submit-btn-wrapper");let L=document.createElement("div");D.appendChild(L),L.textContent="Save",L.addEventListener("click",(()=>{d.description=u.value,d.toDoItems=[];for(let e=0;e<v.children.length;e++)v.children[e].selected?(d.toDoItems.push(t[e]),t[e].project=d):t[e].project===d&&(t[e].project=!1);"blank"===d.title&&n.push(d),d.title=s.value,C()}))};return{start:(e,c,o,a)=>{e.pop(),c.pop(),t=e,n=c,d=o,l=a,(()=>{let e=document.querySelector(".new-todo");e.addEventListener("click",(()=>{i(e),h()}));let t=document.querySelector(".todos");t.addEventListener("click",(()=>{i(t),r()}));let n=document.querySelector(".new-project");n.addEventListener("click",(()=>{i(n),v()}));let d=document.querySelector(".projects");d.addEventListener("click",(()=>{i(d),C()}))})(),r()}}})(),t=(()=>{const e=[],t=[];return{ToDoItem:class{constructor(t="New To Do Item",n="Description...",d=((e,t)=>(e.setDate(e.getDate()+t),e))(new Date,30),l="low",i="Notes...",c=[],o=!1,a=!1,r=!1){this.title=t,this.description=n,this.dueDate=d,this.priority=l,this.notes=i,this.checklist=c,this.completed=o,this.completedOn=a,this.project=r,e.push(this)}},ToDoProject:class{constructor(e="New Project",n="Description",d=[],l=!1,i=!1){this.title=e,this.description=n,this.toDoItems=d,this.completed=l,this.completedOn=i,t.push(this)}},toDos:e,projects:t}})();null===localStorage.getItem("toDos")?(new t.ToDoItem("Tide up","Tide up my bedroom and kitchen.",new Date("2021-1-25"),"normal","Use vacuum cleaner not just a broom.",[["kitchen",1],["bedroom",0]],!0,new Date("2021-1-5")),new t.ToDoItem("Buy a lamp","Buy lamp at ikea.",new Date("2021-3-1"),"high","Max price is 10$."),new t.ToDoItem("Buy a table","Buy kitchen table at ikea.",new Date("2021-1-15"),"high","Max price is 100$."),new t.ToDoItem("Learn programming","Learn at least 5 programming languages.",new Date("2021-4-15"),"low","3 languages on advanced level and 2 intermediate.",[["golang",0],["javascript",1],["ruby",1],["rust",0],["c#",0]]),new t.ToDoProject("House renovation","Step by step renovation of my house."),t.projects[0].toDoItems.push(t.toDos[2]),t.projects[0].toDoItems.push(t.toDos[1]),new t.ToDoProject("Learning","Learning of various skills."),t.projects[1].toDoItems.push(t.toDos[3]),t.toDos[3].project=t.projects[1],t.toDos[1].project=t.projects[0],t.toDos[2].project=t.projects[0]):(JSON.parse(localStorage.getItem("toDos")).forEach((e=>{let n=JSON.parse(e);n.dueDate=new Date(n.dueDate),n.completedOn=new Date(n.completedOn),t.toDos.push(n)})),JSON.parse(localStorage.getItem("projects")).forEach((e=>{t.projects.push(JSON.parse(e));let n=JSON.parse(e);t.toDos.forEach((e=>{e.project===n.title&&(e.project=n),n.toDoItems.includes(e.title)&&(n.toDoItems[n.toDoItems.indexOf(e.title)]=e,t.projects.forEach((e=>{e.title===n.title&&(e.toDoItems=n.toDoItems)})))}))})),console.log(t.toDos),console.log(t.projects)),e.start(t.toDos,t.projects,new t.ToDoItem("blank"),new t.ToDoProject("blank"))})();