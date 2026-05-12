"use strict";

const STORAGE_KEY = "telcoCampaignDashboard.v2";
const LAUNCH_DATE = "2026-05-21";

const seedMeta = {
  title: "Global Telco Campaign - Activity Tracker",
  lastUpdated: "May 7, 2026",
  sourceFile: "Q2 Global Telecom Campaign Activity Tracker.xlsx",
};

const seedActivities = [
  { id: "1", section: "VALUE PROP & POSITIONING", workstream: "Value Prop & Positioning", activity: "Finalize Telco value proposition — confirm Foundever response across 4 challenge pillars (Differentiation, Loyalty, Revenue Generation, Efficiency)", status: "Complete", owners: "Alex Rivas → Ryan (sign-off)", dueLabel: "Before tomorrow's telco call (May 7)", dueDate: "2026-05-07", priority: "High", blockers: "Awaiting Ryan's final sign-off. Value prop is the upstream dependency for e-book, landing page, and ad copy.", notes: "Came out of Telco Summit session. Alex has the draft and is aligned with Ryan. Will share once confirmed.", assets: "Telco-value proposition-Foundever.pptx", complete: "x" },
  { id: "2", section: "VALUE PROP & POSITIONING", workstream: "Value Prop & Positioning", activity: "Update deck — incorporate finalized value prop into top slides and Foundever response section (right side of slide 4)", status: "complete", owners: "Raluca Mitran", dueLabel: "After value prop received; before working session", dueDate: "", priority: "High", blockers: "Blocked on Alex sharing value prop (item #1). Innovation/disruption element (agent-facing CX) identified as missing — must be added.", notes: "Post-Telco Summit update from Alex: 4 pillars remain, key differentiation message now centers on convergence (telcos fighting for household revenue).", assets: "", complete: "" },
  { id: "3", section: "VALUE PROP & POSITIONING", workstream: "Value Prop & Positioning", activity: "Review Telco Summit spreadsheet and incorporate specific marketing asks into activation plan", status: "In Progress", owners: "Raluca Mitran", dueLabel: "Before tomorrow's telco call (May 7)", dueDate: "2026-05-07", priority: "High", blockers: "Spreadsheet not yet reviewed by Raluca. Contains specific assets and asks identified in the room that need to flow into the deck.", notes: "Need to follow up with Ori or Fauzzia 5/9", assets: "", complete: "" },
  { id: "4", section: "eBOOK & CONTENT", workstream: "eBook & Content", activity: "Telco eBook — finalize Foundever response sections and copy direction across 4 challenge themes", status: "Planned", owners: "Christopher + SME TBD / Alex Rivas", dueLabel: "TBD (Hollie to provide)", dueDate: "", priority: "High", blockers: "Cannot finalize until value prop and Foundever positioning is confirmed. SME to support Christopher not yet identified.", notes: "Send presentation to Hollie and empower to move forward with ebook 5/9", assets: "", complete: "" },
  { id: "5", section: "eBOOK & CONTENT", workstream: "eBook & Content", activity: "Telco  —  ad content validation", status: "In Progress", owners: "Raluca", dueLabel: "May 9, 2026", dueDate: "2026-05-09", priority: "High", blockers: "SME not yet assigned. Needed to validate that ad content and eBook messaging 'speaks the same language' as Telco team.", notes: "Send over to Adil", assets: "", complete: "" },
  { id: "6", section: "eBOOK & CONTENT", workstream: "eBook & Content", activity: "Share list of specific assets identified at Telco Summit (topics/formats discussed in the room) for inclusion in activation plan", status: "In Progress", owners: "Anamika Gupta / Alex Rivas / Hollie Keith", dueLabel: "Before tomorrow's telco call (May 7)", dueDate: "2026-05-07", priority: "High", blockers: "These were discussed in the room but never actioned because this sync hadn't happened yet.", notes: "Anamika and Alex to sync, compile list, and send to Raluca to add to the plan.", assets: "", complete: "" },
  { id: "7", section: "LANDING PAGE", workstream: "Landing Page", activity: "Landing page — finalize key figures, solution groupings, and positioning content", status: "In Progress", owners: "Raluca Mitran / Telco SMEs (Sales + Solutions Marketing)", dueLabel: "goal deadline 5/21/2026", dueDate: "2026-05-21", priority: "High", blockers: "Key figures and solution groupings not yet confirmed. Requires joint effort from solutions marketing and sales (mirrors Insurance process with Lee & Cass).", notes: "Raluca has built MVP draft. Process: closed working sessions with relevant SMEs to define messaging — same approach used successfully for Insurance landing page.", assets: "https://rmitran-foundever.github.io/foundever-insurance-lp/", complete: "" },
  { id: "8", section: "LANDING PAGE", workstream: "Landing Page", activity: "Landing page — figure out hook details + define call-to-action (CTA)", status: "In Progress", owners: "Raluca Mitran / Telco Sales / Solutions Marketing", dueLabel: "goal deadline 5/21/2026", dueDate: "2026-05-21", priority: "High", blockers: "CTA direction not yet decided. Ideas discussed: quick-win assessment, CX diagnostic (modeled on Insurance's customer journey mapping diagnosis) needs to be finalized.", notes: "For Insurance, CTA idea came from sales and SMEs in working session. Same approach recommended for Telco.", assets: "", complete: "" },
  { id: "10", section: "LANDING PAGE", workstream: "Landing Page", activity: "Landing page — brand/design review once content is finalized", status: "Planned", owners: "TJ's Team / Brand Team", dueLabel: "sync scheduled 5/12; goal deadline 5/21/2026", dueDate: "2026-05-12", priority: "Medium", blockers: "Brand review gating: content and CTA must be finalized first.", notes: "Same review process as Insurance page. Hosting decision (industry page vs. ungated vs. thought leadership) also TBD.", assets: "", complete: "" },
  { id: "11", section: "ABM & TARGET ACCOUNTS", workstream: "ABM — Target Accounts", activity: "Define ABM approach — finalize target account list prioritization and assign outreach ownership (NA + EMEA)", status: "In Progress", owners: "Sales/Jinesh", dueLabel: "May 8, 2026", dueDate: "2026-05-08", priority: "High", blockers: "Account list prioritization not yet complete. Venky exploring who from the team can handle outreach (not a large number of accounts).", notes: "NA: 4 identified accounts including Verizon. EMEA: ABM 1-to-1 motion for existing clients not yet confirmed — needs verification before inclusion in plan.", assets: "", complete: "" },
  { id: "12", section: "ABM & TARGET ACCOUNTS", workstream: "ABM — Target Accounts", activity: "Add NA target account names to GTM motion slide in deck (for clarity in tomorrow's presentation)", status: "In Progress", owners: "Raluca Mitran / Anamika Gupta", dueLabel: "May 8, 2026", dueDate: "2026-05-08", priority: "High", blockers: "", notes: "Anamika confirmed she has the list. Including it in the deck demonstrates clarity and preparedness to the Telco team.", assets: "", complete: "" },
  { id: "13", section: "ABM & TARGET ACCOUNTS", workstream: "ABM — Target Accounts", activity: "Clarify EMEA ABM motion — confirm whether 1-to-1 existing client motion exists for EMEA or flag as TBD", status: "Pending", owners: "Petar Zaykov / EMEA Sales", dueLabel: "May 8, 2026", dueDate: "2026-05-08", priority: "High", blockers: "Petar noted EMEA is 'parked' for existing accounts currently — only 1-to-few new logo motion active. Needs confirmation before being shown in deck.", notes: "Current recommendation: flag EMEA 1-to-1 as 'confirmation needed' on the GTM slide.", assets: "", complete: "" },
  { id: "14", section: "ORGANIC SOCIAL & EVENTS", workstream: "Organic Social", activity: "Define organic social plan — align Barnaby on Telco SME rotation and content structure", status: "Planned", owners: "Raluca Mitran / Adil / Barnaby", dueLabel: "May 12, 2026", dueDate: "2026-05-12", priority: "Medium", blockers: "Amplify has limited seats (~25). SME rotation not yet confirmed. Need to align on which SMEs participate by campaign motion.", notes: "", assets: "", complete: "" },
  { id: "15", section: "ORGANIC SOCIAL & EVENTS", workstream: "Organic Social", activity: "Executive amplification — align Amplify rollout with Telco campaign so exec layer (Ryan, Amiya, Adil, Sean) reposts SME content", status: "Planned", owners: "/ Barnaby / Raluca Mitran", dueLabel: "May 12, 2026", dueDate: "2026-05-12", priority: "Medium", blockers: "Amplify is rolling out to executive layer first. Need to ensure content feed is tied to campaign motions, not siloed.", notes: "Saurabh flagged: exec reposts extend network reach to analyst community and broader audience. Anamika confirmed this is in scope for Amplify rollout.", assets: "", complete: "" },
  { id: "20", section: "STAKEHOLDER PREP & ALIGNMENT", workstream: "Sales Team Kick Off", activity: "Use 30 min as kickoff to divide workstreams, set working group expectations, and surface only unanswered gaps", status: "Planned", owners: "All attendees / Taluca (lead)", dueLabel: "May 7, 2026", dueDate: "2026-05-07", priority: "High", blockers: "Key open questions for tomorrow: (1) Who supports outreach for target accounts? (2) Who from team can pick up Venky's tasks once campaign runs? (3) How to partner with Wick? (4) SME availability for working sessions.", notes: "Goal: establish same working model as Insurance (Cass & Lee). Not a large group call — focused working sessions to follow.", assets: "", complete: "" },
];

