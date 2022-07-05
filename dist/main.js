(()=>{"use strict";const e=e=>e||" - ",t=()=>{document.querySelectorAll(".hero").forEach((e=>{e.remove()}))},o=(t,o)=>(t.innerHTML=`<div class="card text-center">\n          <img src="../db/${o.photo}" class="card-img-top" alt="...">\n          <div class="card-body">\n            <h5 class = "card-title">Hero name: <br><br>${e(o.name)}</h5>\n          </div>\n          <ul class="list-group list-group-flush">\n           <li class="list-group-item" style="width: 200%"><strong>Real name:</strong></strong> ${e(o.realName)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Species:</strong> ${e(o.species)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Сitizenship:</strong> ${e(o.citizenship)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Gender:</strong> ${e(o.gender)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Birth day:</strong> ${e(o.birthDay)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Death day:</strong> ${e(o.deathDay)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Status:</strong> ${e(o.status)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Actors:</strong> ${e(o.actors)}</li>\n           <li class="list-group-item" style="width: 200%"><strong>Movies:</strong> ${(e=>{let t="";if(!e)return" - ";for(let o=0;o<e.length;o++)o<e.length-1&&(t+=e[o]+", <br/>"),o===e.length-1&&(t+=e[o]);return t})(o.movies)}</li>\n          </ul>\n        </div><br/><br/>`,t),l=e=>{fetch(e).then((e=>e.json())).then((e=>{(e=>{const l=document.querySelectorAll("#heroes");t(),e.forEach((e=>{let t=document.createElement("div");t.classList.add("hero"),l[0].append(o(t,e))}))})(e),(e=>{const t=document.querySelector(".form-select.actor"),o=document.querySelector(".form-select.films");document.querySelectorAll(".actor-option").forEach((e=>{e.remove()})),document.querySelectorAll(".film-option").forEach((e=>{e.remove()})),e.forEach((e=>{let o=document.createElement("option");o.classList.add("actor-option"),o.innerHTML=`<option value="${e.actors}">${e.actors}</option>`,t.append(o)}));let l=[],s=0;e.forEach((e=>{if(document.createElement("option"),e.movies){s=0;for(let t=0;t<e.movies.length;t++){let o="";o=e.movies[t];for(let e=0;e<l.length;e++)o===l[e]&&s++;0===s&&l.push(o)}}})),l.sort();for(let e=0;e<l.length;e++){let t=document.createElement("option");t.classList.add("film-option"),t.innerHTML=`<option value="${l[e]}">${l[e]}</option>`,o.append(t)}})(e)})).catch((e=>console.log(e)))},s=e=>{l(e)},r="../db/dbHeroes.json",n=document.querySelector(".form-select.actor"),c=document.querySelector(".form-select.films");s(r),n.addEventListener("input",(e=>{var l,c;0===e.target.selectedIndex?s(r):(l=r,c=n[e.target.selectedIndex].value,fetch(l).then((e=>e.json())).then((e=>{((e,l)=>{const s=document.querySelectorAll("#heroes");document.querySelectorAll(".hero"),t(),e.forEach((e=>{let t=document.createElement("div");t.classList.add("hero"),e.actors===l&&s[0].append(o(t,e))}))})(e,c)})).catch((e=>console.log(e))))})),c.addEventListener("input",(e=>{var l,n;0===e.target.selectedIndex?s(r):(l=r,n=c[e.target.selectedIndex].value,fetch(l).then((e=>e.json())).then((e=>{((e,l)=>{const s=document.querySelectorAll("#heroes");document.querySelectorAll(".hero"),t(),e.forEach((e=>{let t=document.createElement("div");if(t.classList.add("hero"),void 0!==e.movies)for(let r=0;r<e.movies.length;r++)e.movies[r]===l&&s[0].append(o(t,e))}))})(e,n)})).catch((e=>console.log(e))))}))})();