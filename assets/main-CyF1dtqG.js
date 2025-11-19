import{r as t}from"./layout-BFT35Ct4.js";import{o as s}from"./content-CdqfI8Gq.js";const[c,n]=s,o=e=>e.replace(/\s+/g,""),i=e=>{const a=e.replace(/^\+49/,"0").replace(/[^\d]/g,"");return a.length>5?`${a.slice(0,5)}-${a.slice(5)}`:a},r=e=>e?`
    <article class="location-card">
      <div class="location-card__header">
        <h3 class="location-card__title">${e.title}</h3>
        <span class="location-card__badge">Sprechzeiten</span>
      </div>
      
      <table class="hours-table">
        <tbody>
          ${e.hours.map(a=>`
                <tr>
                  <td><strong>${a.day}</strong></td>
                  <td>${a.slots.join("<br>")}</td>
                </tr>
              `).join("")}
        </tbody>
      </table>

      <div class="contact-block">
        <span class="contact-block__label">Terminvereinbarung</span>
        <a href="tel:${o(e.phone)}" class="contact-phone">
          ${i(e.phone)}
        </a>
      </div>

      <div class="action-row">
        <div class="legacy-address">
          ${e.address.join("<br>")}
        </div>
        <a class="btn btn-primary btn--compact" href="${e.map}" target="_blank" rel="noreferrer">
          Anfahrt
        </a>
      </div>
    </article>
  `:"";t({title:"Startseite",active:"home",content:`
    <div class="home-page">
      <section class="bento-grid">
        ${r(c)}
        ${r(n)}
      </section>
    </div>
  `});
