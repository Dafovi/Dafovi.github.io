(function () {
  const i18n = window.PORTFOLIO_I18N;
  const supportedLanguages = i18n?.supportedLanguages || ["es", "en", "ja"];
  const defaultLanguage = i18n?.defaultLanguage || "en";
  const inferPageKey = () => {
    if (document.body.dataset.page) return document.body.dataset.page;
    const file = window.location.pathname.split("/").pop()?.replace(".html", "");
    return file && file !== "index" ? file : "home";
  };
  const pageKey = inferPageKey();

  const prepareI18nMarkup = () => {
    if (!i18n) return;
    document.querySelector(".skip-link")?.setAttribute("data-i18n", "skip");
    document.querySelector("[data-nav-toggle] span")?.setAttribute("data-i18n", "menu");
    document.querySelectorAll('.site-nav a[href$="#proyectos"]').forEach((link) => link.setAttribute("data-i18n", "navProjects"));
    document.querySelectorAll('.site-nav a[href$="#perfil"]').forEach((link) => link.setAttribute("data-i18n", "navProfile"));
    document.querySelectorAll('.site-nav a[href$="#contacto"]').forEach((link) => link.setAttribute("data-i18n", "navContact"));
    document.querySelectorAll("nav:not(.site-nav) a[href$='#proyectos']").forEach((link) => link.setAttribute("data-i18n", "navProjects"));
    document.querySelectorAll("nav:not(.site-nav) a[href$='#perfil']").forEach((link) => link.setAttribute("data-i18n", "navProfile"));
    document.querySelectorAll("nav:not(.site-nav) a[href$='#contacto']").forEach((link) => link.setAttribute("data-i18n", "navContact"));

    document.querySelectorAll(".site-nav").forEach((siteNav) => {
      if (siteNav.querySelector("[data-language-switcher]")) return;
      const switcher = document.createElement("div");
      switcher.className = "language-switcher";
      switcher.dataset.languageSwitcher = "";
      switcher.setAttribute("aria-label", "Selector de idioma");
      switcher.innerHTML = `
        <button type="button" data-lang-option="es"><span class="flag flag-es" aria-hidden="true"></span><span>ES</span></button>
        <button type="button" data-lang-option="en"><span class="flag flag-en" aria-hidden="true"></span><span>EN</span></button>
        <button type="button" data-lang-option="ja"><span class="flag flag-ja" aria-hidden="true"></span><span>JP</span></button>
      `;
      siteNav.querySelector(".status-dot")?.before(switcher);
    });

    const pageTranslations = i18n.pages?.[pageKey]?.text;
    if (!pageTranslations || pageKey === "home") return;

    document.querySelector(".case-kicker")?.setAttribute("data-i18n", "kicker");
    if (pageTranslations.title) document.querySelector(".case-title")?.setAttribute("data-i18n", "title");
    document.querySelector(".case-summary")?.setAttribute("data-i18n", "summary");

    document.querySelectorAll(".case-meta dt").forEach((term) => {
      const value = term.textContent.trim().toLowerCase();
      if (value === "stack") term.setAttribute("data-i18n", "stack");
      if (value === "estado") term.setAttribute("data-i18n", "status");
      if (value === "fuente") term.setAttribute("data-i18n", "source");
      if (value === "enlace") term.setAttribute("data-i18n", "link");
      if (value === "descarga") term.setAttribute("data-i18n", "download");
      if (value === "aporte") term.setAttribute("data-i18n", "contribution");
    });

    document.querySelectorAll(".case-section").forEach((section) => {
      const heading = section.querySelector("h2");
      const body = section.querySelector("p");
      const value = heading?.textContent.trim().toLowerCase();
      if (value === "contexto") {
        heading.setAttribute("data-i18n", "context");
        body?.setAttribute("data-i18n", "contextBody");
      }
      if (value === "alcance") {
        heading.setAttribute("data-i18n", "scope");
        body?.setAttribute("data-i18n", "scopeBody");
      }
      if (value === "reto") {
        heading.setAttribute("data-i18n", "challenge");
        body?.setAttribute("data-i18n", "challengeBody");
      }
      if (value === "aporte") {
        heading.setAttribute("data-i18n", "contribution");
        body?.setAttribute("data-i18n", "contributionBody");
      }
      if (value === "pendientes") heading.setAttribute("data-i18n", "pending");
    });

    document.querySelectorAll(".case-nav a").forEach((link) => {
      const value = link.textContent.trim().toLowerCase();
      if (value.includes("volver")) link.setAttribute("data-i18n", "back");
      if (value.includes("archivo")) link.setAttribute("data-i18n", "archive");
      if (value.includes("proyecto anterior")) link.setAttribute("data-i18n", "previous");
      if (value.includes("siguiente proyecto")) link.setAttribute("data-i18n", "next");
    });
  };

  const normalizeLanguage = (language) => {
    const shortCode = String(language || "").toLowerCase().split("-")[0];
    return supportedLanguages.includes(shortCode) ? shortCode : defaultLanguage;
  };

  const getBrowserLanguage = () => {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    const match = languages
      .map((language) => String(language || "").toLowerCase().split("-")[0])
      .find((language) => supportedLanguages.includes(language));
    return match || defaultLanguage;
  };

  const readTranslation = (key, language) => {
    const page = i18n?.pages?.[pageKey]?.text?.[key];
    const common = i18n?.pages?.common?.text?.[key];
    const shared = i18n?.pages?.caseShared?.text?.[key];
    const entry = page || common || shared;
    return entry?.[language] || entry?.[defaultLanguage] || entry?.es || "";
  };

  const applyLanguage = (language) => {
    if (!i18n) return;
    const activeLanguage = normalizeLanguage(language);
    const page = i18n.pages?.[pageKey];

    document.documentElement.lang = activeLanguage === "ja" ? "ja" : activeLanguage;

    if (page?.title?.[activeLanguage]) document.title = page.title[activeLanguage];
    const description = document.querySelector('meta[name="description"]');
    if (description && page?.description?.[activeLanguage]) {
      description.setAttribute("content", page.description[activeLanguage]);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = readTranslation(element.dataset.i18n, activeLanguage);
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = readTranslation(element.dataset.i18nHtml, activeLanguage);
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attribute, key] = pair.split(":").map((part) => part.trim());
        const value = readTranslation(key, activeLanguage);
        if (attribute && value) element.setAttribute(attribute, value);
      });
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const isActive = button.dataset.langOption === activeLanguage;
      const label = i18n.labels?.[button.dataset.langOption]?.name || button.dataset.langOption;
      button.setAttribute("aria-pressed", String(isActive));
      button.setAttribute("aria-label", label);
    });

    document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
      const label = readTranslation("languageSelector", activeLanguage);
      if (label) switcher.setAttribute("aria-label", label);
    });

    try {
      localStorage.setItem("portfolio-language", activeLanguage);
    } catch (_error) {
      /* Local storage can be unavailable in privacy modes. */
    }
  };

  prepareI18nMarkup();
  const savedLanguage = (() => {
    try {
      return localStorage.getItem("portfolio-language");
    } catch (_error) {
      return null;
    }
  })();

  applyLanguage(savedLanguage || getBrowserLanguage());

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  const header = document.querySelector("[data-site-header]");

  if (navToggle && nav) {
    const focusableSelector = "a[href], button:not([disabled])";

    const closeNav = () => {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    };

    const openNav = () => {
      navToggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
      document.body.classList.add("nav-open");
      const firstItem = nav.querySelector(focusableSelector);
      if (firstItem) firstItem.focus();
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
        navToggle.focus();
      }
    });
  }

  if (header) {
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal-on-scroll");

  if (!reducedMotion && "IntersectionObserver" in window) {
    document.body.classList.add("can-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
