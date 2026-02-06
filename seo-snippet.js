// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.sheilajwood.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.sheilajwood.com/","title_tag":"Akashic Records Healing & Energy Healing | Sheila J Wood","meta_description":"Akashic Records Healing and Energy Healing Services for anxiety relief, emotional release, and release of blocking energy with Intuitive Healing Coach Sheila J Wood."},{"page_url":"https://www.sheilajwood.com/aboutme","title_tag":"Intuitive Healing Coach & Medium | Sheila J Wood","meta_description":"Intuitive Healing Coach and Spiritual Mediumship Healing with Akashic Records Healing, Energy Healing Services, and Emotional Release Therapy by Sheila J Wood, PhD."},{"page_url":"https://www.sheilajwood.com/services-offered","title_tag":"Energy Healing Services & Akashic Healing | Sheila J Wood","meta_description":"Transformative Healing Sessions, Energy Healing Services, Spiritual Mediumship Healing and Akashic Records Healing to release blocking energy and anxiety patterns."},{"page_url":"https://www.sheilajwood.com/services-offered/make-an-appointment","title_tag":"Book Transformative Healing Sessions | Sheila J Wood","meta_description":"Make an appointment for Transformative Healing Sessions, Akashic Records Healing, Emotional Release Therapy and Spiritual Mediumship Healing for anxiety relief."},{"page_url":"https://www.sheilajwood.com/services-offered/akashic-records","title_tag":"Akashic Records Healing & Spiritual Mediumship | Sheila J","meta_description":"Akashic Records Healing and Spiritual Mediumship Healing to access past life and soul lineage energy, release blocking energy, and transform relationships and beliefs."},{"page_url":"https://www.sheilajwood.com/services-offered/suggested-topics-to-explore","title_tag":"Emotional Release Therapy & Spiritual Guidance | Sheila J","meta_description":"Suggested Transformative Healing Sessions including Emotional Release Therapy, anxiety relief techniques, release of blocking energy, and spiritual guidance pathways."},{"page_url":"https://www.sheilajwood.com/services-offered/what-are-the-akashic-records","title_tag":"What Are the Akashic Records? Healing Insights | Sheila","meta_description":"Learn what the Akashic Records are and how Akashic Records Healing supports Energy Healing Services, Emotional Release Therapy, and anxiety relief techniques."},{"page_url":"https://www.sheilajwood.com/services-offered/how-the-process-works","title_tag":"How Akashic Records Healing Works | Sheila J Wood","meta_description":"Discover how Akashic Records Healing locates blocks at several layers of consciousness for release of blocking energy, anxiety relief, and Transformative Healing Sessions."},{"page_url":"https://www.sheilajwood.com/services-offered/faq","title_tag":"Akashic Records Healing FAQ | Sheila J Wood","meta_description":"FAQ on Akashic Records Healing, Energy Healing Services, Emotional Release Therapy, release of blocking energy, and accessing soul and ancestral line energy blocks."},{"page_url":"https://www.sheilajwood.com/waiting-for-elijah","title_tag":"Waiting for Elijah: A Walk Through Time | Sheila J Wood","meta_description":"Waiting for Elijah: A Walk Through Time explores metaphysical insights, soul journeys and emotional healing themes by Intuitive Healing Coach Sheila J Wood."},{"page_url":"https://www.sheilajwood.com/to-infinity-and-back","title_tag":"To Infinity and Back: Power of Mediumship & Akashic","meta_description":"To Infinity and Back: The Power of Mediumship and Akashic Healing shares Spiritual Mediumship Healing, Akashic Records Healing and soul lineage insights."},{"page_url":"https://www.sheilajwood.com/understanding-the-journey","title_tag":"Understanding the Journey: Metaphysical Food | Sheila","meta_description":"Understanding the Journey: Metaphysical Food for Thought offers insights on Akashic Records Healing, Energy Healing Services, and the soul’s spiritual evolution."},{"page_url":"https://www.sheilajwood.com/the-wisdom-of-yonck","title_tag":"The Wisdom of Yonck: Cosmic Awareness | Sheila J Wood","meta_description":"The Wisdom of Yonck: Messages From The Heartbeat of Cosmic Awareness illuminates spiritual growth, Energy Healing, and Transformative Healing Sessions."}],"keywords":["Akashic Records Healing","Intuitive Healing Coach","Energy Healing Services","Emotional Release Therapy","Anxiety Relief Techniques","Spiritual Mediumship Healing","Transformative Healing Sessions","Past Life access","release from ancestral line and soul lineage energy blocks","Release of blocking energy","Location of blocks at several layers of consciousness","To Infinity and Back: The Power of Mediumship and Akashic Healing","Understanding the Journey: Metaphysical Food for Thought","The Wisdom of Yonck: Messages From The Heartbeat of Cosmic Awareness","Waiting for Elijah: A Walk Through Time"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.sheilajwood.com/#professionalservice",
  "url": "https://www.sheilajwood.com/",
  "name": "Healthful Energetics",
  "alternateName": "Sheila J. Wood - Intuitive Healing Coach",
  "image": [
    "https://static.wixstatic.com/media/e2b633_506a79c2fb1e43a989ba9673f8a0c9c9%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/e2b633_506a79c2fb1e43a989ba9673f8a0c9c9%7Emv2.jpg",
    "https://static.wixstatic.com/media/e2b633_e508d7e671a44a10b44e2923c5190256~mv2.jpg/v1/fill/w_182,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12310509_914173828650786_4253538061580463015_n.jpg"
  ],
  "description": "Healthful Energetics is the practice of Sheila J Wood, PhD, an Intuitive Healing Coach, Energy Healer, Spiritual Medium, and Akashic Records Reader. She offers intuitive healing sessions, Akashic Records readings for expansion of consciousness and healing, mediumship, trauma recovery programs, and energy-clearing services to help clients release difficult emotions, reduce anxiety, clear emotional blocks, and discover their best path in life.",
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide (online sessions via Zoom)"
  },
  "provider": {
    "@type": "Person",
    "name": "Sheila J Wood",
    "additionalName": "Sheila J. Wood, PhD",
    "jobTitle": "Intuitive Healing Coach, Energy Healer, Spiritual Medium, Akashic Records Reader, Author",
    "url": "https://www.sheilajwood.com/aboutme",
    "image": "https://static.wixstatic.com/media/e2b633_e508d7e671a44a10b44e2923c5190256~mv2.jpg/v1/fill/w_182,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12310509_914173828650786_4253538061580463015_n.jpg",
    "description": "Sheila J Wood, PhD is an author and Intuitive Healing Coach. As an Energy Healer, Spiritual Medium and Akashic Records Reader, she provides a path for reconciliation of emotions around ancestral and past life events, helping clients release anxiety, clear emotional blocks, and transform their energy.",
    "email": "mailto:sjwood@twc.com",
    "sameAs": [
      "https://www.brainzmagazine.com/executive-contributor/sheila-jeanette-wood",
      "https://www.medium.com/@swood13777"
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Sheila J Wood"
  },
  "sameAs": [
    "https://www.brainzmagazine.com/executive-contributor/sheila-jeanette-wood",
    "https://www.medium.com/@swood13777"
  ],
  "serviceType": "Intuitive Healing Coaching and Akashic Records Readings",
  "offers": [
    {
      "@type": "Offer",
      "name": "Akashic Records for Expansion of Consciousness and Healing",
      "description": "Akashic Records readings to access soul records, understand how past life and ancestral events affect current situations, and clear or incorporate energies to release blocks, reduce anxiety, and support spiritual growth.",
      "url": "https://www.sheilajwood.com/services-offered/akashic-records"
    },
    {
      "@type": "Offer",
      "name": "Mediumship and Healing Sessions",
      "description": "30-minute or 90-minute mediumship and healing sessions to receive spiritual guidance, clear unwanted energy, and support emotional and spiritual well-being.",
      "url": "https://www.sheilajwood.com/services-offered/make-an-appointment"
    },
    {
      "@type": "Offer",
      "name": "10-Week Trauma Recovery Program",
      "description": "A multiweek trauma recovery program designed to release trapped emotions and psychic trauma, clear emotional blocks, and support a more balanced and energized life path.",
      "url": "https://www.sheilajwood.com/services-offered/make-an-appointment"
    },
    {
      "@type": "Offer",
      "name": "Suggested Topics to Explore Sessions",
      "description": "Customized sessions focused on areas such as spiritual path, Akashic connections, finding life purpose, removing blocks, spiritual guidance, pet consultation, finding a lost pet, clearing energetic causes of physical symptoms, depression, finances and abundance, lifestyle changes, and smoking cessation.",
      "url": "https://www.sheilajwood.com/services-offered/suggested-topics-to-explore"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Intuitive Healing and Akashic Records Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Akashic Records Readings",
        "url": "https://www.sheilajwood.com/services-offered/akashic-records"
      },
      {
        "@type": "Offer",
        "name": "Mediumship / Healing Sessions (30 or 90 minutes)",
        "url": "https://www.sheilajwood.com/services-offered/make-an-appointment"
      },
      {
        "@type": "Offer",
        "name": "10-Week Trauma Recovery Program",
        "url": "https://www.sheilajwood.com/services-offered/make-an-appointment"
      },
      {
        "@type": "Offer",
        "name": "Suggested Topics to Explore",
        "url": "https://www.sheilajwood.com/services-offered/suggested-topics-to-explore"
      }
    ]
  },
  "potentialAction": [
    {
      "@type": "Action",
      "name": "Book a Session",
      "target": "https://www.sheilajwood.com/services-offered/make-an-appointment"
    },
    {
      "@type": "Action",
      "name": "Free Consult",
      "target": "https://www.sheilajwood.com/contactme"
    }
  ],
  "brand": {
    "@type": "Brand",
    "name": "Healthful Energetics",
    "logo": "https://static.wixstatic.com/media/e2b633_506a79c2fb1e43a989ba9673f8a0c9c9%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/e2b633_506a79c2fb1e43a989ba9673f8a0c9c9%7Emv2.jpg"
  },
  "knowsAbout": [
    "Akashic Records",
    "Intuitive Healing",
    "Energy Healing",
    "Spiritual Mediumship",
    "Trauma Recovery",
    "Ancestral Healing",
    "Epigenetics and inherited emotional patterns",
    "Emotional Freedom Technique (EFT)",
    "Reiki",
    "Human Design",
    "Life Coaching",
    "Pet readings and communication",
    "Finding lost pets",
    "Spiritual growth and purpose",
    "Anxiety and depression relief",
    "Manifesting abundance and lifestyle changes"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
