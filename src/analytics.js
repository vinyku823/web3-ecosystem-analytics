const fs = require("fs")

function loadProjects(){

 const data = JSON.parse(
  fs.readFileSync("data/projects.json")
 )

 console.log("Loaded projects:",data.length)

 data.forEach(p=>{
  console.log("Tracking project:",p.name)
 })

}

module.exports = { loadProjects }
const data = require("../data/projects.json")

function networkStats() {
  const stats = {}

  data.projects.forEach(project => {
    const network = project.network
    stats[network] = (stats[network] || 0) + 1
  })

  console.log("Web3 Ecosystem Project Distribution:")
  console.log(stats)
}

networkStats()
