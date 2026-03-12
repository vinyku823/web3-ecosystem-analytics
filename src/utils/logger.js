function log(message){

 const time = new Date().toISOString()

 console.log("[LOG]",time,message)

}

module.exports = log
