(function () {
  const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
  const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const storeBadges = Array.from(document.querySelectorAll("[data-store-badge]"));

  const storageKey = "nodo-home-language";
  const sessionVideoKey = "nodo-home-video-dismissed";
  const supportedUiLanguages = ["en", "fr"];
  const preparedLanguages = ["en", "fr", "es", "ar"];

  const i18n = {
    en: {
      headerLogin: "Log in",
      headerSignup: "Sign up",
      heroKicker: "Trusted local marketplace",
      heroTitle: "Find & book trusted local services.",
      heroText:
        "NODO connects customers with trusted providers across Quebec and Canada. Search by service type and filter results with verified requirements.",
      servicePlumbing: "Plumbing",
      serviceCleaning: "Cleaning",
      serviceLocksmith: "Locksmith",
      serviceConstruction: "Construction",
      rolesTitle: "One platform, three roles",
      rolesText:
        "NODO supports discovery, coordination, and execution with a clear experience for every role in the service flow.",
      customerLabel: "Customer",
      customerBullet1: "Find services faster",
      customerBullet2: "Connect with trusted providers",
      customerBullet3: "Enjoy a simple and clear process",
      customerBullet4: "Access a more professional experience",
      providerLabel: "Providers",
      providerBullet1: "Show your services professionally",
      providerBullet2: "Reach more potential clients",
      providerBullet3: "Grow your visibility",
      providerBullet4: "Be part of a modern service platform",
      workerLabel: "Workers",
      workerBullet1: "Accept opportunities when providers need support",
      workerBullet2: "Work with more flexibility",
      workerBullet3: "Join the service flow in a structured way",
      workerBullet4: "Build visibility through the platform",
      howTitle: "How it works",
      howSubtitle: "Find trusted providers in three simple steps.",
      howStep1Title: "Choose a service",
      howStep1Text: "Browse categories and select the service you need.",
      howStep2Title: "Request confidently",
      howStep2Text: "Compare verified providers and submit your request.",
      howStep3Title: "Track & close",
      howStep3Text: "Follow progress, complete the service and leave a review.",
      getApp: "Get the app",
      getAppText: "Book and manage your services quickly with NODO on mobile.",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
      footerContact: "Contact",
      footerRights: "All rights reserved.",
      soundOff: "Sound off",
      soundOn: "Sound on",
    },
    fr: {
      headerLogin: "Connexion",
      headerSignup: "Inscription",
      heroKicker: "Place de marche locale de confiance",
      heroTitle: "Trouvez et reservez des services locaux de confiance.",
      heroText:
        "NODO connecte les clients avec des prestataires de confiance au Quebec et au Canada. Recherchez par type de service et filtrez avec des exigences verifiees.",
      servicePlumbing: "Plomberie",
      serviceCleaning: "Menage",
      serviceLocksmith: "Serrurerie",
      serviceConstruction: "Construction",
      rolesTitle: "Une plateforme, trois roles",
      rolesText:
        "NODO soutient la decouverte, la coordination et l'execution avec une experience claire pour chaque role du parcours de service.",
      customerLabel: "Clients",
      customerBullet1: "Trouvez des services plus rapidement",
      customerBullet2: "Connectez-vous avec des prestataires de confiance",
      customerBullet3: "Profitez d'un processus simple et clair",
      customerBullet4: "Accedez a une experience plus professionnelle",
      providerLabel: "Prestataires",
      providerBullet1: "Presentez vos services professionnellement",
      providerBullet2: "Touchez plus de clients potentiels",
      providerBullet3: "Developpez votre visibilite",
      providerBullet4: "Faites partie d'une plateforme moderne de services",
      workerLabel: "Travailleurs",
      workerBullet1: "Acceptez des opportunites quand les prestataires ont besoin de soutien",
      workerBullet2: "Travaillez avec plus de flexibilite",
      workerBullet3: "Integrez le flux de service de maniere structuree",
      workerBullet4: "Construisez votre visibilite via la plateforme",
      howTitle: "Comment ca marche",
      howSubtitle: "Trouvez des prestataires de confiance en trois etapes simples.",
      howStep1Title: "Choisissez un service",
      howStep1Text: "Parcourez les categories et selectionnez le service souhaite.",
      howStep2Title: "Demandez en confiance",
      howStep2Text: "Comparez des prestataires verifies et envoyez votre demande.",
      howStep3Title: "Suivez et finalisez",
      howStep3Text: "Suivez la progression, terminez le service et laissez un avis.",
      getApp: "Obtenez l'application",
      getAppText: "Reservez et gerez vos services rapidement avec NODO sur mobile.",
      footerTerms: "Conditions",
      footerPrivacy: "Confidentialite",
      footerContact: "Contact",
      footerRights: "Tous droits reserves.",
      soundOff: "Son desactive",
      soundOn: "Son active",
    },
  };

  const videoSources = {
    en: [null, null, null, null],
    fr: [null, null, null, null],
    es: [null, null, null, null],
    ar: [null, null, null, null],
  };

  function detectLanguage() {
    const saved = localStorage.getItem(storageKey);
    if (saved && preparedLanguages.includes(saved)) return saved;
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (preparedLanguages.includes(browser)) return browser;
    return "en";
  }

  function getUiLanguage(lang) {
    return supportedUiLanguages.includes(lang) ? lang : "en";
  }

  function setStoreBadges(lang) {
    const apple = lang === "fr" ? "/static/icons/AppleFR.svg" : "/static/icons/AppleEN.svg";
    const google = lang === "fr" ? "/static/icons/GetItOnGoogleFR.svg" : "/static/icons/GetItOnGoogleEN.svg";
    storeBadges.forEach((img) => {
      if (img.dataset.storeBadge && img.dataset.storeBadge.startsWith("apple")) img.src = apple;
      if (img.dataset.storeBadge && img.dataset.storeBadge.startsWith("google")) img.src = google;
    });
  }

  function applyLanguage(lang) {
    const uiLang = getUiLanguage(lang);
    const dict = i18n[uiLang];

    document.documentElement.lang = uiLang;
    i18nNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key]) node.textContent = dict[key];
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.langOption === uiLang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    setStoreBadges(uiLang);

    const soundButton = document.getElementById("floating-video-sound");
    if (soundButton) soundButton.textContent = dict.soundOff;
  }

  function initVideo(lang) {
    if (sessionStorage.getItem(sessionVideoKey) === "1") return;

    const panel = document.getElementById("floating-video");
    const video = document.getElementById("floating-video-player");
    const closeButton = document.getElementById("floating-video-close");
    const soundButton = document.getElementById("floating-video-sound");
    if (!panel || !video || !closeButton || !soundButton) return;

    const languageVideos = videoSources[lang] || videoSources.en;
    const selectedVideo = languageVideos.find(Boolean);
    if (!selectedVideo) return;

    video.src = selectedVideo;
    panel.hidden = false;
    video.play().catch(() => {});

    closeButton.addEventListener("click", () => {
      panel.hidden = true;
      video.pause();
      sessionStorage.setItem(sessionVideoKey, "1");
    });

    soundButton.addEventListener("click", () => {
      const willUnmute = video.muted;
      video.muted = !willUnmute;
      soundButton.setAttribute("aria-pressed", willUnmute ? "true" : "false");
      const dict = i18n[getUiLanguage(lang)];
      soundButton.textContent = willUnmute ? dict.soundOn : dict.soundOff;
    });
  }

  function initDisabledLinks() {
    document.querySelectorAll(".is-disabled-link[aria-disabled='true']").forEach((link) => {
      link.addEventListener("click", (event) => event.preventDefault());
    });
  }

  const initialLanguage = detectLanguage();
  applyLanguage(initialLanguage);
  initVideo(initialLanguage);
  initDisabledLinks();

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langOption;
      localStorage.setItem(storageKey, lang);
      applyLanguage(lang);
    });
  });
})();
