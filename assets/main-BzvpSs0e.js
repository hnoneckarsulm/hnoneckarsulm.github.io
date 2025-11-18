import{r as t}from"./layout-CmYJRMnj.js";import{o as r}from"./content-CdqfI8Gq.js";const[i,l]=r,c=e=>e.replace(/\s+/g,""),d=e=>{const s=e.replace(/^\+49/,"0").replace(/[^\d]/g,"");return s.length>5?`${s.slice(0,5)}-${s.slice(5)}`:s},a=e=>e?`
    <article class="legacy-aside legacy-aside--home">
      <div class="legacy-aside__section">
        <h3 class="legacy-aside__heading">Sprechzeiten ${e.title}</h3>
      <table>
        <tbody>
          ${e.hours.map(s=>`
                <tr>
                  <td><strong>${s.day}</strong></td>
                  <td>${s.slots.join("<br>")}</td>
                </tr>
              `).join("")}
        </tbody>
      </table>
      </div>
      <div class="legacy-aside__section legacy-aside__section--callout">
        <p class="legacy-aside__label">Telefonnummer ${e.title}</p>
        <p class="legacy-phone">
          <a href="tel:${c(e.phone)}">${d(e.phone)}</a>
        </p>
      </div>
      <div class="legacy-aside__section legacy-aside__section--split">
        <div>
          <p class="legacy-aside__label">Adresse ${e.title}</p>
          <p class="legacy-address">${e.address.join("<br>")}</p>
        </div>
        <a class="btn btn-primary btn--compact" href="${e.map}" target="_blank" rel="noreferrer">Anfahrt<br />${e.title}</a>
      </div>
    </article>
  `:"";t({title:"Startseite",active:"home",content:`
    <div class="home-page">
      <section class="home-center">
        ${a(i)}
        ${a(l)}
      </section>
    </div>
  `});