let state = loadState();
let toastTimer = null;

function createDefaultState() {
  return { meta: { ...seedMeta }, launchDate: LAUNCH_DATE, activities: structuredClone(seedActivities), pinnedIds: [], performance: [createPerformanceRow()] };
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return createDefaultState();
    const parsed = JSON.parse(stored);
    return { ...createDefaultState(), ...parsed, meta: { ...seedMeta, ...(parsed.meta || {}) }, activities: Array.isArray(parsed.activities) ? parsed.activities : structuredClone(seedActivities), pinnedIds: Array.isArray(parsed.pinnedIds) ? parsed.pinnedIds : [], performance: Array.isArray(parsed.performance) && parsed.performance.length ? parsed.performance : [createPerformanceRow()] };
  } catch (error) {
    console.warn("Could not load stored dashboard state.", error);
    return createDefaultState();
  }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function createPerformanceRow() {
  return { id: globalThis.crypto?.randomUUID ? crypto.randomUUID() : `row-${Date.now()}-${Math.random().toString(16).slice(2)}`, week: "", channel: "", spend: "", impressions: "", clicks: "", landingVisits: "", leads: "", mqls: "", sqls: "", opportunities: "", pipeline: "" };
}

function normalizeStatus(status) {
  const value = String(status || "").trim().toLowerCase();
  if (["complete", "completed", "done", "x"].includes(value)) return "Complete";
  if (["in progress", "in-progress", "active", "working"].includes(value)) return "In Progress";
  if (value === "planned") return "Planned";
  if (value === "pending") return "Pending";
  return status ? String(status).trim() : "Pending";
}

