import{r as c}from"./layout-Dp9gzVaC.js";import{t as e}from"./content-CdqfI8Gq.js";const i=a=>a.split(" ").map(t=>t.charAt(0)).join("").toUpperCase(),n=a=>{const t=!!a.placeholder,s=a.photo?`<img src="${a.photo}" alt="${a.name}" loading="lazy" />`:`<span${t?' class="team-card__question"':""}>${t?"?":i(a.name)}</span>`,o=a.focus?`<p>${a.focus}</p>`:"";return`
    <article class="card team-card${t?" team-card--placeholder":""}">
      <div class="team-card__media">
        ${s}
      </div>
      <strong>${t?"TBA":a.name}</strong>
      ${!t&&a.role?`<div class="role">${a.role}</div>`:""}
      ${t?"":o}
    </article>
  `},r=`
  <section class="page-section">
    <div class="card-grid">
      ${e.map(a=>n(a)).join("")}
    </div>
  </section>
`;c({title:"Team",active:"team",content:r});
