(()=>{class e{static displayTask(){[{desc:"buy fruits",id:1},{desc:"buy medicines",id:1},{desc:"buy household",id:1}].forEach((s=>e.addTasks(s)))}static addTasks(e){const s=document.querySelector(".list");let t=` <li class="listItems">\n    <input type="checkbox" name="select" id="" />\n    <p class="title">${e.desc}</p>\n    <button class="button remove" id="${e.id}">Remove</button>\n  </li>`;s.insertAdjacentHTML("beforeend",t)}}document.getElementById("Enter").addEventListener("click",(()=>{e.displayTask()}))})();