function isComplete(activity) { return normalizeStatus(activity.status) === "Complete" || String(activity.complete || "").trim().toLowerCase() === "x"; }
function getToday() { const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), now.getDate()); }
function toDate(value) { if (!value) return null; const parsed = new Date(`${value}T00:00:00`); return Number.isNaN(parsed.getTime()) ? null : parsed; }
function dayDiff(dateValue, fromDate = getToday()) { const date = toDate(dateValue); if (!date) return null; return Math.round((date - fromDate) / 86400000); }
function dueState(activity) { const diff = dayDiff(activity.dueDate); if (diff === null) return "unresolved"; if (diff < 0 && !isComplete(activity)) return "overdue"; if (diff <= 7 && !isComplete(activity)) return "next7"; return "scheduled"; }
function hasBlocker(activity) { return Boolean(String(activity.blockers || "").trim()); }
function isUnresolvedDue(activity) { const label = String(activity.dueLabel || "").toLowerCase(); return !activity.dueDate || label.includes("tbd") || label.includes("after ") || label.includes("before tomorrow"); }

function priorityScore(activity) {
  let score = 0;
  const priority = String(activity.priority || "").toLowerCase();
  const diff = dayDiff(activity.dueDate);
  const text = `${activity.activity} ${activity.workstream} ${activity.blockers}`.toLowerCase();
  if (state.pinnedIds.includes(activity.id)) score += 1000;
  if (priority === "high") score += 70;
  if (priority === "medium") score += 35;
  if (hasBlocker(activity)) score += 32;
  if (isUnresolvedDue(activity)) score += 24;
  if (diff !== null && diff < 0 && !isComplete(activity)) score += 54;
  if (diff !== null && diff >= 0 && diff <= 3 && !isComplete(activity)) score += 42;
  if (diff !== null && diff > 3 && diff <= 7 && !isComplete(activity)) score += 22;
  if (text.includes("landing page") || text.includes("value prop") || text.includes("abm") || text.includes("ebook")) score += 14;
  if (normalizeStatus(activity.status) === "Pending") score += 16;
  if (isComplete(activity)) score -= 180;
  return score;
}

