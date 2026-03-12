const analytics = require("./analytics")
const tracker = require("./tracker")
const collector = require("./collector")

console.log("Starting Web3 Ecosystem Analytics Tool")

analytics.loadProjects()

tracker.scanActivity()

collector.collectData()
