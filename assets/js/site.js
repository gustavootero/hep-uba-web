(function () {
  "use strict";

  var G = window.GROUP || {};
  var root = document.documentElement;
  var titles = {
    es: "Grupo de Física Experimental de Altas Energías | UBA",
    en: "Experimental High Energy Physics Group | UBA"
  };

  /* ----- idioma ----- */

  function initialLang() {
    var m = /[?&]lang=(es|en)\b/.exec(window.location.search);
    if (m) return m[1];
    try {
      var saved = window.localStorage.getItem("lang");
      if (saved === "es" || saved === "en") return saved;
    } catch (e) { /* sin almacenamiento: se usa el idioma por defecto */ }
    return "es";
  }

  var lang = initialLang();

  function t(v) {
    if (v && typeof v === "object") return v[lang] || v.es || "";
    return v == null ? "" : String(v);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function initials(name) {
    var parts = name.split(/\s+/).filter(function (p) { return /^[A-ZÁÉÍÓÚÑ]/.test(p); });
    return (parts[0] ? parts[0][0] : "") + (parts.length > 1 ? parts[parts.length - 1][0] : "");
  }

  /* ----- integrantes ----- */

  function renderPeople() {
    var box = document.getElementById("people-list");
    if (!box || !G.people) return;
    box.textContent = "";
    G.people.forEach(function (group) {
      var lead = group.members.some(function (m) { return m.detail; });
      box.appendChild(el("h3", "people-heading", t(group.heading)));
      var ul = el("ul", lead ? "people people-lead" : "people");
      group.members.forEach(function (m) {
        var li = el("li", "person");
        if (m.photo) {
          var img = el("img", "person-photo");
          img.src = "assets/img/people/" + m.photo;
          img.alt = "";
          img.width = 400;
          img.height = 500;
          img.loading = "lazy";
          li.appendChild(img);
        } else {
          var ph = el("div", "person-photo person-initials", initials(m.name));
          ph.setAttribute("aria-hidden", "true");
          li.appendChild(ph);
        }
        var txt = el("div", "person-text");
        txt.appendChild(el("p", "person-name", m.name));
        if (m.role) txt.appendChild(el("p", "person-role", t(m.role)));
        if (m.detail) txt.appendChild(el("p", "person-detail", t(m.detail)));
        li.appendChild(txt);
        ul.appendChild(li);
      });
      box.appendChild(ul);
    });
  }

  /* ----- formación ----- */

  function renderRoll(id, rows) {
    var ol = document.getElementById(id);
    if (!ol || !rows) return;
    ol.textContent = "";
    rows.forEach(function (r) {
      var li = el("li");
      li.appendChild(el("span", "roll-name", r[0]));
      li.appendChild(el("span", "roll-year", String(r[1])));
      ol.appendChild(li);
    });
  }

  function renderCounts() {
    var map = { phd: G.phd, licenciatura: G.licenciatura, postdocs: G.postdocs };
    document.querySelectorAll("[data-count]").forEach(function (n) {
      var list = map[n.getAttribute("data-count")];
      if (list) n.textContent = String(list.length);
    });
  }

  /* ----- financiamiento ----- */

  function renderFunding() {
    var dl = document.getElementById("funding-list");
    if (!dl || !G.funding) return;
    dl.textContent = "";
    G.funding.forEach(function (f) {
      var row = el("div", "fund");
      row.appendChild(el("dt", "fund-period", t(f.period)));
      var dd = el("dd", "fund-body");
      dd.appendChild(el("strong", "fund-source", t(f.source)));
      dd.appendChild(el("span", "fund-text", t(f.text)));
      row.appendChild(dd);
      dl.appendChild(row);
    });
  }

  /* ----- aplicar idioma y dibujar ----- */

  function apply() {
    root.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    document.querySelectorAll("[data-inspire]").forEach(function (a) {
      if (G.inspire) a.href = G.inspire;
    });
    document.querySelectorAll("[data-updated]").forEach(function (n) {
      if (G.updated) n.textContent = t(G.updated);
    });
    renderPeople();
    renderRoll("phd-list", G.phd);
    renderRoll("lic-list", G.licenciatura);
    renderRoll("postdoc-list", G.postdocs);
    renderCounts();
    renderFunding();
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-set-lang");
      try { window.localStorage.setItem("lang", lang); } catch (e) { /* no se recuerda la elección */ }
      try {
        var url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState(null, "", url);
      } catch (e) { /* la URL queda como estaba */ }
      apply();
    });
  });

  apply();
})();