function summarize() {
  const activities = state.activities;
  const statusCounts = { Complete: 0, "In Progress": 0, Planned: 0, Pending: 0 };
  let high = 0, medium = 0, stuck = 0;
  activities.forEach((activity) => {
    const status = normalizeStatus(activity.status);
    statusCounts[status] = (statusCounts[status] || 0) + 1;
    if (String(activity.priority).toLowerCase() === "high") high += 1;
    if (String(activity.priority).toLowerCase() === "medium") medium += 1;
    if (!isComplete(activity) && (hasBlocker(activity) || isUnresolvedDue(activity) || normalizeStatus(activity.status) === "Pending")) stuck += 1;
  });
  const complete = activities.filter(isComplete).length;
  return { total: activities.length, complete, readiness: activities.length ? Math.round((complete / activities.length) * 100) : 0, statusCounts, high, medium, stuck };
}

function formatDate(value) { const date = toDate(value); if (!date) return ""; return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); }
function formatNumber(value) { const number = Number(value) || 0; return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(number); }
function formatCurrency(value) { const number = Number(value) || 0; return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(number); }
function formatPercent(value) { if (!Number.isFinite(value)) return "0.0%"; return `${(value * 100).toFixed(1)}%`; }
function escapeHtml(value) { return String(value || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }

function getFilteredActivities() {
  const search = document.getElementById("search-filter").value.trim().toLowerCase();
  const workstream = document.getElementById("workstream-filter").value;
  const status = document.getElementById("status-filter").value;
  const priority = document.getElementById("priority-filter").value;
  const due = document.getElementById("due-filter").value;
  return state.activities.filter((activity) => {
    const haystack = `${activity.activity} ${activity.owners} ${activity.blockers} ${activity.notes} ${activity.workstream}`.toLowerCase();
    const priorityValue = activity.priority || "";
    if (search && !haystack.includes(search)) return false;
    if (workstream && activity.workstream !== workstream) return false;
    if (status && normalizeStatus(activity.status) !== status) return false;
    if (priority === "blank" && priorityValue) return false;
    if (priority && priority !== "blank" && priorityValue !== priority) return false;
    if (due && dueState(activity) !== due) return false;
    return true;
  });
}

function render() {
  renderFilters(); renderHero(); renderPriorities(); renderStatus(); renderReadiness(); renderActivities(); renderStuckWork(); renderRisks(); renderPerformance();
  window.dashboardDebug = { state, summarize, getFilteredActivities, priorityScore };
}

function renderFilters() {
  const select = document.getElementById("workstream-filter");
  const current = select.value;
  const workstreams = [...new Set(state.activities.map((item) => item.workstream).filter(Boolean))].sort();
  select.innerHTML = `<option value="">All workstreams</option>${workstreams.map((item) => `<option>${escapeHtml(item)}</option>`).join("")}`;
  select.value = workstreams.includes(current) ? current : "";
}

function renderHero() {
  const summary = summarize();
  const launchDiff = dayDiff(state.launchDate);
  document.getElementById("countdown-days").textContent = launchDiff === null ? "--" : Math.max(launchDiff, 0);
  document.getElementById("readiness-score").textContent = `${summary.readiness}%`;
  document.getElementById("high-priority-count").textContent = summary.high;
  document.getElementById("stuck-count").textContent = summary.stuck;
  document.getElementById("last-updated").textContent = `Last updated: ${state.meta.lastUpdated}`;
  document.getElementById("launch-message").textContent = launchDiff === null ? "Set a launch date to activate countdown and urgency signals." : launchDiff < 0 ? "Campaign launch target has passed. Keep this view focused on live performance and unresolved follow-up." : `${launchDiff} days to launch. Focus on high-priority blockers, launch-page readiness, ABM clarity, and content validation.`;
}

function renderPriorities() {
  const list = document.getElementById("priority-list");
  const priorities = [...state.activities].filter((activity) => !isComplete(activity)).sort((a, b) => priorityScore(b) - priorityScore(a)).slice(0, 6);
  if (!priorities.length) { list.innerHTML = `<p class="empty-state">Everything is marked complete. Nice and quiet in here.</p>`; return; }
  list.innerHTML = priorities.map((activity, index) => {
    const pinned = state.pinnedIds.includes(activity.id);
    const due = activity.dueDate ? formatDate(activity.dueDate) : activity.dueLabel || "Date unresolved";
    return `<article class="priority-item"><div class="priority-item-header"><h3>${index + 1}. ${escapeHtml(activity.activity)}</h3><button class="pin-button" type="button" data-action="toggle-pin" data-id="${activity.id}" aria-pressed="${pinned}" title="${pinned ? "Unpin" : "Pin"} priority">${pinned ? "Pinned" : "Pin"}</button></div><div class="tag-strip">${tag(activity.priority || "No priority", activity.priority === "High" ? "tag-high" : activity.priority === "Medium" ? "tag-medium" : "")}${tag(normalizeStatus(activity.status), normalizeStatus(activity.status) === "Complete" ? "tag-complete" : "")}${tag(activity.workstream)}${pinned ? tag("Pinned", "tag-complete") : ""}</div><p class="priority-meta"><strong>Owner:</strong> ${escapeHtml(activity.owners || "Unassigned")} | <strong>Due:</strong> ${escapeHtml(due)}</p>${activity.blockers ? `<p class="priority-meta"><strong>Watch:</strong> ${escapeHtml(activity.blockers)}</p>` : ""}</article>`;
  }).join("");
}

function tag(text, className = "") { return `<span class="tag ${className}">${escapeHtml(text)}</span>`; }
function statusTone(status) { return `tone-${normalizeStatus(status).toLowerCase().replaceAll(" ", "-")}`; }
function priorityTone(priority) { const value = String(priority || "none").toLowerCase(); return `tone-priority-${value || "none"}`; }
function groupTone(index) { return `group-tone-${(index % 6) + 1}`; }

function renderStatus() {
  const { statusCounts, total } = summarize();
  const statusClass = { Complete: "status-complete", "In Progress": "status-in-progress", Planned: "status-planned", Pending: "status-pending" };
  document.getElementById("status-stack").innerHTML = Object.entries(statusCounts).map(([status, count]) => `<span class="status-segment ${statusClass[status] || ""}" style="width:${total ? (count / total) * 100 : 0}%" title="${status}: ${count}"></span>`).join("");
  document.getElementById("status-legend").innerHTML = Object.entries(statusCounts).map(([status, count]) => `<div><dt>${escapeHtml(status)}</dt><dd>${count}</dd></div>`).join("");
}

function renderReadiness() {
  const groups = new Map();
  state.activities.forEach((activity) => { if (!groups.has(activity.workstream)) groups.set(activity.workstream, []); groups.get(activity.workstream).push(activity); });
  document.getElementById("workstream-readiness").innerHTML = [...groups.entries()].map(([workstream, rows]) => {
    const complete = rows.filter(isComplete).length;
    const pct = Math.round((complete / rows.length) * 100);
    return `<div class="readiness-item"><div class="readiness-top"><span>${escapeHtml(workstream)}</span><span>${complete}/${rows.length} (${pct}%)</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
  }).join("");
}

function renderActivities() {
  const body = document.getElementById("activity-body");
  const rows = getFilteredActivities();
  const groups = [];
  rows.forEach((activity) => { let group = groups.find((item) => item.workstream === activity.workstream); if (!group) { group = { workstream: activity.workstream || "Unassigned", rows: [] }; groups.push(group); } group.rows.push(activity); });
  body.innerHTML = groups.map((group, groupIndex) => {
    const groupHeader = `<tr class="group-row ${groupTone(groupIndex)}"><td colspan="7"><span class="group-dot"></span><strong>${escapeHtml(group.workstream)}</strong><span>${group.rows.length} item${group.rows.length === 1 ? "" : "s"}</span></td></tr>`;
    const groupRows = group.rows.map((activity) => {
      const pinned = state.pinnedIds.includes(activity.id);
      const dueLabel = activity.dueLabel || (activity.dueDate ? formatDate(activity.dueDate) : "No deadline");
      const asset = activity.assets && activity.assets.startsWith("http") ? `<a href="${escapeHtml(activity.assets)}" target="_blank" rel="noreferrer">Asset link</a>` : escapeHtml(activity.assets || "");
      return `<tr data-id="${activity.id}"><td><button class="pin-button" type="button" data-action="toggle-pin" data-id="${activity.id}" aria-pressed="${pinned}" title="${pinned ? "Unpin" : "Pin"} priority">${pinned ? "Pinned" : "Pin"}</button></td><td><div class="activity-title"><strong>${escapeHtml(activity.activity)}</strong><span class="activity-meta">#${escapeHtml(activity.id)} | ${escapeHtml(activity.workstream)} | ${escapeHtml(activity.section)}</span>${asset ? `<span class="activity-meta">${asset}</span>` : ""}</div></td><td><select class="status-select ${statusTone(activity.status)}" data-field="status" data-id="${activity.id}" aria-label="Status for ${escapeHtml(activity.activity)}">${["Complete", "In Progress", "Planned", "Pending"].map((status) => `<option ${normalizeStatus(activity.status) === status ? "selected" : ""}>${status}</option>`).join("")}</select></td><td><select class="priority-select ${priorityTone(activity.priority)}" data-field="priority" data-id="${activity.id}" aria-label="Priority for ${escapeHtml(activity.activity)}">${["High", "Medium", "Low", ""].map((priority) => `<option value="${priority}" ${activity.priority === priority ? "selected" : ""}>${priority || "No priority"}</option>`).join("")}</select></td><td><input data-field="owners" data-id="${activity.id}" value="${escapeHtml(activity.owners)}" aria-label="Owner"></td><td><input type="date" data-field="dueDate" data-id="${activity.id}" value="${escapeHtml(activity.dueDate)}" aria-label="Due date"><input data-field="dueLabel" data-id="${activity.id}" value="${escapeHtml(dueLabel)}" aria-label="Due label"></td><td><textarea class="blocker-input" data-field="blockers" data-id="${activity.id}" aria-label="Blockers">${escapeHtml(activity.blockers)}</textarea><textarea class="note-input" data-field="notes" data-id="${activity.id}" aria-label="Notes">${escapeHtml(activity.notes)}</textarea></td></tr>`;
    }).join("");
    return groupHeader + groupRows;
  }).join("");
  document.getElementById("tracker-count").textContent = `Showing ${rows.length} of ${state.activities.length} activities.`;
}

