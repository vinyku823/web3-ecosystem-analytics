function analyzeProject(project){

 console.log("Analyzing project:",project.name)

 return {
  name:project.name,
  score:Math.floor(Math.random()*100)
 }

}

module.exports = { analyzeProject }
