(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const n=[{id:"home",label:"Startseite",href:"index.html"},{id:"team",label:"Team",href:"team.html"}],l=i=>n.map(t=>`
        <li>
          <a class="${t.id===i?"is-active":""}" href="${t.href}">${t.label}</a>
        </li>
      `).join(""),c=({title:i,active:t,content:a,hero:r})=>{document.title=`${i} · HNO Praxis Neckarsulm & Weinsberg`;const e=r?`<section class="page-hero">${r}</section>`:"",s='<a class="footer__link" href="datenschutz.html">Datenschutz</a>';document.body.classList.add("site-body"),document.body.innerHTML=`
    <div class="site-scale-wrapper">
      <header class="site-header">
        <div class="site-header__inner">
          <div class="site-header__brand">
            <a class="site-logo" href="index.html">
              <img src="/assets/logo.png" alt="Praxislogo" />
            </a>
            <div class="site-branding">
              <div class="site-branding__titles">
                <p class="site-title">HNO Praxis Neckarsulm &amp; Weinsberg</p>
                <p class="site-subtitle">Dr. medic C.I. Radu</p>
              </div>
              <nav class="site-branding__nav" aria-label="Hauptnavigation">
                <ul>${l(t)}</ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main class="site-shell">
        ${e}
        ${a}
      </main>
      <footer class="footer">
        <p>© HNO Praxis – Dr. medic C.I. Radu – Neckarsulm &amp; Weinsberg</p>
        ${s}
      </footer>
    </div>
  `};export{c as r};