function renderStuckWork() {
  const items = state.activities.filter((activity) => !isComplete(activity) && (hasBlocker(activity) || isUnresolvedDue(activity) || normalizeStatus(activity.status) === "Pending")).sort((a, b) => priorityScore(b) - priorityScore(a));
  document.getElementById("stuck-summary").textContent = `${items.length} items need attention`;
  document.getElementById("stuck-list").innerHTML = items.length ? items.map((activity) => {
    const reasons = [];
    if (hasBlocker(activity)) reasons.push("Blocker");
    if (isUnresolvedDue(activity)) reasons.push("Unclear due date");
    if (dueState(activity) === "overdue") reasons.push("Overdue");
    if (normalizeStatus(activity.status) === "Pending") reasons.push("Pending");
    return `<article class="stuck-item"><div class="stuck-item-header"><h3>${escapeHtml(activity.activity)}</h3><span class="small-pill">#${escapeHtml(activity.id)}</span></div><div class="tag-strip">${reasons.map((reason) => tag(reason, reason === "Blocker" || reason === "Overdue" ? "tag-high" : "tag-medium")).join("")}</div><p class="stuck-meta"><strong>${escapeHtml(activity.workstream)}</strong> | ${escapeHtml(activity.owners || "Unassigned")} | ${escapeHtml(activity.dueLabel || formatDate(activity.dueDate) || "No date")}</p>${activity.blockers ? `<p class="stuck-meta">${escapeHtml(activity.blockers)}</p>` : ""}</article>`;
  }).join("") : `<p class="empty-state">No blockers or unresolved items right now.</p>`;
}

