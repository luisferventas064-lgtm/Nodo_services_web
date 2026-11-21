(function () {
  const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
  const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const i18nAttributes = {
    alt: Array.from(document.querySelectorAll("[data-i18n-alt]")),
    ariaLabel: Array.from(document.querySelectorAll("[data-i18n-aria-label]")),
    content: Array.from(document.querySelectorAll("[data-i18n-content]")),
  };
  const storeBadges = Array.from(document.querySelectorAll("[data-store-badge]"));

  const storageKey = "nodo-home-language";
  const dismissedVideoKey = "nodo-home-video-dismissed";
  const supportedUiLanguages = ["en", "fr"];

  const i18n = {
    en: {
      pageTitle: "NODO | Find & Book Trusted Services",
      metaDescription:
        "NODO connects customers with trusted service providers across Quebec and Canada.",
      headerLogin: "Log in",
      headerSignup: "Sign up",
      homeLabel: "NODO home",
      languageSelector: "Language selector",
      logoRevealMessage: "Coming Soon",
      heroKicker: "Trusted local marketplace",
      heroTitle: "Find & book trusted local services.",
      heroText:
        "NODO connects customers with trusted providers across Quebec and Canada. Search by service type and filter results with verified requirements.",
      teamImage: "NODO team",
      popularServices: "Popular services",
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
      howStepsLabel: "How it works steps",
      howStep1Title: "Choose a service",
      howStep1Text: "Browse categories and select the service you need.",
      howStep2Title: "Request confidently",
      howStep2Text: "Compare verified providers and submit your request.",
      howStep3Title: "Track & close",
      howStep3Text: "Follow progress, complete the service and leave a review.",
      getApp: "Get the app",
      getAppText: "Book and manage your services quickly with NODO on mobile.",
      appStoreLabel: "Download on the App Store",
      googlePlayLabel: "Get it on Google Play",
      facebookLabel: "Visit NODO Services on Facebook",
      instagramLabel: "Visit NODO Services on Instagram",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
      footerContact: "Contact",
      footerRights: "All rights reserved.",
      videoLabel: "NODO video",
      watchVideo: "Watch NODO video",
      enableSound: "Enable sound",
      closeVideoLabel: "Close video",
    },
    fr: {
      pageTitle: "NODO | Trouvez et réservez des services de confiance",
      metaDescription:
        "NODO met en relation les clients avec des prestataires de confiance partout au Québec et au Canada.",
      headerLogin: "Se connecter",
      headerSignup: "S'inscrire",
      homeLabel: "Accueil NODO",
      languageSelector: "Sélecteur de langue",
      logoRevealMessage: "Bientôt disponible",
      heroKicker: "Place de marché locale de confiance",
      heroTitle: "Trouvez et réservez des services locaux de confiance.",
      heroText:
        "NODO met en relation les clients avec des prestataires de confiance partout au Québec et au Canada. Recherchez par type de service et filtrez les résultats selon des critères vérifiés.",
      teamImage: "Équipe NODO",
      popularServices: "Services populaires",
      servicePlumbing: "Plomberie",
      serviceCleaning: "Nettoyage",
      serviceLocksmith: "Serrurerie",
      serviceConstruction: "Construction",
      rolesTitle: "Une plateforme, trois rôles.",
      rolesText:
        "NODO soutient la découverte, la coordination et l’exécution avec une expérience claire pour chaque rôle du flux de service.",
      customerLabel: "Client",
      customerBullet1: "Trouvez des services plus rapidement",
      customerBullet2: "Connectez-vous à des prestataires de confiance",
      customerBullet3: "Profitez d’un processus simple et clair",
      customerBullet4: "Accédez à une expérience plus professionnelle",
      providerLabel: "Prestataires",
      providerBullet1: "Présentez vos services de façon professionnelle",
      providerBullet2: "Rejoignez plus de clients potentiels",
      providerBullet3: "Développez votre visibilité",
      providerBullet4: "Faites partie d’une plateforme de services moderne",
      workerLabel: "Travailleurs",
      workerBullet1:
        "Acceptez des opportunités lorsque les prestataires ont besoin de soutien",
      workerBullet2: "Travaillez avec plus de flexibilité",
      workerBullet3: "Intégrez le flux de service de manière structurée",
      workerBullet4: "Développez votre visibilité grâce à la plateforme",
      howTitle: "Comment ça marche",
      howSubtitle: "Trouvez des prestataires de confiance en trois étapes simples.",
      howStepsLabel: "Étapes du fonctionnement",
      howStep1Title: "Choisissez un service",
      howStep1Text:
        "Parcourez les catégories et sélectionnez le service dont vous avez besoin.",
      howStep2Title: "Demandez en toute confiance",
      howStep2Text: "Comparez des prestataires vérifiés et soumettez votre demande.",
      howStep3Title: "Suivre et confirmer",
      howStep3Text:
        "Suivez l’avancement, finalisez le service et laissez un avis.",
      getApp: "Obtenir l'application",
      getAppText:
        "Réservez et gérez vos services rapidement avec NODO sur mobile.",
      appStoreLabel: "Télécharger dans l’App Store",
      googlePlayLabel: "Disponible sur Google Play",
      facebookLabel: "Voir NODO Services sur Facebook",
      instagramLabel: "Voir NODO Services sur Instagram",
      footerTerms: "Conditions",
      footerPrivacy: "Confidentialité",
      footerContact: "Contact",
      footerRights: "Tous droits réservés.",
      videoLabel: "Vidéo NODO",
      watchVideo: "Voir la vidéo NODO",
      enableSound: "Activer le son",
      closeVideoLabel: "Fermer la vidéo",
    },
  };

  const videoSources = {
    en: "/static/videos/nodo-promo-en.mp4",
    fr: "/static/videos/nodo-promo-fr.mp4",
  };

  function detectLanguage() {
    let saved = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch (error) {
      saved = null;
    }
    if (saved && supportedUiLanguages.includes(saved)) return saved;

    const browserLanguages =
      Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language || "en"];
    const preferred = browserLanguages
      .map((language) => language.slice(0, 2).toLowerCase())
      .find((language) => supportedUiLanguages.includes(language));
    if (preferred) return preferred;
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
    i18nAttributes.alt.forEach((node) => {
      const key = node.getAttribute("data-i18n-alt");
      if (dict[key]) node.setAttribute("alt", dict[key]);
    });
    i18nAttributes.ariaLabel.forEach((node) => {
      const key = node.getAttribute("data-i18n-aria-label");
      if (dict[key]) node.setAttribute("aria-label", dict[key]);
    });
    i18nAttributes.content.forEach((node) => {
      const key = node.getAttribute("data-i18n-content");
      if (dict[key]) node.setAttribute("content", dict[key]);
    });
    const heroTitle = document.querySelector(".nodo-hero-redesign-title");
    if (heroTitle) {
      heroTitle.classList.toggle(
        "nodo-hero-redesign-title--fr",
        uiLang === "fr"
      );
    }
    languageButtons.forEach((button) => {
      const active = button.dataset.langOption === uiLang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    setStoreBadges(uiLang);

    setVideoLanguage(uiLang);
  }

  function setVideoLanguage(lang) {
    const panel = document.getElementById("floating-video");
    const video = document.getElementById("floating-video-player");
    if (!panel || !video) return;

    const source = videoSources[getUiLanguage(lang)];
    const currentPath = video.currentSrc || video.src;
    if (currentPath.endsWith(source)) return;

    video.pause();
    video.autoplay = !panel.hidden;
    video.muted = true;
    video.src = source;
    video.load();
    if (!panel.hidden) playVideo(video);
  }

  function playVideo(video) {
    const soundButton = document.getElementById("floating-video-enable-sound");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.autoplay = false;
      video.pause();
      return;
    }

    video.muted = false;
    if (soundButton) soundButton.hidden = true;

    try {
      const playback = video.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {
          video.muted = true;
          if (soundButton) soundButton.hidden = false;
          const mutedPlayback = video.play();
          if (mutedPlayback && typeof mutedPlayback.catch === "function") {
            mutedPlayback.catch(() => {
              // Native controls remain available when both autoplay attempts fail.
            });
          }
        });
      }
    } catch (error) {
      video.muted = true;
      if (soundButton) soundButton.hidden = false;
      const mutedPlayback = video.play();
      if (mutedPlayback && typeof mutedPlayback.catch === "function") {
        mutedPlayback.catch(() => {
          // Native controls remain available when both autoplay attempts fail.
        });
      }
    }
  }

  function initVideo() {
    const panel = document.getElementById("floating-video");
    const video = document.getElementById("floating-video-player");
    const openButton = document.getElementById("floating-video-open");
    const closeButton = document.getElementById("floating-video-close");
    const soundButton = document.getElementById("floating-video-enable-sound");
    if (!panel || !video || !openButton || !closeButton || !soundButton) return;

    const wasDismissed = () => {
      try {
        return sessionStorage.getItem(dismissedVideoKey) === "1";
      } catch (error) {
        return false;
      }
    };

    const closeVideo = () => {
      video.pause();
      video.autoplay = false;
      panel.hidden = true;
      openButton.setAttribute("aria-expanded", "false");
      openButton.hidden = false;
      soundButton.hidden = true;
      openButton.focus();
      try {
        sessionStorage.setItem(dismissedVideoKey, "1");
      } catch (error) {
        // The panel still remains closed for the current page.
      }
    };

    openButton.addEventListener("click", () => {
      panel.hidden = false;
      openButton.setAttribute("aria-expanded", "true");
      openButton.hidden = true;
      video.autoplay = true;
      closeButton.focus();
      playVideo(video);
    });

    soundButton.addEventListener("click", () => {
      video.muted = false;
      soundButton.hidden = true;
      if (!video.paused) return;
      const playback = video.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {
          video.muted = true;
          soundButton.hidden = false;
        });
      }
    });

    video.addEventListener("volumechange", () => {
      if (!video.muted) soundButton.hidden = true;
    });

    closeButton.addEventListener("click", closeVideo);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) closeVideo();
    });

    if (wasDismissed()) {
      video.pause();
      video.autoplay = false;
      return;
    }
    panel.hidden = false;
    openButton.setAttribute("aria-expanded", "true");
    openButton.hidden = true;
    video.autoplay = true;
    playVideo(video);
  }

  function initDisabledLinks() {
    document.querySelectorAll(".is-disabled-link[aria-disabled='true']").forEach((link) => {
      link.addEventListener("click", (event) => event.preventDefault());
    });
  }

  const initialLanguage = detectLanguage();
  applyLanguage(initialLanguage);
  initVideo();
  initDisabledLinks();

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langOption;
      try {
        localStorage.setItem(storageKey, lang);
      } catch (error) {
        // The selected language still applies for the current page.
      }
      applyLanguage(lang);
    });
  });
})();
