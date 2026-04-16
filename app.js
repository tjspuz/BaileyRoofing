const imageLibrary = {
  serviceOne: "https://le-cdn.hibuwebsites.com/41fb6b5e468d4e9692c820c749f5c9f8/dms3rep/multi/opt/hero4-558w.jpg",
  serviceTwo: "https://le-cdn.hibuwebsites.com/41fb6b5e468d4e9692c820c749f5c9f8/dms3rep/multi/opt/sp6-539w.jpg",
  serviceThree: "https://le-cdn.hibuwebsites.com/41fb6b5e468d4e9692c820c749f5c9f8/dms3rep/multi/opt/sp5-539w.jpg",
  projectOne: "https://le-cdn.hibuwebsites.com/41fb6b5e468d4e9692c820c749f5c9f8/dms3rep/multi/opt/ga2-1920w.jpg",
  projectTwo: "https://le-cdn.hibuwebsites.com/41fb6b5e468d4e9692c820c749f5c9f8/dms3rep/multi/opt/gal3-1920w.jpg",
  projectThree: "https://le-cdn.hibuwebsites.com/41fb6b5e468d4e9692c820c749f5c9f8/dms3rep/multi/opt/gal1-1920w.jpg"
};

const serviceArea = {
  address: "10110 Dennis Dr, Urbandale, Iowa 50322",
  lat: 41.61595,
  lng: -93.7615,
  radiusMiles: 66,
  radiusMeters: 106217,
  initialZoom: 7,
  googleMapsUrl: "https://www.google.com/maps?q=10110+Dennis+Dr,+Urbandale,+IA+50322"
};

const siteData = {
  reviews: [
    {
      quote: "Bailey Roofing was responsive, professional, and easy to work with throughout the project.",
      author: "Sample customer",
      company: "Commercial property owner"
    },
    {
      quote: "The crew communicated clearly and handled the work with minimal disruption to our building operations.",
      author: "Sample customer",
      company: "Facilities manager"
    },
    {
      quote: "We appreciated the quick response and practical recommendations for our repair needs.",
      author: "Sample customer",
      company: "Industrial client"
    },
    {
      quote: "The process was straightforward from estimate through completion.",
      author: "Sample customer",
      company: "Property manager"
    }
  ],
  homePanels: [
    {
      title: "Get Our Roofing Services at Affordable Rates",
      summary:
        "If the roof of your commercial property is damaged, call Bailey Roofing Contractors Inc today! We provide all kinds of roofing services for commercial and industrial properties at competitive rates. You can rely on us for 24/7 emergency services too!",
      image: imageLibrary.serviceTwo,
      imageAlt: "Roofing services",
      href: "services.html",
      ctaLabel: "Learn More"
    },
    {
      title: "Awards We've Received for Our Roofing Services",
      summary:
        "We're fully licensed, insured, bonded and have a manufacturer's certification. In recognition of our service, we've received many awards like the Firestone President's Club. Count on us to work with you from start to finish.",
      image: imageLibrary.serviceOne,
      imageAlt: "Roofing services awards",
      href: "awards.html",
      ctaLabel: "Learn More"
    },
    {
      title: "Leading Company in the Roofing Industry",
      summaryHtml:
        'Our locally-owned business has been serving the Iowa and Midwest area for over 29 years with quality roofing services. Due to our excellent services, we have become a leader in the roofing industry. <a href="contact.html">Contact us today</a> for our roofing services!',
      image: imageLibrary.projectThree,
      imageAlt: "Leading roofing company",
      href: "about.html",
      ctaLabel: "Learn More"
    }
  ]
};