function renderRisks() {
  const launchDiff = dayDiff(state.launchDate);
  const overdue = state.activities.filter((activity) => dueState(activity) === "overdue").length;
  const unresolved = state.activities.filter((activity) => !isComplete(activity) && isUnresolvedDue(activity)).length;
  const pending = state.activities.filter((activity) => !isComplete(activity) && normalizeStatus(activity.status) === "Pending").length;
  const highOpen = state.activities.filter((activity) => !isComplete(activity) && activity.priority === "High").length;
  const signals = [`${highOpen} open high-priority items remain before launch.`, `${overdue} incomplete items are past their parsed due date.`, `${unresolved} items still have unresolved or text-only due dates.`, `${pending} items are pending and need an explicit owner/path forward.`];
  if (launchDiff !== null) signals.unshift(`${Math.max(launchDiff, 0)} days remain until the May 21 launch target.`);
  document.getElementById("risk-list").innerHTML = signals.map((signal) => `<li>${escapeHtml(signal)}</li>`).join("");
}

function performanceTotals() {
  const totals = { spend: 0, impressions: 0, clicks: 0, landingVisits: 0, leads: 0, mqls: 0, sqls: 0, opportunities: 0, pipeline: 0 };
  state.performance.forEach((row) => Object.keys(totals).forEach((key) => { totals[key] += Number(row[key]) || 0; }));
  return totals;
}

