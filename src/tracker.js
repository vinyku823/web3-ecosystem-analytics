// src/tracker.js

// Import dataset
const projects = require("../data/projects.json");

// -----------------------------
// 📊 Category Tracking
// -----------------------------
function trackByCategory(projectList) {
  const stats = {};

  projectList.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });

  return stats;
}

// -----------------------------
// ⭐ Project Score Calculation
// -----------------------------
function calculateScore(project) {
  return (
    project.activity * 0.4 +
    project.growth * 0.3 +
    project.ecosystemWeight * 0.3
  );
}

// -----------------------------
// 📈 Trend Detection
// -----------------------------
function getTrend(activityHistory) {
  if (!activityHistory || activityHistory.length < 2) return "no-data";

  const first = activityHistory[0];
  const last = activityHistory[activityHistory.length - 1];

  if (last > first) return "growing";
  if (last < first) return "declining";
  return "stable";
}

// -----------------------------
// 🏆 Rank Projects
// -----------------------------
function rankProjects(projectList) {
  return projectList
    .map(p => ({
      ...p,
      score: calculateScore(p),
      trend: getTrend(p.activityHistory)
    }))
    .sort((a, b) => b.score - a.score);
}

// -----------------------------
// 🚀 Main Scanner
// -----------------------------
function scanActivity() {
  const now = new Date();

  console.log("\n🔍 Scanning blockchain ecosystems...");
  console.log("⏱ Scan time:", now);

  // 📊 Category stats
  const categoryStats = trackByCategory(projects);
  console.log("\n📊 Projects by Category:");
  console.table(categoryStats);

  // 🏆 Ranking
  const ranked = rankProjects(projects);

  console.log("\n🏆 Top 5 Projects:");
  ranked.slice(0, 5).forEach((p, i) => {
    console.log(
      `${i + 1}. ${p.name} | Score: ${p.score.toFixed(2)} | Trend: ${p.trend}`
    );
  });

  // 📈 Growing projects
  const growing = ranked.filter(p => p.trend === "growing");

  console.log("\n📈 Growing Projects:");
  growing.slice(0, 5).forEach((p, i) => {
    console.log(`${i + 1}. ${p.name}`);
  });
}

// Export
module.exports = { scanActivity };
