const siteDetails = {
  name: "Medi-Lab Diagnostic Centre",
  phone: "9891043406, 8860628839",
  phoneHref: "tel:+918860628839",
  email: "dineshkumarmedilab@gmail.com",
  address: "Shop No - 3, DDA Market Pocket - C, Mayur Vihar Phase - II, Delhi - 91",
  hours: "Monday to Saturday, 8:00 AM - 7:00 PM",
  pickup: "Home sample pickup available on request"
};


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

function getTestLink(testName) {
  const name = testName.toLowerCase();
  if (name.includes("liver")) return "tests/liver/";
  if (name.includes("kidney")) return "tests/kidney/";
  if (name.includes("urine")) return "tests/urine/";
  return "tests/blood/";
}

function createLinkedTestList(items) {
  return items.map((item) => `<li><a href="${getTestLink(item)}">${item}</a></li>`).join("");
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

function renderProfileTable() {
  const tableBody = document.querySelector("[data-profile-table] tbody");
  if (!tableBody) return;

  tableBody.innerHTML = packages.map((item) => `
    <tr>
      <td data-label="Test Name"><a class="profile-name-link" href="tests/blood/">${item.name}</a></td>
      <td data-label="How Many Tests"><span class="package-count">${item.count}</span></td>
      <td data-label="Tests Included">
        <ul class="table-test-list">${createLinkedTestList(item.tests)}</ul>
      </td>
    </tr>
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
// renderProfileTable();
renderTestPage();
renderPackages();