function renderPerformance() {
  const totals = performanceTotals();
  const ctr = totals.impressions ? totals.clicks / totals.impressions : 0;
  const roi = totals.spend ? (totals.pipeline - totals.spend) / totals.spend : 0;
  const hasData = Object.values(totals).some((value) => value > 0);
  const summary = [["Spend", formatCurrency(totals.spend)], ["Impressions", formatNumber(totals.impressions)], ["Clicks", formatNumber(totals.clicks)], ["CTR", formatPercent(ctr)], ["Leads", formatNumber(totals.leads)], ["MQLs", formatNumber(totals.mqls)], ["SQLs", formatNumber(totals.sqls)], ["Opps", formatNumber(totals.opportunities)], ["Pipeline", formatCurrency(totals.pipeline)], ["ROI", formatPercent(roi)]];
  document.getElementById("performance-summary").innerHTML = summary.map(([label, value]) => `<article class="compact-metric"><span>${label}</span><strong>${value}</strong></article>`).join("");
  document.getElementById("performance-body").innerHTML = state.performance.map((row) => {
    const impressions = Number(row.impressions) || 0, clicks = Number(row.clicks) || 0, spend = Number(row.spend) || 0, pipeline = Number(row.pipeline) || 0;
    return `<tr data-id="${row.id}">${performanceInput(row, "week", "date")}${performanceInput(row, "channel", "text")}${performanceInput(row, "spend", "number")}${performanceInput(row, "impressions", "number")}${performanceInput(row, "clicks", "number")}<td class="calculated-cell" data-row-ctr="${row.id}">${formatPercent(impressions ? clicks / impressions : 0)}</td>${performanceInput(row, "landingVisits", "number")}${performanceInput(row, "leads", "number")}${performanceInput(row, "mqls", "number")}${performanceInput(row, "sqls", "number")}${performanceInput(row, "opportunities", "number")}${performanceInput(row, "pipeline", "number")}<td class="calculated-cell" data-row-roi="${row.id}">${formatPercent(spend ? (pipeline - spend) / spend : 0)}</td><td><button class="remove-button" type="button" data-action="remove-performance" data-id="${row.id}" title="Remove row">X</button></td></tr>`;
  }).join("");
  renderFunnel(totals, hasData);
}

function performanceInput(row, field, type) {
  const inputType = type === "number" ? "text" : type;
  const numberMode = type === "number" ? ` inputmode="decimal" pattern="[0-9]*"` : "";
  const placeholder = field === "channel" ? ` placeholder="Channel"` : "";
  return `<td><input type="${inputType}" data-performance-field="${field}" data-id="${row.id}" value="${escapeHtml(row[field])}"${numberMode}${placeholder} aria-label="${field}"></td>`;
}

function refreshPerformanceOutputs(rowId = "") {
  const totals = performanceTotals();
  const ctr = totals.impressions ? totals.clicks / totals.impressions : 0;
  const roi = totals.spend ? (totals.pipeline - totals.spend) / totals.spend : 0;
  const summary = [["Spend", formatCurrency(totals.spend)], ["Impressions", formatNumber(totals.impressions)], ["Clicks", formatNumber(totals.clicks)], ["CTR", formatPercent(ctr)], ["Leads", formatNumber(totals.leads)], ["MQLs", formatNumber(totals.mqls)], ["SQLs", formatNumber(totals.sqls)], ["Opps", formatNumber(totals.opportunities)], ["Pipeline", formatCurrency(totals.pipeline)], ["ROI", formatPercent(roi)]];
  document.getElementById("performance-summary").innerHTML = summary.map(([label, value]) => `<article class="compact-metric"><span>${label}</span><strong>${value}</strong></article>`).join("");
  renderFunnel(totals, Object.values(totals).some((value) => value > 0));
  if (!rowId) return;
  const row = state.performance.find((item) => item.id === rowId);
  if (!row) return;
  const impressions = Number(row.impressions) || 0, clicks = Number(row.clicks) || 0, spend = Number(row.spend) || 0, pipeline = Number(row.pipeline) || 0;
  const ctrCell = document.querySelector(`[data-row-ctr="${CSS.escape(rowId)}"]`);
  const roiCell = document.querySelector(`[data-row-roi="${CSS.escape(rowId)}"]`);
  if (ctrCell) ctrCell.textContent = formatPercent(impressions ? clicks / impressions : 0);
  if (roiCell) roiCell.textContent = formatPercent(spend ? (pipeline - spend) / spend : 0);
}

