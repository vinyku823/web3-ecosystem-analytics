// src/app.js

// Import modules
const analytics = require("./analytics");
const tracker = require("./tracker");
const collector = require("./collector");

// -----------------------------
// 🚀 App Start
// -----------------------------
console.log("\n🚀 Starting Web3 Ecosystem Analytics Tool...\n");

// -----------------------------
// 📌 CLI Arguments (Optional)
// Example: node app.js --network ethereum
// -----------------------------
const args = process.argv;
let networkFilter = null;

if (args.includes("--network")) {
  networkFilter = args[args.indexOf("--network") + 1];
  console.log(`🌐 Filtering by network: ${networkFilter}\n`);
}

// -----------------------------
// 📂 Load Data
// -----------------------------
const projects = analytics.loadProjects();

// -----------------------------
// 🔍 Run Analytics
// -----------------------------
tracker.scanActivity(projects, networkFilter);

// -----------------------------
// 🔄 Collect / Update Data
// -----------------------------
collector.collectData();

// -----------------------------
// ✅ Done
// -----------------------------
console.log("\n✅ Analytics workflow executed successfully\n");

// -----------------------------
// 🔮 Future Enhancements
// -----------------------------
// - Real-time API integration
// - Dashboard UI (React)
// - Automated cron jobs
// - On-chain data pipelines
