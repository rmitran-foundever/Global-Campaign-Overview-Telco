const ABM_STORAGE_KEY = "telcoCampaignAbm.v1";

const seedAbmAccounts = [
  {
    id: "verizon",
    account: "Verizon",
    owners: "Ryan Holder; Rebecca Mugford",
    meetings: "11/05 Verizon\n18/05 Verizon (part II)",
    gtmPlan: "Not started",
    gtmDelivery: "Not started",
  },
  {
    id: "charter",
    account: "Charter",
    owners: "Adil Charef; James Scodellaro",
    meetings: "15/05 Charter (part I)",
    gtmPlan: "Not started",
    gtmDelivery: "Not started",
  },
  {
    id: "granite",
    account: "Granite",
    owners: "Fylma Kristile Fulks; Rebecca Mugford",
    meetings: "",
    gtmPlan: "Not started",
    gtmDelivery: "Not started",
  },
  {
    id: "breezline",
    account: "Breezline (owned by Cogeco)",
    owners: "Adil Charef; James Scodellaro",
    meetings: "",
    gtmPlan: "Not started",
    gtmDelivery: "Not started",
  },
];

let abmAccounts = loadAbmAccounts();

function loadAbmAccounts() {
  try {
    const saved = localStorage.getItem(ABM_STORAGE_KEY);
    if (!saved) {
      return structuredClone(seedAbmAccounts);
    }

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return structuredClone(seedAbmAccounts);
    }

    return seedAbmAccounts.map((seedAccount) => ({
      ...seedAccount,
      ...parsed.find((account) => account.id === seedAccount.id),
    }));
  } catch (error) {
    console.warn("ABM account data could not be loaded.", error);
    return structuredClone(seedAbmAccounts);
  }
}

function saveAbmAccounts() {
  localStorage.setItem(ABM_STORAGE_KEY, JSON.stringify(abmAccounts));
}

function renderAbmAccounts() {
  const body = document.getElementById("abm-body");
  const summary = document.getElementById("abm-summary");

  if (!body || !summary) {
    return;
  }

  summary.textContent = `${abmAccounts.length} accounts`;
  body.innerHTML = abmAccounts
    .map(
      (account) => `
        <tr>
          <td>
            <div class="abm-account-name">
              <span class="abm-dot" aria-hidden="true"></span>
              <strong>${escapeHtml(account.account)}</strong>
            </div>
          </td>
          <td>
            <textarea class="abm-textarea" data-abm-field="owners" data-id="${account.id}" aria-label="Owners for ${escapeHtml(account.account)}">${escapeHtml(account.owners)}</textarea>
          </td>
          <td>
            <textarea class="abm-textarea" data-abm-field="meetings" data-id="${account.id}" aria-label="Meetings for ${escapeHtml(account.account)}" placeholder="No meetings scheduled">${escapeHtml(account.meetings)}</textarea>
          </td>
          <td>
            <select class="abm-status ${abmTone(account.gtmPlan)}" data-abm-field="gtmPlan" data-id="${account.id}" aria-label="GTM plan for ${escapeHtml(account.account)}">
              ${abmStatusOptions(account.gtmPlan)}
            </select>
          </td>
          <td>
            <select class="abm-status ${abmTone(account.gtmDelivery)}" data-abm-field="gtmDelivery" data-id="${account.id}" aria-label="GTM delivery for ${escapeHtml(account.account)}">
              ${abmStatusOptions(account.gtmDelivery)}
            </select>
          </td>
        </tr>
      `,
    )
    .join("");
}

function abmStatusOptions(currentValue) {
  return ["Not started", "In progress", "Ready", "Delivered"]
    .map((status) => `<option value="${status}" ${status === currentValue ? "selected" : ""}>${status}</option>`)
    .join("");
}

function abmTone(status) {
  return `tone-abm-${String(status || "not-started").toLowerCase().replaceAll(" ", "-")}`;
}

function updateAbmAccount(id, field, value, shouldRender = false) {
  const account = abmAccounts.find((item) => item.id === id);
  if (!account) {
    return;
  }

  account[field] = value;
  saveAbmAccounts();

  if (shouldRender) {
    renderAbmAccounts();
  }
}

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("[data-abm-field]") || target.tagName === "SELECT") {
    return;
  }

  updateAbmAccount(target.dataset.id, target.dataset.abmField, target.value);
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("[data-abm-field]")) {
    return;
  }

  updateAbmAccount(target.dataset.id, target.dataset.abmField, target.value, target.tagName === "SELECT");
});

renderAbmAccounts();