function renderFunnel(totals, hasData) {
  const funnel = [["Impressions", totals.impressions], ["Clicks", totals.clicks], ["Landing Visits", totals.landingVisits], ["Leads", totals.leads], ["MQLs", totals.mqls], ["SQLs", totals.sqls], ["Opportunities", totals.opportunities]];
  const max = Math.max(...funnel.map(([, value]) => value), 1);
  document.getElementById("funnel-bars").innerHTML = funnel.map(([label, value]) => `<div class="funnel-bar"><div class="funnel-bar-top"><span>${label}</span><span>${formatNumber(value)}</span></div><div class="progress-track"><div class="progress-fill" style="width:${hasData ? Math.max(4, (value / max) * 100) : 0}%"></div></div></div>`).join("");
  document.getElementById("launch-empty").hidden = hasData;
}

function updateActivity(id, field, value) { const activity = state.activities.find((item) => item.id === id); if (!activity) return; setActivityValue(activity, field, value); saveState(); render(); }
function setActivityValue(activity, field, value) { activity[field] = value; if (field === "status") activity.complete = normalizeStatus(value) === "Complete" ? "x" : ""; }
function updatePerformance(id, field, value, rerender = true) { const row = state.performance.find((item) => item.id === id); if (!row) return; row[field] = value; saveState(); if (rerender) renderPerformance(); }
function togglePin(id) { state.pinnedIds = state.pinnedIds.includes(id) ? state.pinnedIds.filter((item) => item !== id) : [...state.pinnedIds, id]; saveState(); render(); }

function exportJson() {
  const payload = { exportedAt: new Date().toISOString(), version: 1, ...state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = "telco-campaign-dashboard-export.json"; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  showToast("Dashboard data exported.");
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result || "{}"));
      if (!Array.isArray(data.activities)) throw new Error("Missing activities array.");
      state = { ...createDefaultState(), ...data, meta: { ...seedMeta, ...(data.meta || {}) }, pinnedIds: Array.isArray(data.pinnedIds) ? data.pinnedIds : [], performance: Array.isArray(data.performance) && data.performance.length ? data.performance : [createPerformanceRow()] };
      saveState(); render(); showToast("Imported dashboard data.");
    } catch (error) { showToast(`Import failed: ${error.message}`); }
  };
  reader.readAsText(file);
}

function resetSeed() { if (!confirm("Reset dashboard to the original workbook seed? This clears local edits in this browser.")) return; state = createDefaultState(); saveState(); render(); showToast("Dashboard reset to workbook seed."); }
function showToast(message) { const toast = document.getElementById("toast"); toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600); }

function bindEvents() {
  document.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches("#search-filter")) renderActivities();
    if (target.matches("[data-field]")) { const activity = state.activities.find((item) => item.id === target.dataset.id); if (activity) { setActivityValue(activity, target.dataset.field, target.value); saveState(); } }
    if (target.matches("[data-performance-field]")) { updatePerformance(target.dataset.id, target.dataset.performanceField, target.value, false); refreshPerformanceOutputs(target.dataset.id); }
  });
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches("#workstream-filter, #status-filter, #priority-filter, #due-filter")) renderActivities();
    if (target.matches("[data-field]")) updateActivity(target.dataset.id, target.dataset.field, target.value);
    if (target.matches("#import-file") && target.files && target.files[0]) importJson(target.files[0]);
  });
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "toggle-pin") togglePin(id);
    if (action === "export") exportJson();
    if (action === "reset") resetSeed();
    if (action === "add-performance") { state.performance.push(createPerformanceRow()); saveState(); renderPerformance(); showToast("Added a launch data row."); }
    if (action === "remove-performance") { state.performance = state.performance.filter((row) => row.id !== id); if (!state.performance.length) state.performance.push(createPerformanceRow()); saveState(); renderPerformance(); }
  });
}

bindEvents();
render();
