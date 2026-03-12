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
