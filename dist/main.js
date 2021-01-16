(()=>{"use strict";const e=(()=>{let e,t=[],n=[],d={},l={};const i=e=>{const t=document.querySelector(".content-container");t.innerHTML="";const n=document.createElement("div");return t.appendChild(n),n.classList.add(e),n},a=t=>{let n=document.createElement("div");n.classList.add("todo"===t?"todo-item":"project-item"),e.appendChild(n);let d=document.createElement("div");d.classList.add("wrapper","add-card"),n.appendChild(d);let l=document.createElement("span");d.appendChild(l),l.textContent="+";let i=document.createElement("span");i.classList.add("hidden"),d.appendChild(i),i.textContent="Add",d.addEventListener("mouseenter",(()=>{i.classList.remove("hidden")})),d.addEventListener("mouseleave",(()=>{i.classList.add("hidden")})),d.addEventListener("click",(()=>{"todo"===t?m():C()}))},c=(t=["oldest","pending"])=>{e=i("content"),o(t);let n=p(t);for(let e=0;e<n.length;e++)s(n[e]);a("todo")},o=t=>{let n=document.createElement("div");e.appendChild(n),n.classList.add("filter-wrapper");let d=document.createElement("div");n.appendChild(d),d.classList.add("filter-title"),d.textContent="Filter:";let l=document.createElement("div");n.appendChild(l),l.classList.add("oldest"),l.textContent="Old first",t.includes("oldest")&&l.classList.toggle("filtered"),l.addEventListener("click",(()=>{if(l.classList.toggle("filtered"),t.includes("oldest")){let e=t.indexOf("oldest");t.splice(e,1)}else t.push("oldest");if(t.includes("newest")){let e=t.indexOf("newest");t.splice(e,1)}c(t)}));let i=document.createElement("div");n.appendChild(i),i.classList.add("newest"),i.textContent="New first",t.includes("newest")&&i.classList.toggle("filtered"),i.addEventListener("click",(()=>{if(i.classList.toggle("filtered"),t.includes("newest")){let e=t.indexOf("newest");t.splice(e,1)}else t.push("newest");if(t.includes("oldest")){let e=t.indexOf("oldest");t.splice(e,1)}c(t)}));let a=document.createElement("div");n.appendChild(a),a.classList.add("completed"),a.textContent="Completed",t.includes("completed")&&a.classList.toggle("filtered"),a.addEventListener("click",(()=>{if(a.classList.toggle("filtered"),t.includes("completed")){let e=t.indexOf("completed");t.splice(e,1)}else t.push("completed");c(t)}));let o=document.createElement("div");n.appendChild(o),o.classList.add("incompleted"),o.textContent="Incompleted",t.includes("incompleted")&&o.classList.toggle("filtered"),o.addEventListener("click",(()=>{if(o.classList.toggle("filtered"),t.includes("incompleted")){let e=t.indexOf("incompleted");t.splice(e,1)}else t.push("incompleted");c(t)}));let p=document.createElement("div");n.appendChild(p),p.textContent="Pending",t.includes("pending")&&p.classList.toggle("filtered"),p.addEventListener("click",(()=>{if(p.classList.toggle("filtered"),t.includes("pending")){let e=t.indexOf("pending");t.splice(e,1)}else t.push("pending");c(t)}))},p=e=>{let n=[...t];return e.includes("oldest")&&(n=n.slice().sort(((e,t)=>e.dueDate-t.dueDate))),e.includes("newest")&&(n=n.slice().sort(((e,t)=>t.dueDate-e.dueDate))),e.includes("completed")&&e.includes("incompleted")&&e.includes("pending")||(e.includes("completed")&&e.includes("incompleted")?n=n.slice().filter((e=>!0===e.completed||e.dueDate<new Date)):e.includes("completed")&&e.includes("pending")?n=n.slice().filter((e=>!0===e.completed||e.dueDate>new Date)):e.includes("incompleted")&&e.includes("pending")?n=n.slice().filter((e=>!1===e.completed)):e.includes("completed")?n=n.slice().filter((e=>!0===e.completed)):e.includes("incompleted")?n=n.slice().filter((e=>e.dueDate<new Date)):e.includes("pending")&&(n=n.slice().filter((e=>!1===e.completed&&e.dueDate>new Date)))),n},s=t=>{let n=document.createElement("div");n.classList.add("todo-item"),e.appendChild(n);let d=document.createElement("div");d.classList.add("wrapper"),n.appendChild(d);let l=document.createElement("div");l.classList.add("title-div"),d.appendChild(l);let i=document.createElement("span");i.textContent=t.title,l.appendChild(i);let a=document.createElement("div");a.classList.add("date-div"),d.appendChild(a);let c=document.createElement("span");c.textContent=!1===t.completed?"Due date: ":"Completed on: ",a.appendChild(c);let o=document.createElement("span");!1===t.completed&&t.dueDate>new Date&&(o.textContent=t.dueDate.toDateString()),!1===t.completed&&t.dueDate<new Date&&(o.textContent=t.dueDate.toDateString(),o.style.color="red",d.style.borderColor="red",l.style.background="#ff000030"),!1!==t.completed&&(o.textContent=t.completedOn.toDateString(),o.style.color="green",d.style.borderColor="green",l.style.background="#00ff0030"),a.appendChild(o);let p=document.createElement("div");p.classList.add("priority-div"),d.appendChild(p);let s=document.createElement("span");s.textContent="Priority: ",p.appendChild(s);let m=document.createElement("span");m.textContent=t.priority,p.appendChild(m);let u=document.createElement("div");u.classList.add("project-div"),d.appendChild(u);let h=document.createElement("span");h.textContent="Project: ",u.appendChild(h);let C=document.createElement("span");C.textContent=!1!==t.project?t.project.title:"-",u.appendChild(C);let E=document.createElement("div");d.appendChild(E),E.classList.add("menu-btn");let v=document.createElement("div");E.appendChild(v);let x=document.createElement("div");E.appendChild(x),E.addEventListener("click",(e=>{r(e,t,E)}))},r=(e,t,n)=>{let d=e.currentTarget.parentElement.parentElement;if("span 2"===d.style.gridColumn?d.style.gridColumn="":d.style.gridColumn="span 2","span 2"===d.style.gridRow?d.style.gridRow="":d.style.gridRow="span 2",1===d.children.length){let e=document.createElement("div");d.appendChild(e),e.classList.add("expanded-todo"),d.children[0].classList.add("wrapper-expanded"),n.classList.toggle("menu-btn-expanded");let l=document.createElement("div");l.classList.add("complete-div"),e.appendChild(l);let i=document.createElement("div");l.appendChild(i),!0===t.completed&&(i.style.boxShadow="none");let a=document.createElement("span");i.appendChild(a),a.textContent="COMPLETE",i.addEventListener("click",(e=>{!1===t.completed?(t.completed=!0,t.completedOn=new Date,d.children[0].children[1].children[1].textContent=t.completedOn.toDateString(),d.children[0].children[1].children[0].textContent="Completed on: ",d.children[0].children[1].children[1].style.color="green",d.children[0].style.borderColor="green",i.style.boxShadow="none",d.children[0].children[0].style.background="#00ff0030"):t.dueDate<new Date?(t.completed=!1,t.completedOn=!1,d.children[0].children[1].children[1].textContent=t.dueDate.toDateString(),d.children[0].children[1].children[0].textContent="Due date: ",d.children[0].children[1].children[1].style.color="red",d.children[0].style.borderColor="red",i.style.boxShadow="#0d324d 2px 3px 4px",d.children[0].children[0].style.background="#ff000030"):(t.completed=!1,t.completedOn=!1,d.children[0].children[1].children[1].textContent=t.dueDate.toDateString(),d.children[0].children[1].children[0].textContent="Due date: ",d.children[0].children[1].children[1].style.color="inherit",d.children[0].style.borderColor="#0d324d",i.style.boxShadow="#0d324d 2px 3px 4px",d.children[0].children[0].style.background="none")}));let c=document.createElement("div");c.classList.add("description-div"),e.appendChild(c);let o=document.createElement("span");o.textContent="Description: ",c.appendChild(o);let p=document.createElement("span");p.textContent=t.description,c.appendChild(p);let s=document.createElement("div");s.classList.add("notes-div"),e.appendChild(s);let r=document.createElement("span");r.textContent="Notes: ",s.appendChild(r);let m=document.createElement("span");m.textContent=t.notes,s.appendChild(m);let u=document.createElement("div");u.classList.add("checklist-div"),e.appendChild(u);let h=document.createElement("span");h.textContent="Checklist: ",u.appendChild(h);let C=document.createElement("div");C.classList.add("checklist-wrapper"),u.appendChild(C),t.checklist.forEach((e=>{let t=document.createElement("div");C.appendChild(t);let n=document.createElement("div");t.appendChild(n),n.textContent=1==e[1]?"✓":"",n.addEventListener("click",(t=>{1==e[1]?(e[1]=0,n.textContent=""):(e[1]=1,n.textContent="✓")}));let d=document.createElement("div");t.appendChild(d),d.textContent=e[0]}))}else d.children[1].remove(),d.children[0].classList.remove("wrapper-expanded"),n.classList.toggle("menu-btn-expanded")},m=()=>{let l={...d};e=i("new-todo-wrapper");let a=document.createElement("div");e.appendChild(a),a.classList.add("wrapper-one","new-todo-subwrapper");let o=document.createElement("div");e.appendChild(o),o.classList.add("wrapper-two","new-todo-subwrapper");let p=document.createElement("div");a.appendChild(p),p.classList.add("title-wrapper");let s=document.createElement("span");p.appendChild(s),s.textContent="Title: ";let r=document.createElement("input");p.appendChild(r),r.type="text",r.value="To Do";let m=document.createElement("div");a.appendChild(m),m.classList.add("description-wrapper");let u=document.createElement("span");m.appendChild(u),u.textContent="Description: ";let h=document.createElement("input");m.appendChild(h),h.type="text",h.value="Description";let C=document.createElement("div");a.appendChild(C),C.classList.add("due-date-wrapper");let E=document.createElement("span");C.appendChild(E),E.textContent="Due date: ";let v=document.createElement("input");C.appendChild(v),v.type="date",v.valueAsDate=new Date;let x=document.createElement("div");a.appendChild(x),x.classList.add("priority-wrapper");let L=document.createElement("span");x.appendChild(L),L.textContent="Priority: ";let D=document.createElement("form");x.appendChild(D);let g=document.createElement("span");D.appendChild(g),g.textContent="Low";let w=document.createElement("input");D.appendChild(w),w.type="radio",w.name="priority",w.id="low",w.checked=!0;let y=document.createElement("span");D.appendChild(y),y.textContent="Normal";let f=document.createElement("input");D.appendChild(f),f.type="radio",f.name="priority",f.id="normal";let k=document.createElement("span");D.appendChild(k),k.textContent="High";let b=document.createElement("input");D.appendChild(b),b.type="radio",b.name="priority",b.id="high";let j=document.createElement("div");a.appendChild(j),j.classList.add("project-wrapper");let T=document.createElement("span");j.appendChild(T),T.textContent="Project: ";let S=document.createElement("select");j.appendChild(S),S.name="project";let I=document.createElement("option");S.appendChild(I),I.value="none",I.textContent="none",n.forEach((e=>{let t=document.createElement("option");S.appendChild(t),t.value=e.title,t.textContent=e.title}));let O=document.createElement("div");o.appendChild(O),O.classList.add("notes-wrapper");let P=document.createElement("span");O.appendChild(P),P.textContent="Notes: ";let N=document.createElement("input");O.appendChild(N),N.type="text",N.value="Notes";let q=document.createElement("div");o.appendChild(q),q.classList.add("check-list-wrapper");let B=document.createElement("span");q.appendChild(B),B.textContent="Checklist: ";let A=document.createElement("div");q.appendChild(A),A.textContent="+";let M=[];A.addEventListener("click",(()=>{let e=document.createElement("div");q.insertBefore(e,A);let t=document.createElement("input");e.appendChild(t),t.type="text";let n=document.createElement("input");e.appendChild(n),n.type="checkbox",M.push([t.value,n.value])}));let H=document.createElement("div");e.appendChild(H),H.classList.add("submit-btn-wrapper");let R=document.createElement("div");H.appendChild(R),R.textContent="Save",R.addEventListener("click",(()=>{l.title=r.value,l.description=h.value,l.dueDate=v.valueAsDate,l.priority=document.querySelector('input[name="priority"]:checked').id,"none"===S.value?l.project=!1:(l.project=n.filter((e=>e.title===S.value))[0],l.project.toDoItems.push(l)),l.notes=N.value;for(let e=0;e<M.length;e++)l.checklist.push([q.children[e+1].children[0].value,q.children[e+1].children[1].checked?1:0]);t.push(l),c()}))},u=()=>{e=i("content");for(let e=0;e<n.length;e++)h(n[e]);a("project")},h=t=>{let n=document.createElement("div");n.classList.add("project-item"),e.appendChild(n);let d=document.createElement("div");d.classList.add("wrapper"),n.appendChild(d);let l=document.createElement("div");l.classList.add("title-div"),d.appendChild(l);let i=document.createElement("span");i.textContent=t.title,l.appendChild(i);let a=document.createElement("div");a.classList.add("description-div"),d.appendChild(a);let c=document.createElement("span");c.textContent="Description: ",a.appendChild(c);let o=document.createElement("span");o.textContent=t.description,a.appendChild(o);let p=document.createElement("div");p.classList.add("todos-div"),d.appendChild(p);let s=document.createElement("div");p.appendChild(s);let r=document.createElement("span");r.textContent="ToDos: ",s.appendChild(r);let m=document.createElement("span");m.textContent="Due date: ",s.appendChild(m),t.toDoItems.forEach((e=>{let t=document.createElement("div");p.appendChild(t);let n=document.createElement("span");n.textContent=e.title,t.appendChild(n);let d=document.createElement("span");d.textContent=e.dueDate.toDateString(),t.appendChild(d),e.dueDate<new Date&&(d.style.color="red"),!0===e.completed&&(d.style.color="green")}))},C=()=>{let d={...l};e=i("new-project-wrapper");let a=document.createElement("div");e.appendChild(a),a.classList.add("wrapper");let c=document.createElement("div");a.appendChild(c),c.classList.add("title-wrapper");let o=document.createElement("span");c.appendChild(o),o.textContent="Title: ";let p=document.createElement("input");c.appendChild(p),p.type="text",p.value="Project";let s=document.createElement("div");a.appendChild(s),s.classList.add("description-wrapper");let r=document.createElement("span");s.appendChild(r),r.textContent="Description: ";let m=document.createElement("input");s.appendChild(m),m.type="text",m.value="Description";let h=document.createElement("div");a.appendChild(h),h.classList.add("to-do-items-wrapper");let C=document.createElement("span");h.appendChild(C),C.textContent="To Do items: ";let E=document.createElement("select");h.appendChild(E),E.name="to-do-items",E.multiple=!0,t.forEach((e=>{let t=document.createElement("option");E.appendChild(t),t.value=e.title,t.textContent=e.title}));let v=document.createElement("div");e.appendChild(v),v.classList.add("submit-btn-wrapper");let x=document.createElement("div");v.appendChild(x),x.textContent="Save",x.addEventListener("click",(()=>{d.title=p.value,d.description=m.value;for(let e=0;e<E.children.length;e++)E.children[e].selected&&d.toDoItems.push(t[e]);n.push(d),u()}))};return{start:(e,i,a,o)=>{e.pop(),i.pop(),t=e,n=i,d=a,l=o,(()=>{let e=document.querySelector(".new-todo");e.addEventListener("click",(()=>{l(e),m()}));let t=document.querySelector(".todos");t.addEventListener("click",(()=>{l(t),c()}));let n=document.querySelector(".new-project");n.addEventListener("click",(()=>{l(n),C()}));let d=document.querySelector(".projects");d.addEventListener("click",(()=>{l(d),u()}));const l=e=>{document.querySelectorAll(".navbar-item").forEach((t=>{t===e?t.classList.add("navbar-active"):t.classList.remove("navbar-active")}))}})(),m()}}})(),t=(()=>{const e=[],t=[];return{ToDoItem:class{constructor(t="New To Do Item",n="Description...",d=((e,t)=>(e.setDate(e.getDate()+t),e))(new Date,30),l="low",i="Notes...",a=[],c=!1,o=!1,p=!1){this.title=t,this.description=n,this.dueDate=d,this.priority=l,this.notes=i,this.checklist=a,this.completed=c,this.completedOn=o,this.project=p,e.push(this)}},ToDoProject:class{constructor(e="New Project",n="Description",d=[],l=!1,i=!1){this.title=e,this.description=n,this.toDoItems=d,this.completed=l,this.completedOn=i,t.push(this)}},toDos:e,projects:t}})();new t.ToDoItem("Tide up","Tide up my bedroom and kitchen.",new Date("2021-1-25"),"normal","Use vacuum cleaner not just a broom.",[["kitchen",1],["bedroom",0]],!0,new Date("2021-1-5"));let n=new t.ToDoItem("Buy a lamp","Buy lamp at ikea.",new Date("2021-3-1"),"high","Max price is 10$."),d=new t.ToDoItem("Buy a table","Buy kitchen table at ikea.",new Date("2021-2-28"),"high","Max price is 100$."),l=new t.ToDoItem("Learn programming","Learn at least 5 programming languages.",new Date("2021-4-15"),"low","3 languages on advanced level and 2 intermediate.",[["golang",0],["javascript",1],["ruby",1],["rust",0],["c#",0]]),i=new t.ToDoProject("House renovation","Steb by step revonation of my house.");i.toDoItems.push(n),i.toDoItems.push(d);let a=t.toDos,c=t.projects,o=new t.ToDoProject("Learning","Learning of various skills.");o.toDoItems.push(l),n.project=i,d.project=i,l.project=o;for(let e=1;e<10;e++)new t.ToDoItem;a[a.length-1].dueDate=new Date("2020-1-1"),e.start(a,c,new t.ToDoItem("blank"),new t.ToDoProject("blank"))})();