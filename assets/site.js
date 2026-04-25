const siteDetails = {
  name: "Medi-Lab Diagnostic Centre",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "care@medilab.example",
  address: "Medi-Lab Diagnostic Centre, Main Road, Your City",
  hours: "Monday to Saturday, 7:00 AM - 8:00 PM",
  pickup: "Home sample pickup available on request"
};

const tests = {
  blood: {
    name: "Blood Test",
    theme: "blood",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/><path d="M9 15c.4 1.4 1.5 2.2 3 2.2"/></svg>`,
    summary: "Complete blood screening for general health, weakness, infection checks, and routine profiles.",
    includes: ["CBC and hemoglobin", "Blood sugar screening", "Lipid profile support", "Clean sample handling"],
    preparation: ["Fasting may be needed for sugar or lipid profile", "Carry doctor prescription if available", "Drink normal water unless advised otherwise"],
    reportTime: "Most routine reports are supported on the same day after sample processing."
  },
  liver: {
    name: "Liver Function Test",
    theme: "liver",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13c0-5 3.8-8 8.2-8 2.9 0 5.8 1.1 7.3 3.6 1.9 3.1-.6 7.4-4.4 7.4h-2.6c-1.9 0-3.4 1.2-4.1 2.8-.5 1.2-2.3 1-2.7-.2L4.4 15c-.3-.7-.4-1.3-.4-2Z"/><path d="M13 7c.5 2.8 2.2 4.2 5 4.4"/></svg>`,
    summary: "Checks key liver health markers and helps monitor digestion, infection, and medication effects.",
    includes: ["Bilirubin, SGPT, SGOT", "Protein and albumin profile", "Alkaline phosphatase", "Doctor-ready report format"],
    preparation: ["Ask the booking desk if fasting is required", "Share current medicines before sample collection", "Follow your doctor's instructions for repeat testing"],
    reportTime: "Routine liver function reports are usually processed quickly after sample collection."
  },
  kidney: {
    name: "Kidney Function Test",
    theme: "kidney",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4c-2.8.5-5 3.4-5 7.4 0 4.9 2.4 8.6 5.2 8.6 1.7 0 2.8-1.4 2.8-3.2V8.2C12 5.8 10.8 3.7 9 4Z"/><path d="M15 4c2.8.5 5 3.4 5 7.4 0 4.9-2.4 8.6-5.2 8.6-1.7 0-2.8-1.4-2.8-3.2V8.2C12 5.8 13.2 3.7 15 4Z"/><path d="M12 11h3"/></svg>`,
    summary: "Measures kidney performance and waste filtration indicators for routine and follow-up care.",
    includes: ["Creatinine and urea", "Uric acid screening", "Electrolyte support", "Useful for diabetes and BP follow-up"],
    preparation: ["No special preparation for many routine panels", "Share existing kidney or BP medication details", "Confirm fasting needs while booking"],
    reportTime: "Report timing depends on the profile selected and is confirmed at booking."
  },
  urine: {
    name: "Urine Test",
    theme: "urine",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8"/><path d="M9 3v6l-4 7a3.5 3.5 0 0 0 3 5h8a3.5 3.5 0 0 0 3-5l-4-7V3"/><path d="M7.4 16h9.2"/></svg>`,
    summary: "Urine analysis for infection screening, kidney indicators, sugar traces, and routine checkups.",
    includes: ["Routine and microscopy", "Protein and sugar traces", "Infection indicators", "Hygienic collection guidance"],
    preparation: ["Use the sterile container provided by the lab", "Follow clean-catch sample guidance", "Submit the sample as soon as possible"],
    reportTime: "Routine urine analysis is commonly available after lab processing on the same day."
  }
};

const packages = [
  {
    name: "A-1.1+",
    count: "67 Tests",
    tests: [
      "BSF (Blood Sugar Fasting)",
      "CBC (Complete Blood Count)",
      "ESR (Erythrocyte Sedimentation Rate)",
      "Liver Function",
      "Kidney Function",
      "Lipid Profile",
      "Thyroid Profile"
    ]
  },
  {
    name: "P-170",
    count: "89 Tests",
    tests: [
      "BSF",
      "HBA1C",
      "CBC",
      "ESR",
      "Liver Function",
      "Kidney Function",
      "Lipid Profile",
      "Thyroid Profile",
      "Iron",
      "Urine RE/ME (Routine Examination/Microscopic Examination)"
    ]
  },
  {
    name: "NIROG-2",
    count: "92 Tests",
    tests: [
      "BSF",
      "HBA1C",
      "CBC",
      "ESR",
      "Liver Function",
      "Kidney Function",
      "Lipid/Cholesterol Profile",
      "Thyroid Profile",
      "Iron Profile",
      "Vitamin B12",
      "Vitamin D",
      "Urine Routine Examination"
    ]
  }
];

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setHref(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("href", value);
  });
}

function createList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderSharedDetails() {
  setText("[data-site-name]", siteDetails.name);
  setText("[data-phone]", siteDetails.phone);
  setText("[data-email]", siteDetails.email);
  setText("[data-address]", siteDetails.address);
  setText("[data-hours]", siteDetails.hours);
  setText("[data-pickup]", siteDetails.pickup);
  setHref("[data-phone-link]", siteDetails.phoneHref);
  setHref("[data-email-link]", `mailto:${siteDetails.email}`);
}

function renderHomeTests() {
  const grid = document.querySelector("[data-tests-grid]");
  if (!grid) return;

  grid.innerHTML = Object.entries(tests).map(([slug, test]) => `
    <a class="test-card-link" href="tests/${slug}/" aria-label="View ${test.name} details">
      <article class="test-card">
        <div class="test-title">
          <div class="test-icon ${test.theme}" aria-hidden="true">${test.icon}</div>
          <h3>${test.name}</h3>
        </div>
      </article>
    </a>
  `).join("");
}

function renderPackages() {
  const grid = document.querySelector("[data-packages-list]");
  if (!grid) return;

  grid.innerHTML = packages.map((item) => `
    <article class="package-card">
      <span class="package-count">${item.count}</span>
      <h3>${item.name}</h3>
      <ul class="clean-list">${createList(item.tests)}</ul>
    </article>
  `).join("");
}

function renderTestPage() {
  const root = document.querySelector("[data-test-page]");
  if (!root) return;

  const slug = root.getAttribute("data-test-page");
  const test = tests[slug];
  if (!test) return;

  document.title = `${test.name} | ${siteDetails.name}`;
  setText("[data-test-name]", test.name);
  setText("[data-test-summary]", test.summary);
  setText("[data-test-report-time]", test.reportTime);

  document.querySelectorAll("[data-test-theme]").forEach((element) => {
    element.classList.add(test.theme);
    element.innerHTML = test.icon;
  });

  const includes = document.querySelector("[data-test-includes]");
  const preparation = document.querySelector("[data-test-preparation]");

  if (includes) includes.innerHTML = createList(test.includes);
  if (preparation) preparation.innerHTML = createList(test.preparation);
}

renderSharedDetails();
renderHomeTests();
renderTestPage();
renderPackages();
