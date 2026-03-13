function scanActivity(){

 const now = new Date()

 console.log("Scanning blockchain ecosystems...")
 console.log("Scan time:",now)

}

module.exports = { scanActivity }
// src/tracker.js
const data = require("../data/projects.json")

function trackByCategory(projects) {
  const stats = {}
  projects.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1
  })
  return stats
}

const categoryStats = trackByCategory(data.projects)
console.log("📊 Projects by Category:")
console.table(categoryStats)
