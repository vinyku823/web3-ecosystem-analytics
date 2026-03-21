// src/tracker.js

// Import project dataset
const projects = require("../data/projects.json")

// Track projects by category
function trackByCategory(projectList) {
  const stats = {}

  projectList.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1
  })

  return stats
}

// Main activity scanner
function scanActivity() {
  const now = new Date()

  console.log("🔍 Scanning blockchain ecosystems...")
  console.log("⏱ Scan time:", now)

  // Analyze category distribution
  const categoryStats = trackByCategory(projects)

  console.log("📊 Projects by Category:")
  console.table(categoryStats)
}

// Export function
module.exports = { scanActivity }