function renderHeader() {
  const root = document.querySelector("#site-header");
  if (!root) return;

  const page = document.body.dataset.page;
  const navItems = [
    ["home", "Home", "index.html"],
    ["services", "Commercial & Industrial", "services.html"],
    ["projects", "Project Gallery", "projects.html"],
    ["awards", "Awards", "awards.html"],
    ["about", "About Us", "about.html"],
    ["reviews", "Reviews", "reviews.html"],
    ["contact", "Contact", "contact.html"]
  ];

  const nav = navItems
    .map(([key, label, href]) => {
      const activeClass = page === key ? "is-active" : "";
      const current = page === key ? ' aria-current="page"' : "";
      return `<a href="${href}" class="${activeClass}"${current}>${label}</a>`;
    })
    .join("");

  root.innerHTML = `
    <header class="site-header">
      <div class="site-header__main">
        <div class="shell">
          <a class="brand" href="index.html" aria-label="Bailey Roofing home">
            <img
              class="brand__logo"
              src="bailyroofinglogo.png"
              alt="Bailey Roofing Contractors Inc"
            >
          </a>
          <div class="header-contact">
            <strong>515-253-0191</strong>
            <span>Serving the Central Iowa Area</span>
          </div>
        </div>
      </div>
      <div class="site-header__nav">
        <div class="shell">
          <nav class="nav" aria-label="Primary">${nav}</nav>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const root = document.querySelector("#site-footer");
  if (!root) return;

  root.innerHTML = `
    <section class="footer-contact-section">
      <div class="shell footer-contact-grid">
        <article class="footer-panel footer-panel--form">
          <p class="eyebrow">515-253-0191</p>
          <h2>Leave Us a Message</h2>
          <p class="footer-panel__subhead">Contact Us</p>
          <form class="estimate-form estimate-form--compact">
            <div class="form-grid form-grid--compact">
              <label>
                Name:
                <input type="text" name="name" required>
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" required>
              </label>
              <label>
                Email:
                <input type="email" name="email" required>
              </label>
              <label>
                Address of Property:
                <input type="text" name="address">
              </label>
              <label>
                Type of Service:
                <select name="service">
                  <option>New Construction</option>
                  <option>Reroof</option>
                  <option>Survey</option>
                  <option>Leak / Repair</option>
                </select>
              </label>
              <label class="form-grid__full">
                Additional Comments Box:
                <textarea name="message" rows="4"></textarea>
              </label>
            </div>
            <div class="form-actions">
              <button class="button button--primary" type="submit">Submit</button>
              <p class="form-status" aria-live="polite"></p>
            </div>
          </form>
        </article>
        <article class="footer-panel footer-panel--info">
          <p class="eyebrow">Call Us Today</p>
          <h2>Contact Us</h2>
          <div class="footer-contact-card">
            <p class="subheader subheader--compact">Bailey Roofing Contractors Inc</p>
            <p>10110 Dennis Dr<br>Urbandale, Iowa 50322</p>
            <p>Tel: <a href="tel:15152530191">515-253-0191</a><br>Fax: 515-253-0206</p>
            <p><a href="mailto:baileyroofing@baileyroofing.com">baileyroofing@baileyroofing.com</a></p>
            <div class="office-hours">
              <p class="subheader subheader--compact">Office Hours</p>
              <p>Mon - Fri: 8:00 am - 4:30 pm</p>
              <p>Sat - Sun: Closed</p>
              <p>24/7 emergency services are available.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="footer-map-section">
      <div class="shell">
        <article class="map-card map-card--footer">
          <div class="map-card__header">
            <p class="eyebrow">Our Service Area</p>
            <h2>Central Iowa service area map</h2>
          </div>
          <div class="map-embed">
            <div id="service-area-map" class="map-canvas" aria-label="Bailey Roofing service area map"></div>
          </div>
        </article>
      </div>
    </section>
    <footer class="site-footer">
      <div class="shell footer-legal">
        <p>
          <a href="https://policies.hibuwebsites.com/privacy-policy">Privacy Policy</a> |
          <a href="https://policies.hibuwebsites.com/cookie-policy">Do Not Share My Information</a> |
          <a href="https://policies.hibuwebsites.com/conditions-of-use">Conditions of Use</a> |
          <a href="https://policies.hibuwebsites.com/infringement-policy">Notice and Take Down Policy</a> |
          <a href="https://policies.hibuwebsites.com/accessibility-statement">Website Accessibility Policy</a>
        </p>
        <p>© 2026 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
      </div>
    </footer>
  `;
}

function renderCardVisual(item) {
  if (item.image) {
    return `
      <div class="card__visual">
        <img class="card__image" src="${item.image}" alt="${item.imageAlt || item.title}">
      </div>
    `;
  }

  return '<div class="card__visual" aria-hidden="true"></div>';
}

function createCard(item) {
  const actionMarkup = item.href
    ? `<div class="card__actions"><a class="button button--primary button--small" href="${item.href}">${item.ctaLabel || "Learn More"}</a></div>`
    : "";

  return `
    <article class="card">
      ${renderCardVisual(item)}
      <div>
        <h3>${item.title}</h3>
        <p>${item.summaryHtml || item.summary}</p>
      </div>
      ${actionMarkup}
    </article>
  `;
}

function createReviewCard(item) {
  return `
    <article class="review-card">
      <blockquote>“${item.quote}”</blockquote>
      <footer>${item.author} · ${item.company}</footer>
    </article>
  `;
}

function mountCollection(selector, items, renderer, limit) {
  document.querySelectorAll(selector).forEach((node) => {
    const collection = typeof limit === "number" ? items.slice(0, limit) : items;
    node.innerHTML = collection.map(renderer).join("");
  });
}

function wireForms() {
  document.querySelectorAll(".estimate-form").forEach((form) => {
    const status = form.querySelector(".form-status") || form.querySelector("#form-status");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (status) {
        status.textContent =
          "This form is not connected yet. The next step is wiring it to your preferred email or CRM workflow.";
      }
    });
  });
}

function wireGallery() {
  const modal = document.querySelector("#gallery-modal");
  const modalImage = document.querySelector("#gallery-modal-image");
  const closeButton = document.querySelector("#gallery-modal-close");
  const triggers = document.querySelectorAll("[data-gallery-image]");

  if (!modal || !modalImage || !triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      modalImage.src = trigger.dataset.galleryImage;
      modalImage.alt = trigger.dataset.galleryAlt || "Project image";
      modal.removeAttribute("hidden");
      document.body.classList.add("modal-open");
    });
  });

  function closeModal() {
    modal.setAttribute("hidden", "hidden");
    modalImage.src = "";
    modalImage.alt = "";
    document.body.classList.remove("modal-open");
  }

  closeButton?.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hasAttribute("hidden")) closeModal();
  });
}

function loadStylesheetOnce(id, href) {
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function loadScriptOnce(id, src) {
  const existing = document.getElementById(id);
  if (existing) {
    if (existing.dataset.loaded === "true") return Promise.resolve();

    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load map script.")), {
        once: true
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.defer = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    script.addEventListener("error", () => reject(new Error("Failed to load map script.")), {
      once: true
    });
    document.head.appendChild(script);
  });
}

async function wireMap() {
  const canvas = document.querySelector("#service-area-map");
  if (!canvas || canvas.dataset.ready === "true") return;

  loadStylesheetOnce("leaflet-stylesheet", "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");

  try {
    await loadScriptOnce("leaflet-script", "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js");
  } catch (error) {
    canvas.classList.add("map-canvas--fallback");
    canvas.innerHTML = '<p class="map-fallback">The interactive map could not load right now. Use the Google Maps link below.</p>';
    return;
  }

  if (!window.L) {
    canvas.classList.add("map-canvas--fallback");
    canvas.innerHTML = '<p class="map-fallback">The interactive map could not load right now. Use the Google Maps link below.</p>';
    return;
  }

  const map = window.L.map(canvas, {
    center: [serviceArea.lat, serviceArea.lng],
    zoom: serviceArea.initialZoom,
    scrollWheelZoom: true,
    dragging: true,
    doubleClickZoom: true,
    boxZoom: true,
    keyboard: true,
    zoomControl: true,
    attributionControl: true
  });

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const center = window.L.latLng(serviceArea.lat, serviceArea.lng);
  const radiusCircle = window.L.circle(center, {
    color: "#032d7b",
    weight: 2,
    fillColor: "#032d7b",
    fillOpacity: 0.14,
    radius: serviceArea.radiusMeters,
    interactive: false
  }).addTo(map);

  const marker = window.L.marker(center).addTo(map);
  marker.bindPopup(
    "<strong>Bailey Roofing Contractors Inc</strong><br>10110 Dennis Dr<br>Urbandale, Iowa 50322"
  );
  marker.openPopup();

  const bounds = radiusCircle.getBounds();
  map.fitBounds(bounds, { padding: [24, 24] });

  window.setTimeout(() => map.invalidateSize(), 0);
  canvas.dataset.ready = "true";
}

renderHeader();
renderFooter();
mountCollection('[data-home-panels="true"]', siteData.homePanels, createCard);
mountCollection('[data-reviews-grid="featured"]', siteData.reviews, createReviewCard, 3);
mountCollection('[data-reviews-grid="full"]', siteData.reviews, createReviewCard);
wireForms();
wireGallery();
wireMap();
